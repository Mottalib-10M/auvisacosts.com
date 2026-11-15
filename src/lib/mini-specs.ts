/**
 * Calculators of the site (RECETTE §9.3). Every amount comes from `data/visas.ts` through `engine/cost.ts`;
 * no page holds a second formula.
 */
import type { MiniSpec } from './mini-types';
import { VISAS, visaByCode, PLAIN } from '../data/visas';
import { visaCost, addMonths, secondInstalmentDeadline, feeOf } from './engine/cost';
import { money, dateL } from './format-l';
import { TIMES, PARENT, months, said, rowLabel, rowIdx, TIMES_UPDATE } from './times';

const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, x));
const plural = (k: number, w: string) => `${k} ${k === 1 ? w : w === 'child' ? 'children' : `${w}s`}`;
/** Visas listed by what the reader wants to do, number in brackets (test-naif 2026-11-14, tour 2); the value stays
 *  the index in VISAS, so links and saved answers keep working. */
export const VISA_OPT = PLAIN.map(([code, label]) => ({ value: String(VISAS.findIndex((v) => v.code === code)), label }));
export const visaIdx = (code: string) => VISAS.findIndex((v) => v.code === code);
const visaOf = (x: number | undefined) => VISAS[clamp(Math.round(x ?? 0), 0, VISAS.length - 1)];
const YES_NO = [{ value: '0', label: 'No' }, { value: '1', label: 'Yes' }];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MONTH_OPT = MONTHS.map((m, i) => ({ value: String(i + 1), label: m }));
const YEAR_OPT = [2025, 2026, 2027].map((y) => ({ value: String(y), label: String(y) }));
const iso = (y: number, m: number, d: number) => {
  const yy = Math.round(y), mm = clamp(Math.round(m), 1, 12);
  const last = new Date(Date.UTC(yy, mm, 0)).getUTCDate();
  return `${yy}-${String(mm).padStart(2, '0')}-${String(clamp(Math.round(d), 1, last)).padStart(2, '0')}`;
};

