import { definePage } from '../../lib/guide-types';
import { timesRows, TIMES_HEAD, timesCaption, pair } from '../../lib/times';
const t801 = pair('801'), t820 = pair('820'), t100 = pair('100');
export default definePage({
  id: '801-visa', group: 'family', order: 314,
  tool: { kind: 'mini:times-801' },
  mini: { kind: 'mini:cost-820', props: { title: 'The 820 and 801 charge, paid once' } },
  visa: '820',
  related: ['820-visa-processing-time', 'partner-visa-820-cost', 'partner-visa', '309-visa-processing-time'],
  sources: ['ha_820', 'ha_processing', 'regs'],
  en: {
    slug: '801-visa', nav: '801 visa', card: 'Permanent partner visa after the 820: what it costs (nothing more), when it comes, what it asks.',
    title: '801 Visa: The Permanent Partner Stage, Cost and Time',
    description: '801 visa in 2026: the permanent partner stage after the 820, with no second charge, its official processing time of 6 to 19 months and the evidence it asks for.',
    h1: '801 visa: the permanent partner stage',
    intro: () => `The 801 visa is the permanent stage of the onshore partner visa: no new charge, and ${t801.p50} for half of the decisions.`,
    resume: (h) => `The Partner (Residence) visa, subclass 801, is the permanent visa that follows the temporary 820 for a spouse or de facto partner who applied in Australia. It is not a separate application: the 820 and the 801 are applied for together, and the single charge of ${h.aud(h.V('820').std.base)} for the applicant, paid at lodgement, covers both. The Department assesses the permanent stage about two years after the original application, when it asks the couple for updated evidence that the relationship continues. In the Department of Home Affairs processing times guide updated on 2 November 2026, which we read on 14 November 2026, half of the 801 decisions had taken ${t801.p50} or less and nine in ten ${t801.p90}. The offshore equivalent is the 100, after the 309, with ${t100.p50} and ${t100.p90}. Once granted, the 801 gives permanent residence, with the right to live, work and study in Australia indefinitely and to apply for citizenship when eligible.`,
    faqs: (h) => [
      { q: 'Do I pay for the 801 visa?', a: `No. The charge paid when you lodged the 820 and 801 application, ${h.aud(h.V('820').std.base)} for the applicant in 2026, covers both stages. The Department may ask for new police certificates or health checks at the 801 stage, which are paid to their providers.` },
      { q: 'When can I apply for the 801?', a: 'You do not lodge a new application. About two years after the combined application, the Department invites you to provide updated information through ImmiAccount. If the relationship was already long-term when you applied, the 801 can be decided at the same time as the 820.' },
      { q: 'What if the relationship ends before the 801?', a: 'The 801 is generally refused if the relationship has ended, with exceptions set in the Regulations, for example where the sponsor has died or where family violence is established, or where there is a child of the relationship. These cases are assessed individually; a registered migration agent or lawyer can advise.' },
    ],
    body: (h) => `
<h2>801 visa processing time against the 820</h2>
${h.table(TIMES_HEAD, timesRows(['820', '801', '309', '100']), timesCaption, ['l', 'r', 'r'])}
<p>The 820 line counts from the original lodgement: ${t820.p50} for half of the decisions and ${t820.p90} for nine in ten. The 801 line is the second stage. The calculator above applies the 801 times to the day you enter; use the date the Department asked for your updated evidence if you have one.</p>
<h2>801 visa cost: what was already paid</h2>
${h.feeTable('820')}
<p>The table is the onshore partner charge, set in item 1124B of Schedule 1. The temporary class has a nil charge, and the permanent class carries the whole amount, paid at lodgement. The ${h.a('partner-visa-820-cost', 'partner visa 820 cost page')} details the family scenarios.</p>
<h2>What the 801 stage asks for</h2>
<ul><li>Updated evidence of the relationship: joint finances, the shared household, how others see you as a couple, and your commitment.</li><li>Statements from you and your sponsor about the relationship today.</li><li>Police certificates for any country where you lived since the first stage, if the Department asks.</li></ul>
<p>Send the evidence through ImmiAccount when asked, and keep the address and contact details there up to date: the request and the decision both arrive there.</p>
<h2>After the grant</h2>
<p>The 801 is a permanent visa. Its travel facility lasts five years; after that, a ${h.av('155', 'Resident Return visa')} keeps the right to re-enter. Citizenship has its own residence requirement and fee, outside this site. This site is independent of the Department of Home Affairs and does not assess eligibility.</p>`,
  },
});
