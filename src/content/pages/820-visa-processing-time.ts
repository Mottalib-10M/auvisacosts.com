import { definePage } from '../../lib/guide-types';
import { timesRows, TIMES_HEAD, timesCaption, pair } from '../../lib/times';
const t820 = pair('820'), t801 = pair('801'), t309 = pair('309');
export default definePage({
  id: '820-visa-processing-time', group: 'family', order: 312,
  tool: { kind: 'mini:times-820' },
  mini: { kind: 'mini:cost-820', props: { title: 'What the 820 and 801 cost together' } },
  visa: '820',
  related: ['partner-visa-820-cost', '801-visa', '309-visa-processing-time', 'partner-visa'],
  sources: ['ha_processing', 'ha_820', 'regs'],
  en: {
    slug: '820-visa-processing-time', nav: '820 visa processing time', card: 'Onshore partner visa: the official times for the 820, then the 801, as dates.',
    title: '820 Visa Processing Time: Onshore Partner, Then 801',
    description: '820 visa processing time in November 2026: 21 months for half of the onshore partner files and 30 months for nine in ten, then the 801 stage. Your dates.',
    h1: '820 visa processing time, then the 801',
    intro: () => `The 820 visa processing time is ${t820.p50} for half of the onshore partner applications and ${t820.p90} for nine in ten.`,
    resume: () => `The onshore partner visa is one application for two visas: the temporary Partner visa, subclass 820, and the permanent Partner visa, subclass 801. The Department of Home Affairs publishes a processing time for each stage. In its guide updated on 2 November 2026, which we read on 14 November 2026, half of the 820 applications decided in the previous month had taken ${t820.p50} or less from lodgement, and nine in ten ${t820.p90}. The permanent 801 stage is assessed about two years after the original application, and the guide lists its own time: ${t801.p50} for half of the 801 decisions and ${t801.p90} for nine in ten. The offshore 309 shows ${t309.p50} and ${t309.p90}. While the 820 is processed, the applicant stays in Australia on a bridging visa, usually with permission to work. The calculator gives the two dates from your lodgement day.`,
    faqs: () => [
      { q: 'How long does the 820 partner visa take in 2026?', a: `In the update of 2 November 2026, half of the 820 applications were decided within ${t820.p50} and nine in ten within ${t820.p90}. Some partner applications can be prioritised; the Department explains when, and how to ask, in its partner visa questions and answers.` },
      { q: 'How long does the 801 take after the 820?', a: `The 801 stage starts about two years after the combined application was lodged, when the Department asks for updated evidence of the relationship. The guide gives ${t801.p50} for half of the 801 decisions and ${t801.p90} for nine in ten. Where the relationship was already long-term when you applied, the Department can decide both stages together.` },
      { q: 'Can I work while the 820 is being processed?', a: 'The bridging visa A granted with an onshore partner application usually carries the work conditions of the visa you held before, and the partner visa itself allows work once granted. Check the conditions shown in ImmiAccount or VEVO, which are the ones that apply to you.' },
    ],
    body: (h) => `
<h2>820 visa processing time, stage by stage</h2>
${h.table(TIMES_HEAD, timesRows(['820', '801', '309', '100']), timesCaption, ['l', 'r', 'r'])}
<p>The four lines are the two partner routes: onshore (820, then 801) and offshore (309, then 100). The permanent stage is listed separately because it is assessed later on the same application, without a second charge. The ${h.a('801-visa', '801 visa page')} explains what that stage asks for.</p>
<h2>The 820 cost does not change with the wait</h2>
<p>The whole charge is paid at lodgement: ${h.aud(h.V('820').std.base)} for the applicant, ${h.aud(h.V('820').std.addU18)} for each dependent child, and nothing for the Australian sponsor. A holder of a Prospective Marriage visa who has married the sponsor pays ${h.aud(h.V('820').variants![0].fee.base)} instead. The second calculator gives the total for your family; the ${h.a('partner-visa-820-cost', 'partner visa 820 cost page')} has the full table.</p>
<h2>What the Department looks at during the wait</h2>
<ul><li>The relationship: shared finances, the household, how others see you as a couple, and your commitment to each other.</li><li>The sponsor: an Australian citizen, permanent resident or eligible New Zealand citizen, approved as sponsor with the application.</li><li>Health and character checks of the applicant and of each child included.</li></ul>
<p>A complete application with this evidence from the start avoids requests for information, the main cause of a file taking longer than the published times.</p>
<h2>Reading your 820 dates</h2>
<p>The big date in the tool is when nine in ten files lodged on your day would be decided at last month's pace; the smaller “Half decided by” date is when half would be. Past the big date, check ImmiAccount for a request you may have missed. The ${h.a('visa-approval-time', 'visa approval time page')} places any wait in the published bands, and the ${h.a('partner-visa', 'partner visa page')} compares the onshore and offshore routes. This site is independent of the Department of Home Affairs and gives no advice on your relationship evidence.</p>`,
  },
});