const SPECS: Record<string, (lang: string) => MiniSpec> = {
  cost: () => costSpec(),
  decision: () => ({
    // No time is filled in for the reader (test-naif 2026-11-14: "6 and 12 months" read as an official answer).
    title: 'When a decision could come', cta: 'How processing times work',
    exemple: (v) => `Example for an application made on ${dateL(iso(v.y ?? 2026, v.m ?? 11, v.d ?? 14))}, no processing time entered yet`,
    inputs: [
      { id: 'd', label: 'Day you applied', def: 14, max: 31 },
      { id: 'm', label: 'Month you applied', def: 11, options: MONTH_OPT },
      { id: 'y', label: 'Year you applied', def: 2026, options: YEAR_OPT },
      { id: 'p50', label: 'Time for half of the applications', def: 0, unit: 'months', max: 120, decimals: 1, help: 'Enter it from the Department of Home Affairs processing times guide, if it lists this visa' },
      { id: 'p90', label: 'Time for 9 in 10 applications', def: 0, unit: 'months', max: 180, decimals: 1 },
    ],
    run: (v) => {
      const start = iso(v.y ?? 2026, v.m ?? 11, v.d ?? 14);
      const p50 = Math.max(0, v.p50 ?? 0), p90 = Math.max(p50, v.p90 ?? 0);
      if (p90 === 0) return {
        head: ['No date without an official time', 'Enter the two times'],
        rows: [['Day you applied', dateL(start)]],
        note: 'We show no date until you enter a time: we do not guess processing times.',
      };
      return {
        head: ['9 in 10 decided by', dateL(addMonths(start, p90))],
        rows: [['Half of the applications decided by', dateL(addMonths(start, p50))], ['Day you applied', dateL(start)]],
        alert: (v.p90 ?? 0) < (v.p50 ?? 0) ? 'The 90% time cannot be shorter than the 50% time: we used the 50% time for both' : undefined,
        note: 'Published times describe applications decided last month, not a promise for yours. Incomplete files, health or character checks and the yearly program caps can make it longer.',
      };
    },
  }),
  deadline: () => ({
    title: 'Last day to pay the second instalment', cta: 'Second instalment explained',
    exemple: (v) => `Example for a payment request dated ${dateL(iso(v.y ?? 2026, v.m ?? 11, v.d ?? 13))}`,
    inputs: [
      { id: 'd', label: 'Day of the payment request', def: 13, max: 31 },
      { id: 'm', label: 'Month', def: 11, options: MONTH_OPT },
      { id: 'y', label: 'Year', def: 2026, options: YEAR_OPT },
      { id: 'au', label: 'Sent from Australia to an address in Australia', def: 1, options: YES_NO },
    ],
    run: (v) => {
      const notice = iso(v.y ?? 2026, v.m ?? 11, v.d ?? 13);
      const inAu = v.au === 1;
      return {
        head: ['Pay by the end of', dateL(secondInstalmentDeadline(notice, inAu))],
        rows: [['Period', inAu ? '28 days after you are taken to receive the notice' : '70 days after you are taken to receive the notice'], ['Notice dated', dateL(notice)]],
        note: 'Regulation 2.12D. The day you are taken to receive a notice depends on how it was sent (section 494C of the Migration Act); an email counts from the day it is sent.',
      };
    },
  }),
  compare: () => ({
    title: 'Two visas, same family: the difference', cta: 'Skilled visas compared',
    exemple: (v) => `Example comparing the ${visaOf(v.v1).short} and the ${visaOf(v.v2).short} for ${plural(1 + Math.round(v.a ?? 0), 'adult')} and ${plural(Math.round(v.c ?? 0), 'child')}`,
    inputs: [
      { id: 'v1', label: 'First visa', def: visaIdx('189'), options: VISA_OPT },
      { id: 'v2', label: 'Second visa', def: visaIdx('491'), options: VISA_OPT },
      { id: 'a', label: 'Other adults applying with you', def: 1, max: 6 },
      { id: 'c', label: 'Children under 18', def: 1, max: 8 },
    ],
    run: (v) => {
      const one = visaOf(v.v1), two = visaOf(v.v2);
      const r1 = visaCost({ code: one.code, adults: one.separate ? 0 : v.a, children: v.c });
      const r2 = visaCost({ code: two.code, adults: two.separate ? 0 : v.a, children: v.c });
      const d = r2.total - r1.total;
      return {
        head: [d === 0 ? 'Same total' : d > 0 ? `${two.short} costs more by` : `${two.short} costs less by`, money(Math.abs(d))],
        rows: [[one.name, money(r1.total)], [two.name, money(r2.total)]],
        alert: one.separate || two.separate ? 'One of these visas has no family application: every person pays the full charge' : undefined,
        note: 'First instalments only, all adults with functional English. Add the second instalment where it applies with the main calculator.',
      };
    },
  }),
  pacific: () => ({
    title: 'What a Pacific or Timor-Leste passport saves', cta: 'Pacific and Timor-Leste rates',
    exemple: (v) => `Example for the ${visaOf(v.v).short} with ${plural(Math.round(v.a ?? 0), 'other adult')} and ${plural(Math.round(v.c ?? 0), 'child')}`,
    inputs: [
      { id: 'v', label: 'Visa', def: visaIdx('500'), options: VISA_OPT.filter((o) => !!VISAS[Number(o.value)].pacific) },
      { id: 'a', label: 'Other adults applying with you', def: 0, max: 6 },
      { id: 'c', label: 'Children under 18', def: 0, max: 8 },
    ],
    run: (v) => {
      const visa = visaOf(v.v);
      const std = visaCost({ code: visa.code, adults: visa.separate ? 0 : v.a, children: v.c });
      const pac = visaCost({ code: visa.code, adults: visa.separate ? 0 : v.a, children: v.c, pacific: true });
      return {
        head: ['Saved with the lower rate', money(std.firstInstalment - pac.firstInstalment)],
        rows: [['Standard rate', money(std.firstInstalment)], ['Pacific or Timor-Leste rate', money(pac.firstInstalment)]],
        note: 'The main applicant’s passport decides the rate for everyone combined with the application (Schedule 1, from 1 July 2026).',
      };
    },
  }),
  parents: () => ({
    title: 'Parent visa routes, total for your parents', cta: 'Parent visas compared',
    exemple: (v) => `Example for ${plural(Math.round(v.n ?? 2), 'parent')} applying together`,
    inputs: [{ id: 'n', label: 'Parents applying together', def: 2, options: [{ value: '1', label: 'One parent' }, { value: '2', label: 'Two parents' }] }],
    run: (v) => {
      const extra = Math.round(v.n ?? 2) - 1;
      const r103 = visaCost({ code: '103', adults: extra });
      const r143 = visaCost({ code: '143', adults: extra });
      const r173 = visaCost({ code: '173', adults: extra });
      const then143 = visaCost({ code: '143', variant: 'from173', adults: extra });
      const r870 = visaCost({ code: '870' });
      return {
        head: ['Contributory route (143), total', money(r143.total)],
        rows: [['Parent visa 103, total', money(r103.total)], ['173 then 143, both applications', money(r173.total + then143.total)], [`870 for 3 years, ${extra ? 'per parent' : 'one parent'}`, money(r870.total)]],
        note: 'Charges only. The 103 queue is far longer than the contributory one; the 870 is temporary and each parent pays it separately.',
      };
    },
  }),
  stac: () => ({
    title: 'Subsequent temporary application charge', cta: 'When the $700 applies',
    exemple: (v) => `Example for ${plural(Math.round(v.n ?? 1), 'applicant')} applying in Australia`,
    inputs: [
      { id: 'n', label: 'Applicants on the application', def: 1, max: 8 },
      { id: 'in', label: 'Applying in Australia', def: 1, options: YES_NO },
      { id: 'prev', label: 'Last visa was a temporary one applied for in Australia', def: 1, options: YES_NO },
    ],
    run: (v) => {
      const n = Math.max(1, Math.round(v.n ?? 1));
      const due = v.in === 1 && v.prev === 1;
      return {
        head: [due ? 'Charge if your new visa is on the list' : 'Charge', due ? money(700 * n) : money(0)],
        rows: [['Per applicant', money(700)], ['Applicants counted', String(n)]],
        alert: due ? undefined : 'Not payable: both conditions must be met',
        note: 'Regulation 2.12C(5)-(6). It applies only to the visas listed by the Minister in an instrument; the Department’s estimator shows whether yours is one of them.',
      };
    },
  }),
  family: () => ({
    title: 'What each extra family member adds', cta: 'Family charges explained',
    exemple: (v) => `Example for the ${visaOf(v.v).short}`,
    inputs: [{ id: 'v', label: 'Visa', def: visaIdx('820'), options: VISA_OPT.filter((o) => !VISAS[Number(o.value)].separate) }],
    run: (v) => {
      const visa = visaOf(v.v);
      const f = feeOf(visa);
      return {
        head: ['Partner or other adult adds', money(f.add18)],
        rows: [['Main applicant pays', money(f.base)], ['Each child under 18 adds', money(f.addU18)], ['Couple with two children', money(f.base + f.add18 + 2 * f.addU18)]],
        note: `Schedule 1 item ${visa.item}. The age that counts is the age on the day of the application.`,
      };
    },
  }),
};


