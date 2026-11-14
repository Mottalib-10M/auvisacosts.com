import { definePage } from '../../lib/guide-types';
import { PARENT } from '../../lib/times';
const q143 = PARENT.queue.find((q) => q.code === '143')!;
const years = PARENT.newApplicationYears.contributory;
export default definePage({
  id: '143-visa-processing-time', group: 'parents', order: 512,
  tool: { kind: 'mini:parentq', props: { q: 0, m: 6, y: 2019 } },
  mini: { kind: 'mini:cost-143', props: { title: 'What the 143 costs, both instalments' } },
  visa: '143',
  related: ['contributory-parent-visa-143-cost', 'parent-visa-processing-time', '173-visa-cost', 'parent-visa-costs-compared'],
  sources: ['ha_parent_queue', 'ha_143', 'regs'],
  en: {
    slug: '143-visa-processing-time', nav: '143 visa processing time', card: 'Contributory Parent visa: the queue release date, the official 18-year estimate, your position.',
    title: '143 Visa Processing Time: The Contributory Parent Queue',
    description: '143 visa processing time: the Department estimates 18 years for a new Contributory Parent application; queue dates up to November 2018 released. Your position.',
    h1: '143 visa processing time and the parent queue',
    intro: () => `The 143 visa processing time for a new application is estimated by the Department at ${years} years; queue dates up to ${q143.releasedLabel.replace('Lodged/queued up to ', '')} have been released.`,
    resume: (h) => `The Contributory Parent visa, subclass 143, is a permanent visa for the parent of a settled Australian citizen, permanent resident or eligible New Zealand citizen. It has no processing time in the monthly guide, because parent visas are capped and queued: the Government sets a number of places each program year, and applications wait in a queue ordered by their queue date. The Department of Home Affairs publishes the progress of the queue instead. On its parent visa page, which we read on 14 November 2026, the update as at ${h.date(PARENT.as_at)} says that Contributory Parent applications with a queue date up to November 2018 have been released for final processing, and that new applications are acknowledged in about four weeks and given a queue date once assessed, with assessment reaching applications lodged in April 2024. For a new application, the Department's estimate is ${years} years. The tool shows whether a queue date is released and how many months of queue dates remain ahead of it.`,
    faqs: (h) => [
      { q: 'How long does the 143 visa take?', a: `The Department estimates ${years} years for a new Contributory Parent application, an estimate it generally updates at the start of each program year. As at ${h.date(PARENT.as_at)}, applications with a queue date up to November 2018 had been released for final processing.` },
      { q: 'What is a queue date?', a: 'The date the Department gives an application once it meets the core visa criteria, which include health and character requirements where they apply. For Contributory Parent applications lodged before 1 June 2018, the queue date is the lodgement date. The Department tells you your queue date in writing.' },
      { q: 'Is the 173 then 143 route faster?', a: `The temporary 173 is in the same queue as the 143: the same release date applies. A 173 holder who later applies for the 143 is processed separately; the Department's table shows May 2026 for that temporary-to-permanent step. The two-step route spreads the payments; it does not jump the queue.` },
    ],
    body: (h) => `
<h2>143 visa processing time: the queue as at ${h.date(PARENT.as_at)}</h2>
${h.table(['Visa', 'Acknowledgement', 'Queue assessment reached', 'Released for final processing'], PARENT.queue.map((q) => [q.name, q.acknowledge, q.queueAssessment, q.releasedLabel]), `Department of Home Affairs, Parent visas: queue release dates, as at ${h.date(PARENT.as_at)}, read on 14 November 2026.`, ['l', 'l', 'l', 'l'])}
<p>The contributory visas (143, 173, 864 and 884) move much faster than the non-contributory Parent (103) and Aged Parent (804), whose new applications the Department estimates at ${PARENT.newApplicationYears.nonContributory} years. The higher cost buys a shorter queue. The ${h.a('parent-visa-processing-time', 'parent visa processing time page')} covers all six.</p>
<h2>How to read the tool</h2>
<p>Enter your queue date, or your lodgement date if you have not received one. If it is on or before the last released month, your application has been released for final processing and the Department will contact you, including to request the second instalment. If it is after, the tool says “Not released yet” and shows the gap between your date and the last one released. That gap is not a time to wait: releases depend on the places set each year and on how many applications each month holds.</p>
<h2>143 cost, paid in two parts</h2>
<p>The first instalment is ${h.aud(h.V('143').std.base)} for the main applicant and ${h.aud(h.V('143').std.add18)} for a second parent, at lodgement. The second instalment, ${h.aud(h.V('143').second!.perApplicant!)} per adult, is requested at the end, when the application is released and close to a decision. The second calculator adds both; the ${h.a('contributory-parent-visa-143-cost', 'Contributory Parent visa 143 cost page')} has the details, and the Assurance of Support bond, set separately, is not counted.</p>
<p>This site is independent of the Department of Home Affairs. The queue dates are copied from its page on the date shown and move during the year.</p>`,
  },
});
