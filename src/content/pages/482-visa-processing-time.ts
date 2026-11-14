import { definePage } from '../../lib/guide-types';
import { timesRows, TIMES_HEAD, timesCaption, pair } from '../../lib/times';
const core = pair('482', 'Core Skills'), spec = pair('482', 'Specialist Skills'), lab = pair('482', 'Labour Agreement'), nom = pair('482', 'Nomination'), spo = pair('482', 'Sponsorship');
export default definePage({
  id: '482-visa-processing-time', group: 'work', order: 232,
  tool: { kind: 'mini:times-482', props: { r: 11 } },
  mini: { kind: 'mini:cost-482', props: { title: 'What the 482 costs for your family' } },
  visa: '482',
  related: ['482-visa-cost', '186-visa-processing-time', 'visa-application-time', 'visa-approval-time'],
  sources: ['ha_processing', 'ha_482', 'regs'],
  en: {
    slug: '482-visa-processing-time', nav: '482 visa processing time', card: 'Core Skills, Specialist Skills, Labour Agreement, nomination and sponsorship: official times, as dates.',
    title: '482 Visa Processing Time: Core and Specialist Skills',
    description: '482 visa processing time in November 2026: Core Skills 6 to 9 months, Specialist Skills 59 days to 3 months, plus nomination and sponsorship times, as dates.',
    h1: '482 visa processing time for each stream',
    intro: () => `The 482 visa processing time is ${core.p50} for half of the Core Skills files and ${spec.p50} in the Specialist Skills stream.`,
    resume: () => `The Skills in Demand visa, subclass 482, replaced the Temporary Skill Shortage visa in December 2024 and kept its number. Its processing time is published stream by stream, and the employer's own steps have times too. In the Department of Home Affairs guide updated on 2 November 2026, read on 14 November 2026, half of the Core Skills applications decided in the previous month had taken ${core.p50} or less and nine in ten ${core.p90}. The Specialist Skills stream, for highly paid specialists, was faster: ${spec.p50} for half and ${spec.p90} for nine in ten. The Labour Agreement stream showed ${lab.p50} and ${lab.p90}. Before the visa, the employer must be an approved sponsor and lodge a nomination: the guide gives ${spo.p50} and ${spo.p90} for sponsorship, ${nom.p50} and ${nom.p90} for nominations. Choose your stream in the calculator to see the dates that follow from the day you lodged.`,
    faqs: () => [
      { q: 'How long does a 482 visa take to process?', a: `It depends on the stream. In the November 2026 update, half of the Core Skills files were decided within ${core.p50} and nine in ten within ${core.p90}; Specialist Skills within ${spec.p50} and ${spec.p90}; Labour Agreement within ${lab.p50} and ${lab.p90}. The employer's sponsorship and nomination have their own times.` },
      { q: 'Is the Specialist Skills stream really faster?', a: `Yes, in the published figures: ${spec.p50} for half of the files against ${core.p50} in Core Skills. The Specialist Skills stream is for workers earning above its own income threshold, which the Department publishes on the 482 page. The visa charge is the same in every stream, so the faster stream costs nothing more.` },
      { q: 'Can I work in Australia while my 482 is processed?', a: 'Only if your current visa allows it. If you apply in Australia and your visa ends during the wait, a bridging visa keeps you lawful, with the work conditions of your previous visa in most cases. Applicants outside Australia wait outside and start work after the grant.' },
    ],
    body: (h) => `
<h2>482 visa processing time, stream by stream</h2>
${h.table(TIMES_HEAD, timesRows(['482']), timesCaption, ['l', 'r', 'r'])}
<p>The sponsorship and nomination rows are the employer's steps. An employer already approved as a standard business sponsor skips the first. The nomination and the visa can be lodged together, and the Department usually decides the nomination first.</p>
<h2>What the employer's steps add</h2>
<p>A worker whose employer must first become a sponsor faces three steps in a row. Adding the nine-in-ten times gives an order of magnitude for a slow case; in practice the steps overlap, because the nomination and visa can be lodged as soon as the sponsorship is approved, and many files are decided much faster than the ninety per cent mark. The ${h.a('visa-approval-time', 'visa approval time page')} tells you whether your own wait is within the usual range.</p>
<h2>From the 482 to permanent residence</h2>
<p>Many 482 holders later apply for the permanent ${h.av('186', '186 visa')} in its Transition stream, after working for the sponsor. That step takes much longer to decide: see the ${h.a('186-visa-processing-time', '186 visa processing time page')}. Waiting on a 482 in Australia, with the right to work, is why that route remains popular despite the time.</p>
<h2>The cost while you wait</h2>
<p>The 482 charge is ${h.aud(h.V('482').std.base)} for the main applicant and the same amount for each adult family member, an unusual rule: on most permanent visas a partner pays half. A child pays ${h.aud(h.V('482').std.addU18)}. The second calculator gives the total for your family; the ${h.a('482-visa-cost', '482 visa cost page')} explains each line. Employer charges such as the training levy are paid by the employer and are not counted here.</p>
<p>The times in this page are the Department's, copied on the day shown. They describe applications decided last month, so a date worked out today can move by the time you lodge. This site is independent and does not assess applications.</p>`,
  },
});