/** Decision dates from the official 50% and 90% times, for every visa and stream, or for one visa (`times-<code>`). */
function timesSpec(code?: string): MiniSpec {
  const opts = TIMES.map((r, i) => ({ value: String(i), label: code ? (r.stream.replace('State/Territory Government Nominated Regional', 'State or territory nominated') || rowLabel(r)) : rowLabel(r) })).filter((_, i) => !code || TIMES[i].code === code);
  // Default stream: the one most applicants use (not the first one the official tool lists, e.g. 189 New Zealand).
  const main = code && MAIN_STREAM[code] ? rowIdx(code, MAIN_STREAM[code]) : Number(opts[0].value);
  const rowOf = (v: Record<string, number>) => TIMES[clamp(Math.round(v.r ?? main), 0, TIMES.length - 1)];
  const inputs: MiniSpec['inputs'] = [];
  if (opts.length > 1) inputs.push({ id: 'r', label: code ? 'Stream' : 'Visa and stream', def: main, options: opts });
  inputs.push({ id: 'd', label: 'Day you applied', def: 14, max: 31 }, { id: 'm', label: 'Month you applied', def: 11, options: MONTH_OPT }, { id: 'y', label: 'Year you applied', def: 2026, options: YEAR_OPT });
  return {
    title: code ? `When a ${code} decision could come` : 'How long your visa application could take', cta: 'Processing times explained',
    exemple: (v) => `Example for the ${rowLabel(rowOf(v))}, applied for on ${dateL(iso(v.y ?? 2026, v.m ?? 11, v.d ?? 14))}`,
    inputs,
    run: (v) => {
      const r = rowOf(v.r === undefined ? { r: main } : v);
      const start = iso(v.y ?? 2026, v.m ?? 11, v.d ?? 14);
      return {
        head: ['9 in 10 decided by', dateL(addMonths(start, months(r.p90)))],
        rows: [['Half decided by', dateL(addMonths(start, months(r.p50)))], ['Official 50% time', said(r.p50)], ['Official 90% time', said(r.p90)]],
        note: `Times published by the Department of Home Affairs (update of ${dateL(TIMES_UPDATE)}), for applications decided last month. Not a promise for your file.`,
      };
    },
  };
}
const MAIN_STREAM: Record<string, string> = { '189': 'Points-Tested', '186': 'Direct Entry Pathway', '491': 'State/Territory Government Nominated Regional', '494': 'Employer Sponsored', '870': 'Visa Application', '600': 'Tourist', '485': 'Post-Higher Education Work', '500': 'Higher Education Sector', '482': 'Core Skills' };
SPECS.times = () => timesSpec();
for (const c of [...new Set(TIMES.map((r) => r.code))]) SPECS[`times-${c}`] = () => timesSpec(c);

