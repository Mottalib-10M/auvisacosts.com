/**
 * Processing times read by hand on 14 November 2026 in the Department of Home Affairs processing times
 * guide (update of 2 November 2026), and parent visa queue dates (as at 31 August 2026).
 * Figures are kept as displayed ("22 Months", "44 Days", "Less than 1 Day"); `months()` converts them
 * for the date arithmetic of the calculators. No figure is estimated here.
 */
import PT from '../data/processing-times.json';

export interface TimeRow { code: string; stream: string; p50: string; p90: string }
export const TIMES: TimeRow[] = PT.rows;
export const TIMES_READ_ON = PT.read_on;
export const TIMES_UPDATE = PT.published_update;
export const PARENT = PT.parent;

/** Visa names as the official tool lists them (subclasses outside our cost table included). */
export const VISA_LABEL: Record<string, string> = {
  '186': 'Employer Nomination Scheme (186)', '189': 'Skilled Independent (189)', '190': 'Skilled Nominated (190)', '191': 'Permanent Residence (Skilled Regional) (191)',
  '491': 'Skilled Work Regional (491)', '494': 'Skilled Employer Sponsored Regional (494)', '482': 'Skills in Demand (482)', '858': 'National Innovation (858)',
  '820': 'Partner (820), onshore temporary stage', '801': 'Partner (801), onshore permanent stage', '309': 'Partner (309), offshore temporary stage', '100': 'Partner (100), offshore permanent stage',
  '300': 'Prospective Marriage (300)', '101': 'Child (101)', '802': 'Child (802)', '870': 'Sponsored Parent (Temporary) (870)', '500': 'Student (500)', '485': 'Temporary Graduate (485)',
  '600': 'Visitor (600)', '601': 'ETA (601)', '651': 'eVisitor (651)', '417': 'Working Holiday (417)', '462': 'Work and Holiday (462)', '408': 'Temporary Activity (408)',
  '400': 'Short Stay Specialist (400)', '155': 'Resident Return (155)',
};
export const rowLabel = (r: TimeRow) => `${VISA_LABEL[r.code] ?? r.code}${r.stream ? `, ${r.stream}` : ''}`;
export const rowsOf = (code: string) => TIMES.filter((r) => r.code === code);
export const rowIdx = (code: string, stream = '') => TIMES.findIndex((r) => r.code === code && (!stream || r.stream === stream));

/** "22 Months" → 22; "44 Days" → 44 / 30.4375; "Less than 1 Day" → 0. */
export function months(s: string): number {
  if (/^less than/i.test(s)) return 0;
  const m = s.match(/^(\d+(?:\.\d+)?)\s*(day|month|year)/i);
  if (!m) throw new Error(`times: unreadable figure “${s}”`);
  const n = Number(m[1]);
  const u = m[2].toLowerCase();
  return u === 'day' ? n / 30.4375 : u === 'year' ? n * 12 : n;
}
/** Figure as written on our pages: "22 months", "44 days", "less than 1 day". */
export const said = (s: string) => s.replace(/\bMonths?\b/, (w) => w.toLowerCase()).replace(/\bDays?\b/, (w) => w.toLowerCase()).replace(/^Less/, 'less');

/** Table rows [visa and stream, 50% time, 90% time] for the given subclasses, in the order given. */
export const timesRows = (codes: string[], streamOnly = false): string[][] =>
  codes.flatMap((c) => rowsOf(c).map((r) => [streamOnly ? (r.stream || VISA_LABEL[c]) : rowLabel(r), said(r.p50), said(r.p90)]));
export const TIMES_HEAD = ['Visa and stream', '50% decided within', '90% decided within'];
export const timesCaption = 'Department of Home Affairs processing times guide, update of 2 November 2026, read on 14 November 2026.';
/** One row: "22 months and 24 months". */
export const pair = (code: string, stream = '') => { const r = TIMES[rowIdx(code, stream)]; return { p50: said(r.p50), p90: said(r.p90) }; };
