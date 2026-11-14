/** Writing helpers handed to every page: links, amounts read from visas.ts and params-2026.json, tables. */
import { route, ROUTES, type Locale } from '../i18n/routes';
import { formatNumberL, money, pct, dateL } from './format-l';
import { VISAS, visaByCode, type Visa } from '../data/visas';
import { visaCost, feeOf, type CostInput } from './engine/cost';
import { SLUGS } from './mini-specs';
import P from '../data/params-2026.json';

export type SourceKey = keyof typeof P.sources;
const esc = (s: string | number) => String(s).replace(/&(?!(?:[a-z]+|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
export function table(headers: string[], rows: Array<Array<string | number>>, caption: string | undefined, align: Array<'l' | 'r'>) {
  const al = (i: number) => (align[i] === 'r' ? 'text-right' : 'text-left');
  return `<div class="not-prose my-6 overflow-x-auto"><table class="journal w-full text-sm">${caption ? `<caption class="mb-2 text-left text-sm text-navy-600">${caption}</caption>` : ''}<thead><tr>${headers.map((h, i) => `<th scope="col" class="px-3 py-2 text-xs font-semibold text-navy-700 ${al(i)}">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td class="tabular-nums border-b border-navy-100 px-3 py-2 align-top text-navy-800 ${al(i)}">${typeof c === 'number' ? esc(formatNumberL(c)) : c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

export function helpers(lang: Locale = 'en', strict = false) {
  const a = (id: string, text: string) => {
    if (!ROUTES.some((r) => r.id === id)) { if (strict) throw new Error(`Unknown page id in a link: ${id}`); return text; }
    return `<a href="${route(id, lang)}">${text}</a>`;
  };
  const ext = (url: string, text: string) => `<a href="${url}" target="_blank" rel="nofollow noopener noreferrer">${text}</a>`;
  const src = (k: SourceKey, text: string) => ext(P.sources[k].url, text);
  const aud = (n: number) => money(n, 0);
  const V = (c: string) => visaByCode(c);
  /** Link to a visa page by its code. */
  const av = (code: string, text: string) => a(SLUGS[code] ? pageIdOf(code) : 'home', text);
  const cost = (i: CostInput) => visaCost(i);
  /** Standard fee table of one visa: main applicant, adult, child, with the Pacific rate when it exists. */
  const feeTable = (code: string, caption?: string) => {
    const v = V(code);
    const rows: Array<Array<string | number>> = [['Main applicant (base charge)', aud(v.std.base), v.pacific ? aud(v.pacific.base) : 'same']];
    if (!v.separate) rows.push(['Each family member aged 18 or over', aud(v.std.add18), v.pacific ? aud(v.pacific.add18) : 'same'], ['Each family member under 18', aud(v.std.addU18), v.pacific ? aud(v.pacific.addU18) : 'same']);
    if (v.onshore) rows.push(['Main applicant, applying in Australia', aud(v.onshore.std), aud(v.onshore.pacific)]);
    for (const x of v.variants ?? []) rows.push([`${x.label}: main applicant`, aud(x.fee.base), x.pacific ? aud(x.pacific.base) : 'same']);
    return table(['Who pays', 'Standard', 'Pacific or Timor-Leste passport'], rows, caption ?? `Schedule 1 item ${v.item}, compilation in force on 1 November 2026, read on ${dateL(P.retrieved_at)}.`, ['l', 'r', 'r']);
  };
  /** Totals for typical households, from the engine. */
  const scenarios = (code: string, caption?: string) => {
    const v = V(code);
    const cases: Array<[string, CostInput]> = v.separate
      ? (v.code === '870' ? [['One parent, stay of up to 3 years', { code }], ['One parent, stay of up to 5 years', { code, longStay: true }], ['Two parents, up to 3 years each', { code, adults: 1 }]]
        : [['One person', { code }], ['Two adults, two applications', { code, adults: 1 }], ['Two adults and two children, four applications', { code, adults: 1, children: 2 }]])
      : [['Main applicant alone', { code }], ['Couple', { code, adults: 1 }], ['Couple with two children', { code, adults: 1, children: 2 }]];
    if (v.second?.adultNoEnglish) cases.push(['Couple, partner without functional English', { code, adults: 1, adultsNoEnglish: 1 }]);
    const rows = cases.map(([l, i]) => { const r = visaCost(i); return [l, aud(r.firstInstalment), r.secondInstalment ? aud(r.secondInstalment) : 'none', `<strong>${aud(r.total)}</strong>`]; });
    return table(['Who applies', 'Paid when you apply', 'Second instalment', 'Total'], rows, caption ?? `Totals worked out from Schedule 1 item ${v.item} of the Migration Regulations 1994, in force on 1 November 2026.`, ['l', 'r', 'r', 'r']);
  };
  /** Every visa: base, adult, child, second instalment; linked to its page. */
  const allFees = (codes?: string[]) => table(['Visa', 'Main applicant', 'Adult joining', 'Child joining', 'Second instalment'], VISAS.filter((v) => !codes || codes.includes(v.code)).map((v) => [
    av(v.code, v.name), aud(v.std.base), v.separate ? 'applies separately' : aud(v.std.add18), v.separate ? 'applies separately' : aud(v.std.addU18),
    v.second?.perApplicant ? `${aud(v.second.perApplicant)} per applicant` : v.second?.adultNoEnglish ? `${aud(v.second.adultNoEnglish)} per adult without functional English` : 'none',
  ]), `Standard rates, Schedule 1 of the Migration Regulations 1994, compilation in force on 1 November 2026, read on ${dateL(P.retrieved_at)}.`, ['l', 'r', 'r', 'r', 'l']);
  /** Same household on several visas. */
  const compareTable = (codes: string[], adults: number, children: number, caption?: string) => table(['Visa', 'Paid when you apply', 'Second instalment', 'Total'], codes.map((c) => { const r = visaCost({ code: c, adults, children }); return [av(c, V(c).name), aud(r.firstInstalment), r.secondInstalment ? aud(r.secondInstalment) : 'none', `<strong>${aud(r.total)}</strong>`]; }), caption, ['l', 'r', 'r', 'r']);
  const pacificTable = () => table(['Visa', 'Standard', 'Pacific or Timor-Leste', 'Saving'], VISAS.filter((v) => v.pacific && v.std.base > 0).map((v) => [av(v.code, v.name), aud(v.std.base), aud(v.pacific!.base), aud(v.std.base - v.pacific!.base)]), `Main applicant, Schedule 1 of the Migration Regulations 1994, compilation in force on 1 November 2026.`, ['l', 'r', 'r', 'r']);
  const secondTable = () => table(['Visa', 'Who pays', 'Amount'], VISAS.filter((v) => v.second).flatMap((v) => {
    const s = v.second!; const out: Array<Array<string | number>> = [];
    if (s.primaryNoEnglish) out.push([av(v.code, v.name), 'Main applicant without functional English', aud(s.primaryNoEnglish)]);
    if (s.adultNoEnglish) out.push([av(v.code, v.name), s.primaryNoEnglish ? 'Other adult without functional English' : 'Each adult without functional English', aud(s.adultNoEnglish)]);
    if (s.perApplicant) out.push([av(v.code, v.name), s.perChild ? 'Each adult' : 'Each applicant', aud(s.perApplicant)]);
    if (s.perChild) out.push([av(v.code, v.name), 'Each child under 18', aud(s.perChild)]);
    if (s.perApplicantLong) out.push([av(v.code, v.name), 'Each applicant, stay of up to 5 years', aud(s.perApplicantLong)]);
    return out;
  }), `Schedule 1 of the Migration Regulations 1994, compilation in force on 1 November 2026.`, ['l', 'l', 'r']);
  const conditions = (code: string) => `<ul>${V(code).conditions.map((c) => `<li>${c}</li>`).join('')}</ul>`;
  return {
    lang, a, av, scenarios, conditions, allFees, compareTable, pacificTable, secondTable, ext, src, aud, P, V, VISAS, cost, feeTable, fee: (c: string) => feeOf(V(c)),
    num: (n: number, d = 0) => formatNumberL(n, 'en', d), pc: (x: number, d = 0) => pct(x, 'en', d),
    date: (iso: string) => dateL(iso),
    /** Day the Regulations and the Home Affairs pages were read: "13 November 2026". */
    read: dateL(P.retrieved_at),
    table: (h: string[], r: Array<Array<string | number>>, c?: string, al: Array<'l' | 'r'> = []) => table(h, r, c, al),
    C: P.charges,
  };
}
/** Page id of a visa page (files are named after their slug). */
export const pageIdOf = (code: string) => SLUGS[code];
export type Helpers = ReturnType<typeof helpers>;
export type { Visa };