SPECS.waited = () => ({
  title: 'Is my visa taking longer than usual?', cta: 'Processing times explained',
  exemple: (v) => `Example for the ${rowLabel(TIMES[clamp(Math.round(v.r ?? 0), 0, TIMES.length - 1)])}, after ${v.w} months of waiting`,
  inputs: [
    { id: 'r', label: 'Visa and stream', def: rowIdx('820'), options: TIMES.map((r, i) => ({ value: String(i), label: rowLabel(r) })) },
    { id: 'w', label: 'Months since you lodged', def: 12, unit: 'months', max: 120, decimals: 1 },
  ],
  run: (v) => {
    const r = TIMES[clamp(Math.round(v.r ?? 0), 0, TIMES.length - 1)];
    const w = Math.max(0, v.w ?? 0), a = months(r.p50), b = months(r.p90);
    const band = w <= a ? 'Within the usual time' : w <= b ? 'Slower than half, within 9 in 10' : 'Longer than 9 in 10 files';
    return {
      head: ['Your wait so far', band],
      rows: [['Half were decided within', said(r.p50)], ['9 in 10 were decided within', said(r.p90)], ['Your wait', `${formatMonths(w)}`]],
      alert: w > b ? 'Check ImmiAccount for a request for information you may have missed' : undefined,
      note: 'The bands compare your wait with the applications the Department decided last month. A longer wait does not mean a refusal.',
    };
  },
});
const formatMonths = (m: number) => `${Math.round(m * 10) / 10} month${m === 1 ? '' : 's'}`;

