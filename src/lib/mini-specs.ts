/**
 * Calculators of the site (RECETTE §9.3). Every amount comes from `data/visas.ts` through `engine/cost.ts`;
 * no page holds a second formula.
 */
import type { MiniSpec } from './mini-types';
import { VISAS, visaByCode } from '../data/visas';
import { visaCost, addMonths, secondInstalmentDeadline, feeOf } from './engine/cost';
import { money, dateL } from './format-l';
import { TIMES, PARENT, months, said, rowLabel, rowIdx, TIMES_UPDATE } from './times';

const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, x));
const plural = (k: number, w: string) => `${k} ${w}${k === 1 ? '' : 's'}`;
export const VISA_OPT = VISAS.map((v, i) => ({ value: String(i), label: v.name }));
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
    title: 'When a decision could come', cta: 'How processing times work',
    exemple: (v) => `Example for an application lodged in ${MONTHS[clamp(Math.round(v.m ?? 1), 1, 12) - 1]} ${v.y}, with times of ${v.p50} and ${v.p90} months`,
    inputs: [
      { id: 'd', label: 'Day you lodged', def: 15, max: 31 },
      { id: 'm', label: 'Month you lodged', def: 6, options: MONTH_OPT },
      { id: 'y', label: 'Year you lodged', def: 2026, options: YEAR_OPT },
      { id: 'p50', label: '50% of applications decided in (months)', def: 6, unit: 'months', max: 120, decimals: 1, help: 'Copy it from the official processing time tool' },
      { id: 'p90', label: '90% of applications decided in (months)', def: 12, unit: 'months', max: 180, decimals: 1 },
    ],
    run: (v) => {
      const start = iso(v.y ?? 2026, v.m ?? 6, v.d ?? 15);
      const p50 = Math.max(0, v.p50 ?? 0), p90 = Math.max(p50, v.p90 ?? 0);
      return {
        head: ['9 in 10 decided by', dateL(addMonths(start, p90))],
        rows: [['Half of the applications decided by', dateL(addMonths(start, p50))], ['Lodged on', dateL(start)]],
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
  const rowOf = (v: Record<string, number>) => TIMES[clamp(Math.round(v.r ?? Number(opts[0].value)), 0, TIMES.length - 1)];
  const inputs: MiniSpec['inputs'] = [];
  if (opts.length > 1) inputs.push({ id: 'r', label: code ? 'Stream' : 'Visa and stream', def: Number(opts[0].value), options: opts });
  inputs.push({ id: 'd', label: 'Day you lodged', def: 14, max: 31 }, { id: 'm', label: 'Month you lodged', def: 11, options: MONTH_OPT }, { id: 'y', label: 'Year you lodged', def: 2026, options: YEAR_OPT });
  return {
    title: code ? `When a ${code} decision could come` : 'How long your visa application could take', cta: 'Processing times explained',
    exemple: (v) => `Example for the ${rowLabel(rowOf(v))}, lodged on ${dateL(iso(v.y ?? 2026, v.m ?? 11, v.d ?? 14))}`,
    inputs,
    run: (v) => {
      const r = rowOf(v.r === undefined ? { r: Number(opts[0].value) } : v);
      const start = iso(v.y ?? 2026, v.m ?? 11, v.d ?? 14);
      return {
        head: ['9 in 10 decided by', dateL(addMonths(start, months(r.p90)))],
        rows: [['Half decided by', dateL(addMonths(start, months(r.p50)))], ['Official 50% time', said(r.p50)], ['Official 90% time', said(r.p90)]],
        note: `Times published by the Department of Home Affairs (update of ${dateL(TIMES_UPDATE)}), for applications decided last month. Not a promise for your file.`,
      };
    },
  };
}
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

/** Parent visa queue: is a queue date released, and the Department's estimate for a new application. */
SPECS.parentq = () => {
  const Q = PARENT.queue;
  return {
    title: 'Where your parent visa stands in the queue', cta: 'Parent visas compared',
    exemple: (v) => `Example for the ${Q[clamp(Math.round(v.q ?? 0), 0, Q.length - 1)].name} with a queue date in ${MONTHS[clamp(Math.round(v.m ?? 1), 1, 12) - 1]} ${v.y}`,
    inputs: [
      { id: 'q', label: 'Visa', def: 0, options: Q.map((q, i) => ({ value: String(i), label: q.name })) },
      { id: 'm', label: 'Month of your queue date (or lodgement)', def: 6, options: MONTH_OPT },
      { id: 'y', label: 'Year of your queue date (or lodgement)', def: 2020, max: 2030 },
    ],
    run: (v) => {
      const q = Q[clamp(Math.round(v.q ?? 0), 0, Q.length - 1)];
      const y = Math.round(v.y ?? 2020), m = clamp(Math.round(v.m ?? 6), 1, 12);
      const [ry, rm] = q.released.split('-').map(Number);
      const gap = (y - ry) * 12 + (m - rm);
      const years = q.contributory ? PARENT.newApplicationYears.contributory : PARENT.newApplicationYears.nonContributory;
      return {
        head: gap <= 0 ? ['Queue date', 'Released for final processing'] : ['Queue dates still ahead of yours', `${gap} month${gap === 1 ? '' : 's'}`],
        rows: [['Released so far', q.releasedLabel], ['Official estimate for a new application', `${years} years`], ['Official estimate from your date', `${MONTHS[m - 1]} ${y + years}`]],
        note: `Department of Home Affairs, queue release dates as at ${dateL(PARENT.as_at)}. The months ahead of you are queue dates, not months of waiting: releases depend on the yearly places.`,
      };
    },
  };
};

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
      go: [`${code} visa: costs and conditions`, `/en/${slugOf(code)}/`],
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
  if (!fv) inputs.push({ id: 'v', label: 'Visa', def: visaIdx('189'), options: VISA_OPT });
  if (fv?.variants?.length) inputs.push({ id: 'va', label: 'Your situation', def: 0, options: [{ value: '0', label: 'Standard case' }, ...fv.variants.map((x, i) => ({ value: String(i + 1), label: x.label }))] });
  if (!fv?.separate) inputs.push({ id: 'a', label: 'Partner and other adults applying with you', def: fv ? 0 : 1, max: 6, showIf: (v) => !vOf(v).separate, help: 'Family members aged 18 or over' });
  inputs.push({ id: 'c', label: fv?.separate ? 'Children travelling with you (each applies)' : 'Children under 18 applying with you', def: 0, max: 8 });
  if (!fv?.separate) inputs.push({ id: 'a2', label: 'Other adults travelling with you (each applies)', def: 0, max: 6, showIf: (v) => vOf(v).separate === true });
  if (fv?.separate) inputs.push({ id: 'a2', label: 'Other adults travelling with you (each applies)', def: 0, max: 6 });
  inputs.push({ id: 'pe', label: 'You have no functional English', def: 0, options: YES_NO, showIf: english });
  inputs.push({ id: 'ne', label: 'Other adults without functional English', def: 0, max: 6, help: 'Counted up to the number of other adults entered above.', showIf: (v) => english(v) });
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
      const rows: Array<[string, string]> = r.lines.map((l) => [l.when === 'later' ? `${l.label} (before grant)` : l.label, money(l.amount)]);
      if (r.secondInstalment) rows.push(['Paid when you apply', money(r.firstInstalment)]);
      const out = {
        head: [r.total === 0 ? 'Charge for this visa' : `Total for ${plural(r.people, 'person')}`, r.total === 0 ? 'Free' : money(r.total)] as [string, string],
        rows,
        note: `Migration Regulations 1994, Schedule 1 item ${visa.item}, compilation of 1 November 2026. Card surcharges and costs of health checks, police certificates, skills or English tests are not included.`,
      };
      return fv ? out : { ...out, go: [`${visa.short}: costs and conditions`, `/en/${slugOf(visa.code)}/`] as [string, string] };
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
