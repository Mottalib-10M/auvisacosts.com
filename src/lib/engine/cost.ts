/** Total visa application charge for one application (Migration Regulations 1994, reg. 2.12C and Schedule 1). */
import { VISAS, visaByCode, type Visa, type Fee } from '../../data/visas';

export interface CostInput {
  code: string;
  /** Variant id from `visa.variants`, or '' for the standard case. */
  variant?: string;
  pacific?: boolean;
  /** Visitor visa only: application made in Australia. */
  onshore?: boolean;
  /** Family members joining the application: aged 18 or more, under 18. */
  adults?: number; children?: number;
  /** Main applicant aged 18+ assessed as not having functional English. */
  primaryNoEnglish?: boolean;
  /** Other adults on the application assessed as not having functional English. */
  adultsNoEnglish?: number;
  /** 870 visa: stay of up to 5 years rather than 3. */
  longStay?: boolean;
  /** Paper application where an online one is possible (reg. 2.12C(7), $80). */
  paper?: boolean;
}
export interface CostLine { label: string; amount: number; when: 'now' | 'later' }
export interface CostResult { visa: Visa; fee: Fee; lines: CostLine[]; firstInstalment: number; secondInstalment: number; total: number; people: number; separate: boolean }

export const NON_INTERNET = 80;
const plural = (n: number, w: string) => `${n} ${w}${n === 1 ? '' : 's'}`;

export function feeOf(v: Visa, variant = '', pacific = false): Fee {
  const va = v.variants?.find((x) => x.id === variant);
  if (va) return pacific && va.pacific ? va.pacific : va.fee;
  return pacific && v.pacific ? v.pacific : v.std;
}

export function visaCost(i: CostInput): CostResult {
  const v = visaByCode(i.code);
  const pacific = !!i.pacific && !!(v.pacific || v.variants?.some((x) => x.id === i.variant && x.pacific));
  const va = v.variants?.find((x) => x.id === i.variant);
  const fee = feeOf(v, i.variant ?? '', pacific);
  const adults = Math.max(0, Math.round(i.adults ?? 0));
  const children = Math.max(0, Math.round(i.children ?? 0));
  const people = 1 + adults + children;
  const lines: CostLine[] = [];
  let base = fee.base;
  if (v.onshore && i.onshore) base = pacific ? v.onshore.pacific : v.onshore.std;
  if (v.separate) {
    lines.push({ label: people === 1 ? 'Application charge' : `Application charge, ${plural(people, 'separate application')}`, amount: base * people, when: 'now' });
  } else {
    lines.push({ label: 'Base application charge, main applicant', amount: base, when: 'now' });
    if (adults) lines.push({ label: `Additional applicant, 18 or over (${adults} × ${fee.add18})`, amount: fee.add18 * adults, when: 'now' });
    if (children) lines.push({ label: `Additional applicant, under 18 (${children} × ${fee.addU18})`, amount: fee.addU18 * children, when: 'now' });
  }
  for (const e of v.extra ?? []) if (!/employer/i.test(e.label)) lines.push({ label: e.label, amount: e.amount * (v.separate ? people : 1), when: 'now' });
  if (i.paper && base > 0) lines.push({ label: 'Non-internet application charge', amount: NON_INTERNET * (v.separate ? people : 1), when: 'now' });
  const s = v.second;
  if (va?.secondPerAdult) {
    lines.push({ label: `Second instalment, ${plural(1 + adults, 'adult')}`, amount: va.secondPerAdult * (1 + adults), when: 'later' });
    if (children && s?.perChild) lines.push({ label: `Second instalment, ${plural(children, 'child')} under 18`, amount: s.perChild * children, when: 'later' });
  } else if (s?.perApplicant) {
    const per = i.longStay && s.perApplicantLong ? s.perApplicantLong : s.perApplicant;
    lines.push({ label: v.separate ? 'Second instalment' : `Second instalment, ${plural(1 + adults, 'adult')}`, amount: per * (v.separate ? people : 1 + adults), when: 'later' });
    if (children && !v.separate) lines.push({ label: `Second instalment, ${plural(children, 'child')} under 18`, amount: (s.perChild ?? s.perApplicant) * children, when: 'later' });
  } else if (s?.adultNoEnglish) {
    const n = Math.min(adults, Math.max(0, Math.round(i.adultsNoEnglish ?? 0)));
    if (i.primaryNoEnglish) lines.push({ label: 'Second instalment, main applicant without functional English', amount: s.primaryNoEnglish ?? s.adultNoEnglish, when: 'later' });
    if (n) lines.push({ label: `Second instalment, ${plural(n, 'adult')} without functional English`, amount: s.adultNoEnglish * n, when: 'later' });
  }
  const firstInstalment = lines.filter((l) => l.when === 'now').reduce((a, l) => a + l.amount, 0);
  const secondInstalment = lines.filter((l) => l.when === 'later').reduce((a, l) => a + l.amount, 0);
  return { visa: v, fee, lines, firstInstalment, secondInstalment, total: firstInstalment + secondInstalment, people, separate: !!v.separate };
}

/** Decision dates from the lodgement date and the official 50 % / 90 % times typed by the reader (months). */
export function addMonths(iso: string, m: number): string {
  const d = new Date(`${iso}T12:00:00Z`);
  const whole = Math.floor(m), frac = m - whole;
  const day = d.getUTCDate();
  d.setUTCDate(1); d.setUTCMonth(d.getUTCMonth() + whole);
  const last = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0)).getUTCDate();
  d.setUTCDate(Math.min(day, last));
  if (frac) d.setUTCDate(d.getUTCDate() + Math.round(frac * 30.4375));
  return d.toISOString().slice(0, 10);
}
/** Last day to pay the second instalment: 28 days after notice in Australia, 70 days otherwise (reg. 2.12D). */
export function secondInstalmentDeadline(noticeIso: string, inAustralia: boolean): string {
  const d = new Date(`${noticeIso}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + (inAustralia ? 28 : 70));
  return d.toISOString().slice(0, 10);
}
export { VISAS };