/** Parent visa queue: one answer, the Department's estimate of the wait for an application made now.
 * What each figure measures (test-naif 2026-11-14, tours 1 and 2):
 *  - `released` = the newest queue date the Department has released for final processing (a position, not a wait);
 *  - the gap between the reader's date and `released` = months of lodgements ahead of them, NOT months to wait
 *    (read as "7 months" or "8 years" of waiting: no longer shown);
 *  - `newApplicationYears` = the Department's own estimate of the wait for a new application: the only duration
 *    published, so it is the big answer, with the other queue (contributory / non-contributory) shown beside it. */
const Q = PARENT.queue;
const QUEUE_YEARS = Array.from({ length: 2026 - 2005 + 1 }, (_, i) => 2005 + i).map((y) => ({ value: String(y), label: String(y) }));
const [NOW_Y, NOW_M] = PARENT.read_on.split('-').map(Number);
const span = (g: number) => { const y = Math.floor(g / 12), m = g % 12; return [y ? plural(y, 'year') : '', m ? plural(m, 'month') : ''].filter(Boolean).join(' and ') || 'less than a month'; };
function parentqSpec(code?: string): MiniSpec {
  const fixed = code ? Q.findIndex((q) => q.code === code) : -1;
  const qOf = (v: Record<string, number>) => Q[fixed >= 0 ? fixed : clamp(Math.round(v.q ?? 0), 0, Q.length - 1)];
  const inputs: MiniSpec['inputs'] = [];
  if (fixed < 0) inputs.push({ id: 'q', label: 'Visa', def: 0, options: Q.map((q, i) => ({ value: String(i), label: q.name })) });
  inputs.push(
    { id: 'm', label: 'Month you applied', def: NOW_M, options: MONTH_OPT },
    { id: 'y', label: 'Year you applied', def: NOW_Y, options: QUEUE_YEARS, help: 'Not applied yet? Leave this month and year' },
  );
  return {
    title: code ? `How long the ${code} queue takes` : 'How long the parent visa queue takes', cta: 'Parent visas compared',
    exemple: (v) => {
      const m = clamp(Math.round(v.m ?? NOW_M), 1, 12), y = Math.round(v.y ?? NOW_Y);
      return m === NOW_M && y === NOW_Y ? `Example for a ${qOf(v).code} application made now (${MONTHS[m - 1]} ${y})` : `Example for a ${qOf(v).code} application made in ${MONTHS[m - 1]} ${y}`;
    },
    inputs,
    run: (v) => {
      const q = qOf(v);
      const y = Math.round(v.y ?? NOW_Y), m = clamp(Math.round(v.m ?? NOW_M), 1, 12);
      const [ry, rm] = q.released.split('-').map(Number);
      const released = (y - ry) * 12 + (m - rm) <= 0;
      const waited = (NOW_Y - y) * 12 + (NOW_M - m);
      const years = q.contributory ? PARENT.newApplicationYears.contributory : PARENT.newApplicationYears.nonContributory;
      const otherYears = q.contributory ? PARENT.newApplicationYears.nonContributory : PARENT.newApplicationYears.contributory;
      const other = q.contributory ? 'Lower-cost Parent visa 103 or Aged Parent 804, for comparison' : 'Higher-cost Contributory Parent 143, 173 or 864, for comparison';
      const rows: Array<[string, string]> = [];
      if (released) rows.push(['Your application', `${MONTHS[m - 1]} ${y}: released, the decision is being made`]);
      else rows.push(['Your application', waited > 0 ? `${MONTHS[m - 1]} ${y}: already ${span(waited)} in the queue` : `${MONTHS[m - 1]} ${y}`]);
      rows.push(['Applications now being decided', q.releasedLabel.replace(/^Lodged\/queued/, 'Lodged or queued').replace(/^Queued/, 'Queued')]);
      rows.push([other, `about ${otherYears} years`]);
      return {
        head: released ? ['Expected wait', 'Your turn has come'] : ['Expected wait (Department of Home Affairs estimate)', `about ${years} years`],
        alert: !released && waited > 0 ? `This estimate is for an application made now. Yours has already waited ${span(waited)}; the Department gives no date for applications already in the queue` : undefined,
        rows,
        note: `Source: Department of Home Affairs, parent visa queue release dates, update as at ${dateL(PARENT.as_at)}. The queue moves only as yearly places open, so the estimate can change.`,
      };
    },
  };
}
SPECS.parentq = () => parentqSpec();
for (const q of Q) SPECS[`parentq-${q.code}`] = () => parentqSpec(q.code);

