import { definePage } from '../../lib/guide-types';
import { timesRows, TIMES_HEAD, timesCaption, pair } from '../../lib/times';
const de = pair('186', 'Direct Entry Pathway'), tr = pair('186', 'Transition Pathway'), ag = pair('186', 'Agreement Pathway'), r494 = pair('494', 'Employer Sponsored'), r482 = pair('482', 'Core Skills');
export default definePage({
  id: '186-visa-processing-time', group: 'work', order: 212,
  tool: { kind: 'mini:times-186', props: { r: 1 } },
  mini: { kind: 'mini:cost-186', props: { title: 'What the 186 costs while you wait' } },
  visa: '186',
  related: ['186-visa-cost', '482-visa-processing-time', 'visa-approval-time', 'visa-application-time'],
  sources: ['ha_processing', 'ha_186', 'regs'],
  en: {
    slug: '186-visa-processing-time', nav: '186 visa processing time', card: 'Direct Entry, Transition and Agreement streams: the official 50% and 90% times, as dates.',
    title: '186 Visa Processing Time: Direct Entry and Transition',
    description: '186 visa processing time in November 2026: Direct Entry and Transition take 22 to 24 months, the Agreement stream 44 days to 13 months. Your decision dates.',
    h1: '186 visa processing time, stream by stream',
    intro: () => `The 186 visa processing time is ${de.p50} for half of the Direct Entry and Transition files and ${de.p90} for nine in ten.`,
    resume: () => `The Employer Nomination Scheme visa, subclass 186, is the permanent visa an Australian employer sponsors. Its processing time depends on the stream. In the Department of Home Affairs guide updated on 2 November 2026, which we read on 14 November 2026, half of the Direct Entry applications decided in the previous month had taken ${de.p50} or less and nine in ten ${de.p90} or less. The Transition stream, used by 482 holders who move to permanent residence with the same employer, shows the same ${tr.p50} and ${tr.p90}. The Agreement stream, for workers covered by a labour agreement, is much faster: ${ag.p50} for half of the files and ${ag.p90} for nine in ten. The Department adds a warning on the 186: it is receiving a high volume of applications, which affects the time to allocate and assess them. The calculator turns the times into dates from the day you lodged. The figures describe last month's decisions, not a promise for your file.`,
    faqs: () => [
      { q: 'How long does a 186 visa take in 2026?', a: `In the update of 2 November 2026, half of the Direct Entry and Transition applications were decided within ${de.p50} and nine in ten within ${de.p90}. The Agreement stream took ${ag.p50} for half and ${ag.p90} for nine in ten. The times move every month, so check the official guide before planning a move or a job start.` },
      { q: 'Is the Transition stream faster than Direct Entry?', a: `Not at the moment. Both show ${tr.p50} for half of the files and ${tr.p90} for nine in ten in the November 2026 update. The Transition stream still has an advantage: the applicant usually stays in Australia on a 482 while waiting, and can keep working for the sponsor. A bridging visa covers the gap if the 482 ends first.` },
      { q: 'Does the nomination count in the 186 processing time?', a: 'The Department assesses the employer nomination and the visa application, and the published visa time runs from the lodgement of the visa application. A nomination lodged later, or a request for more documents from the employer, can lengthen the wait. Lodge both together when you can, with the documents the Department lists on the 186 page.' },
    ],
    body: (h) => `
<h2>186 visa processing time by stream</h2>
${h.table(TIMES_HEAD, timesRows(['186']), timesCaption, ['l', 'r', 'r'])}
<p>The three streams share one charge, ${h.aud(h.V('186').std.base)} for the main applicant, but not one queue. The Agreement stream is small and specialised, which explains the gap. Direct Entry covers workers who apply without first holding a 482 with the employer, or whose occupation is assessed directly; Transition covers 482 holders who have worked for the sponsor for the required period.</p>
<h2>Compared with the other employer visas</h2>
<p>The 186 is now one of the slowest work visas to decide. In the same update, the temporary ${h.av('482', '482 Skills in Demand visa')} in its Core Skills stream showed ${r482.p50} for half of the files and ${r482.p90} for nine in ten, and the regional ${h.av('494', '494')} in its employer stream ${r494.p50} and ${r494.p90}. Many workers therefore start on a 482 and apply for the 186 Transition stream later, working in Australia during the wait. The ${h.a('482-visa-processing-time', '482 processing time page')} gives every 482 stream.</p>
<h2>What the dates mean for you</h2>
<ul><li>The first date is when half of the files lodged on your day would be decided, if the pace stays the same.</li><li>The second date is when nine in ten would be. Past it, your file is among the slowest tenth: check ImmiAccount for a request for information.</li><li>The Department contacts you when a decision is made. The second instalment, for an adult without functional English, is requested just before.</li></ul>
<h2>What slows a 186 application down</h2>
<p>The Department names a high volume of applications in this group as the reason for the current times. On a single file, the usual causes are an incomplete nomination, a skills assessment or English result that does not match the occupation, and late health or police checks. Front-load the documents, and answer requests quickly: the clock keeps running while the Department waits for you.</p>
<p>The cost calculator under the dates gives the charge for your family. The full breakdown, with the nomination fee paid by the employer, is on the ${h.a('186-visa-cost', '186 visa cost page')}. This site is independent of the Department of Home Affairs, and the dates it gives are arithmetic on published figures, not advice on your case.</p>`,
  },
});
