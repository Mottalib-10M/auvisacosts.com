import { definePage } from '../../lib/guide-types';
import { timesRows, TIMES_HEAD, timesCaption, pair } from '../../lib/times';
const fam = pair('491', 'Family Sponsored Regional'), st = pair('491', 'State/Territory Government Nominated Regional'), t191 = pair('191'), t190 = pair('190');
export default definePage({
  id: '491-visa-processing-time', group: 'skilled', order: 132,
  tool: { kind: 'mini:times-491', props: { r: 8 } },
  mini: { kind: 'mini:cost-491', props: { title: 'What the 491 costs for your family' } },
  visa: '491',
  related: ['491-visa-cost', '191-visa-processing-time', '190-visa-processing-time', 'visa-approval-time'],
  sources: ['ha_processing', 'ha_491', 'regs'],
  en: {
    slug: '491-visa-processing-time', nav: '491 visa processing time', card: 'State nominated and family sponsored streams: the official times, as dates, then the 191.',
    title: '491 Visa Processing Time: State and Family Streams',
    description: '491 visa processing time in November 2026: 17 to 30 months with a state nomination, 4 to 7 months family sponsored. Your decision dates and the 191 step.',
    h1: '491 visa processing time by stream',
    intro: () => `The 491 visa processing time is ${st.p50} for half of the state nominated files, against ${fam.p50} in the family sponsored stream.`,
    resume: () => `The Skilled Work Regional (Provisional) visa, subclass 491, lets a skilled worker live and work in a designated regional area for five years, then apply for permanent residence through the 191. It has two streams with very different waits. In the Department of Home Affairs processing times guide updated on 2 November 2026, read on 14 November 2026, half of the applications nominated by a state or territory government decided in the previous month had taken ${st.p50} or less, and nine in ten ${st.p90}. In the family sponsored stream, where an eligible relative living in a designated regional area sponsors the applicant, the times were ${fam.p50} and ${fam.p90}. The gap is large: the state nominated stream is among the slowest skilled visas in the guide. Pick your stream in the calculator to see the dates from your lodgement day, and the cost for your family below it.`,
    faqs: () => [
      { q: 'How long does a 491 visa take?', a: `In the November 2026 update, half of the state nominated 491 files were decided within ${st.p50} and nine in ten within ${st.p90}. The family sponsored stream took ${fam.p50} and ${fam.p90}. The times count from lodgement, after the invitation; the state nomination before it has its own timeline.` },
      { q: 'Is the 491 faster than the 190?', a: `Not with a state nomination at the moment: the 190 showed ${t190.p50} for half of its files, against ${st.p50} for the state nominated 491. The 491 is easier to be invited for in many occupations, which is why some applicants still choose it. The two visas cost the same at lodgement.` },
      { q: 'How long does the 191 take after the 491?', a: `The 191 is applied for after at least three years on the 491 meeting its income requirement. In the same update, half of the 191 files were decided within ${t191.p50} and nine in ten within ${t191.p90}. The 191 charge is much lower than the 491 charge.` },
    ],
    body: (h) => `
<h2>491 visa processing time in both streams</h2>
${h.table(TIMES_HEAD, timesRows(['491', '191']), timesCaption, ['l', 'r', 'r'])}
<p>The ${h.av('191', '191')} row is the second step: the permanent visa a 491 holder applies for after living and working in a regional area. The full route, from the 491 lodgement to a permanent visa, is therefore the 491 wait, at least three years on the visa, and the 191 wait.</p>
<h2>Why the two 491 streams differ</h2>
<p>The Department does not publish a reason for each stream. The family sponsored stream is smaller, and its sponsor is a relative rather than a government. Skilled visas are processed under ministerial directions that set priorities between them, and the number of state nominated files on hand is much larger. Whatever the reason, it is the stream on your invitation that decides which line of the table applies to you.</p>
<h2>The 491 cost, and the 191 after it</h2>
<p>The 491 charge is ${h.aud(h.V('491').std.base)} for the main applicant, ${h.aud(h.V('491').std.add18)} per adult family member and ${h.aud(h.V('491').std.addU18)} per child, at lodgement. A second instalment of ${h.aud(h.V('491').second!.adultNoEnglish!)} is due for each adult without functional English before the grant. The 191 later costs ${h.aud(h.V('191').std.base)} for the main applicant. The second calculator gives your 491 total; the ${h.a('491-visa-cost', '491 visa cost page')} adds the 191 for the whole family.</p>
<h2>While you wait</h2>
<ul><li>Keep your skills assessment and English result valid at the time they are assessed, as the invitation requires.</li><li>Answer requests for health checks and police certificates quickly: the published time keeps running while the Department waits.</li><li>If the big date shown by the calculator (“9 in 10 decided by”) has passed, check ImmiAccount for a request you may have missed.</li></ul>
<p>This site is independent of the Department of Home Affairs. The dates are arithmetic on published figures, not a forecast for your application.</p>`,
  },
});