/** Which partner visa, what it costs and how long it takes. */
SPECS.partner = () => ({
  title: 'Your partner visa: which one, cost and wait', cta: 'Partner visa costs',
  exemple: (v) => `Example for a couple ${v.w === 1 ? 'in Australia' : 'outside Australia'}, ${v.s === 1 ? 'engaged' : 'married or de facto'}, with ${plural(Math.round(v.c ?? 0), 'child')}`,
  inputs: [
    { id: 'w', label: 'Where the applicant is', def: 1, options: [{ value: '1', label: 'In Australia' }, { value: '0', label: 'Outside Australia' }] },
    { id: 's', label: 'Relationship', def: 0, options: [{ value: '0', label: 'Married or de facto' }, { value: '1', label: 'Engaged, wedding in Australia' }] },
    { id: 'c', label: 'Children under 18 applying', def: 0, max: 8 },
    { id: 'pac', label: 'Passport of a Pacific country or Timor-Leste', def: 0, options: YES_NO, avance: true },
  ],
  run: (v) => {
    const code = v.s === 1 ? '300' : v.w === 1 ? '820' : '309';
    const r = visaCost({ code, children: v.c, pacific: v.pac === 1 });
    const t = TIMES.find((x) => x.code === code)!;
    const rows: Array<[string, string]> = [['Visa', visaByCode(code).name], ['Half decided within', said(t.p50)], ['9 in 10 decided within', said(t.p90)]];
    if (code === '300') rows.push(['Partner visa after the wedding, applicant', money(visaCost({ code: '820', variant: 'pmv', pacific: v.pac === 1 }).total)]);
    return {
      head: [`Charge for ${plural(r.people, 'person')}`, money(r.total)], rows,
      alert: v.s === 1 && v.w === 1 ? 'The 300 is applied for outside Australia: an engaged applicant in Australia usually applies for the 820 once married or de facto' : undefined,
      note: 'Schedule 1, compilation of 1 November 2026; times from the Department of Home Affairs (update of 2 November 2026). The sponsor pays nothing.',
      go: [`${code} visa: costs and conditions →`, `/en/${slugOf(code)}/`],
    };
  },
});

/** Partner visa routes compared: 300 then 820 against 309 or 820 straight away. */
SPECS.partnerroute = () => ({
  title: 'Engaged first, or partner visa now?', cta: 'Partner visa costs',
  exemple: (v) => `Example for an applicant with ${plural(Math.round(v.c ?? 0), 'child')}`,
  inputs: [
    { id: 'c', label: 'Children under 18 applying', def: 0, max: 8 },
    { id: 'pac', label: 'Passport of a Pacific country or Timor-Leste', def: 0, options: YES_NO },
  ],
  run: (v) => {
    const pac = v.pac === 1;
    const direct = visaCost({ code: '309', children: v.c, pacific: pac }).total;
    const pmv = visaCost({ code: '300', children: v.c, pacific: pac }).total + visaCost({ code: '820', variant: 'pmv', children: v.c, pacific: pac }).total;
    return {
      head: ['Engaged route costs more by', money(pmv - direct)],
      rows: [['Partner visa 309 or 820, one charge', money(direct)], ['300, then 820 after the wedding', money(pmv)]],
      note: 'Both charges of the engaged route are counted: the 300 and the lower partner visa charge for a 300 holder who married the sponsor (item 1124B).',
    };
  },
});


