import { definePage } from '../../lib/guide-types';
import { PARENT, pair } from '../../lib/times';
const contrib = PARENT.newApplicationYears.contributory, non = PARENT.newApplicationYears.nonContributory;
const t870 = pair('870', 'Visa Application'), s870 = pair('870', 'Sponsorship');
export default definePage({
  id: 'parent-visa-processing-time', group: 'parents', order: 505,
  tool: { kind: 'mini:parentq', props: { q: 4, m: 6, y: 2015 } },
  mini: { kind: 'mini:parents', props: { title: 'Parent visa routes, total charges', n: 2 } },
  related: ['143-visa-processing-time', 'parent-visa-costs-compared', 'parent-visa-103-cost', '870-visa-cost'],
  sources: ['ha_parent_queue', 'ha_processing', 'ha_103', 'ha_143', 'ha_870', 'regs'],
  en: {
    slug: 'parent-visa-processing-time', nav: 'Parent visa processing time', card: 'All six parent visas: queue release dates, the 18 and 42 year estimates, and the 870.',
    title: 'Parent Visa Processing Time: Queues for All Six Visas',
    description: 'Parent visa processing time in Australia: 18 years estimated for contributory visas, 42 years for Parent and Aged Parent visas, queue release dates, the 870.',
    h1: 'Parent visa processing time, visa by visa',
    intro: () => `Parent visa processing time is estimated by the Department at ${contrib} years for a new contributory application and ${non} years for a Parent or Aged Parent visa.`,
    resume: (h) => `Australia's permanent parent visas are capped and queued. The Government sets a number of places each program year; applications that meet the core criteria get a queue date and wait until places reach them. That is why the monthly processing times guide has no figure for them. The Department of Home Affairs publishes instead, on its parent visa page, the queue dates released for final processing and an estimate for new applications. In the update as at ${h.date(PARENT.as_at)}, read on 14 November 2026, the estimate is ${contrib} years for the contributory visas (143, 173, 864 and 884) and ${non} years for the Parent visa 103 and the Aged Parent visa 804. Queue dates up to November 2018 were released for the Contributory Parent visa, November 2020 for the Contributory Aged Parent visa, March 2014 for the Parent visa and October 2014 for the Aged Parent visa. The temporary Sponsored Parent visa 870 is not queued: the guide gives ${t870.p50} for half of its visa applications.`,
    faqs: () => [
      { q: 'How long is the parent visa queue in Australia?', a: `The Department estimates ${contrib} years for a new contributory parent application and ${non} years for a new Parent (103) or Aged Parent (804) application. It generally updates these estimates at the start of each program year, in July, so an estimate read today can change before you lodge.` },
      { q: 'Which parent visa is the fastest?', a: `The temporary Sponsored Parent visa 870 is not queued: half of its visa applications were decided within ${t870.p50} and nine in ten within ${t870.p90} in the November 2026 guide, after the sponsorship, which took ${s870.p50}. It gives a stay of 3 or 5 years, not permanent residence. Among the permanent visas, the contributory ones are much faster.` },
      { q: 'Does my place in the parent queue change if I switch visa?', a: 'This site cannot tell: the rules on moving between parent visas depend on the visas involved and on when you applied. Read the parent visa pages of the Department, or ask a registered migration agent, before withdrawing an application, because a withdrawn charge is not refunded.' },
    ],
    body: (h) => `
<h2>Parent visa processing time: queue release dates</h2>
${h.table(['Visa', 'Acknowledgement', 'Queue assessment reached', 'Released for final processing'], PARENT.queue.map((q) => [q.name, q.acknowledge, q.queueAssessment, q.releasedLabel]), `Department of Home Affairs, Parent visas: queue release dates, as at ${h.date(PARENT.as_at)}, read on 14 November 2026.`, ['l', 'l', 'l', 'l'])}
<p>The two temporary contributory visas share the queue of their permanent counterpart: the 173 moves with the 143, the 884 with the 864. A temporary visa holder who applies for the permanent visa is assessed separately; the Department's table shows May 2026 for that step.</p>
<h2>Estimates for a new application</h2>
${h.table(['Visa group', 'Department estimate'], [['Contributory Parent and Contributory Aged Parent (143, 173, 864, 884)', `${contrib} years`], ['Parent and Aged Parent (103, 804)', `${non} years`], ['Sponsored Parent (Temporary) 870, visa application', `${t870.p50} for half, ${t870.p90} for nine in ten`]], 'Parent visa page as at 31 August 2026 and processing times guide of 2 November 2026, read on 14 November 2026.', ['l', 'l'])}
<p>The tool above places any queue date against the latest release. Its count of months is a count of queue dates still ahead, not of months to wait, because the yearly places set the pace.</p>
<h2>What the wait costs</h2>
<p>The contributory visas are faster because the parents pay a large second instalment before the grant, ${h.aud(h.V('143').second!.perApplicant!)} per adult on the 143. The non-contributory Parent visa costs much less, but its queue is the longest. The second calculator compares the totals for one or two parents; the ${h.a('parent-visa-costs-compared', 'parent visa comparison')} details each route, including the 173 then 143 path.</p>
<p>This site is independent of the Department of Home Affairs. The queue dates and estimates are copied from its page on the date shown; they change during the program year.</p>`,
  },
});