/** Main calculator. With `fixed`, the visa is set by the page and its special cases become a field. */
function costSpec(fixed?: string): MiniSpec {
  const fv = fixed ? visaByCode(fixed) : null;
  const vOf = (v: Record<string, number>) => fv ?? visaOf(v.v);
  const variantOf = (v: Record<string, number>) => (fv?.variants ?? [])[Math.round(v.va ?? 0) - 1]?.id ?? '';
  const english = (v: Record<string, number>) => !!vOf(v).second?.adultNoEnglish;
  const inputs: MiniSpec['inputs'] = [];
  if (!fv) inputs.push({ id: 'v', label: 'What do you want to do?', def: visaIdx('189'), options: VISA_OPT });
  if (fv?.variants?.length) inputs.push({ id: 'va', label: 'Your situation', def: 0, options: [{ value: '0', label: 'Standard case' }, ...fv.variants.map((x, i) => ({ value: String(i + 1), label: x.label }))] });
  if (!fv?.separate) inputs.push({ id: 'a', label: 'Partner and other adults applying with you', def: fv ? 0 : 1, max: 6, showIf: (v) => !vOf(v).separate, help: 'Family members aged 18 or over. An Australian sponsor does not apply and is not counted' });
  inputs.push({ id: 'c', label: fv?.separate ? 'Children travelling with you (each applies)' : 'Children under 18 applying with you', def: 0, max: 8 });
  if (!fv?.separate) inputs.push({ id: 'a2', label: 'Other adults travelling with you (each applies)', def: 0, max: 6, showIf: (v) => vOf(v).separate === true });
  if (fv?.separate) inputs.push({ id: 'a2', label: 'Other adults travelling with you (each applies)', def: 0, max: 6 });
  inputs.push({ id: 'pe', label: 'Does the main applicant have proof of English (functional English)?', def: 0, options: [{ value: '0', label: 'Yes' }, { value: '1', label: 'No' }], showIf: english, help: 'For example an English test result. Without it, a second payment is due' });
  inputs.push({ id: 'ne', label: 'How many other adults have NO proof of English?', def: 0, max: 6, showIf: (v) => english(v), help: 'A second payment is due for each of them' });
  if (!fv || fv.onshore) inputs.push({ id: 'on', label: 'Applying while in Australia', def: 0, options: YES_NO, showIf: (v) => !!vOf(v).onshore });
  if (!fv || fv.code === '870') inputs.push({ id: 'ls', label: 'Stay of up to 5 years rather than 3', def: 0, options: YES_NO, showIf: (v) => vOf(v).code === '870' });
  if (!fv || fv.pacific || fv.variants?.some((x) => x.pacific)) inputs.push({ id: 'pac', label: 'Passport of a Pacific country or Timor-Leste', def: 0, options: YES_NO, avance: true, showIf: (v) => !!vOf(v).pacific || !!vOf(v).variants?.some((x) => x.pacific) });
  if (!fv || fv.std.base > 0) inputs.push({ id: 'pp', label: 'Paper application instead of online', def: 0, options: YES_NO, avance: true, help: '$80 more where online is possible' });
  return {
    title: fv ? `Your ${fv.short} cost` : 'Your total visa application charge', cta: fv ? 'All visas in one calculator' : 'Charges for a family, line by line',
    exemple: (v) => {
      const visa = vOf(v);
      return visa.separate ? `Example for the ${visa.short}, one traveller` : `Example for the ${visa.short} with ${plural(Math.round(v.a ?? 0), 'other adult')} and ${plural(Math.round(v.c ?? 0), 'child', )}`;
    },
    inputs,
    run: (v) => {
      const visa = vOf(v);
      const extraAdults = visa.separate ? Math.round(v.a2 ?? 0) : Math.round(v.a ?? 0);
      const r = visaCost({ code: visa.code, variant: variantOf(v), pacific: v.pac === 1, onshore: v.on === 1, adults: extraAdults, children: v.c, primaryNoEnglish: v.pe === 1, adultsNoEnglish: Math.min(v.ne ?? 0, extraAdults), longStay: v.ls === 1, paper: v.pp === 1 });
      const rows: Array<[string, string]> = r.lines.map((l) => [l.when === 'later' ? `${l.label} (paid later, before the visa is granted)` : l.label, money(l.amount)]);
      if (r.secondInstalment) rows.push(['Paid when you apply', money(r.firstInstalment)]);
      /* Test-naif 2026-11-14, tour 2: the 173 total ($33,375) read as cheaper than the 143 ($49,900); the later
       * 143 step is the same engine, 143 visa, variant "holder of a 173". */
      let alert: string | undefined;
      if (visa.code === '173') {
        const later = visaCost({ code: '143', variant: 'from173', pacific: v.pac === 1, adults: extraAdults, children: v.c, paper: v.pp === 1 });
        rows.push(['Later step, the permanent 143 for 173 holders (not in the total above)', money(later.total)]);
        rows.push(['Whole route, 173 then 143', money(r.total + later.total)]);
        alert = `This total is the 173 only: the permanent 143 that follows adds ${money(later.total)}, ${money(r.total + later.total)} for the whole route`;
      }
      const out = {
        head: [r.total === 0 ? 'Charge for this visa' : `Total for ${plural(r.people, 'person')}`, r.total === 0 ? 'Free' : money(r.total)] as [string, string],
        rows, alert,
        note: `Not included: card surcharges, health checks, police certificates, skills or English tests. Official charges in force on 1 November 2026, checked on 13 November 2026 (source: Schedule 1, item ${visa.item}).`,
      };
      return fv ? out : { ...out, go: [`${visa.short}: costs and conditions →`, `/en/${slugOf(visa.code)}/`] as [string, string] };
    },
  };
}
for (const v of VISAS) SPECS[`cost-${v.code}`] = () => costSpec(v.code);

/** Slug of a visa page. */
export function slugOf(code: string): string { return SLUGS[code]; }
export const SLUGS: Record<string, string> = {
  '600': 'visitor-visa-600-cost', '601': 'eta-601-cost', '651': 'evisitor-651', '500': 'student-visa-500-cost', '485': '485-visa-cost', '482': '482-visa-cost',
  '186': '186-visa-cost', '494': '494-visa-cost', '189': '189-visa-cost', '190': '190-visa-cost', '491': '491-visa-cost', '191': '191-visa-cost', '858': '858-visa-cost',
  '820': 'partner-visa-820-cost', '309': 'partner-visa-309-cost', '300': 'prospective-marriage-visa-300-cost', '103': 'parent-visa-103-cost', '143': 'contributory-parent-visa-143-cost',
  '173': '173-visa-cost', '804': 'aged-parent-visa-804-cost', '864': '864-visa-cost', '870': '870-visa-cost', '101': 'child-visa-101-cost', '417': 'working-holiday-visa-417-cost',
  '462': '462-visa-cost', '408': '408-visa-cost', '400': '400-visa-cost', '155': 'resident-return-visa-155-cost', '020': 'bridging-visa-b-cost',
};

export function getSpec(kind: string, lang = 'en'): MiniSpec {
  const f = SPECS[kind];
  if (!f) throw new Error(`mini-specs : aucun mini-simulateur « ${kind} » — à décrire dans src/lib/mini-specs.ts`);
  return f(lang);
}
export const SPEC_IDS = Object.keys(SPECS);
/** Page each calculator's link goes to (Tool.astro reads it). */
export const CTA_PAGE: Record<string, string> = {
  cost: 'home', decision: 'visa-processing-times', deadline: 'second-instalment', compare: 'skilled-visa-costs-compared', pacific: 'pacific-visa-rates',
  parents: 'parent-visa-costs-compared', times: 'visa-processing-times', waited: 'visa-processing-times', parentq: 'parent-visa-costs-compared', partner: 'partner-visa-australia-cost', partnerroute: 'partner-visa-australia-cost', stac: 'subsequent-temporary-application-charge', family: 'visa-cost-for-a-family',
};
