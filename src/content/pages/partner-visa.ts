import { definePage } from '../../lib/guide-types';
import { timesRows, TIMES_HEAD, timesCaption, pair } from '../../lib/times';
const t820 = pair('820'), t309 = pair('309'), t300 = pair('300');
export default definePage({
  id: 'partner-visa', group: 'family', order: 300,
  tool: { kind: 'mini:partner', props: { w: 1, s: 0, c: 0 } },
  related: ['partner-visa-australia-cost', '820-visa-processing-time', '309-visa-processing-time', '801-visa'],
  sources: ['ha_820', 'ha_309', 'ha_300', 'ha_processing', 'regs'],
  en: {
    slug: 'partner-visa', nav: 'Partner visa: which one', card: 'Onshore 820, offshore 309 or engaged 300: which partner visa fits, its cost and its wait.',
    title: 'Partner Visa Australia: 820, 309 or 300, Cost and Wait',
    description: 'Partner visa for Australia in 2026: which of the 820, 309 and 300 fits your situation, what it costs for you and your children, and the official waiting times.',
    h1: 'Partner visa for Australia: which one, cost and wait',
    intro: (h) => `A partner visa for Australia costs ${h.aud(h.V('820').std.base)} for the applicant, whichever route you take, and half of the files are decided within ${t820.p50}.`,
    resume: (h) => `Australia has three partner visas. A spouse or de facto partner of an Australian citizen, permanent resident or eligible New Zealand citizen applies for the 820 and 801 when in Australia, or for the 309 and 100 when outside. An engaged couple who will marry in Australia can use the Prospective Marriage visa, subclass 300, then apply for the 820 after the wedding at a much lower charge. The partner visa charge set by Schedule 1 of the Migration Regulations, in the compilation in force on 1 November 2026, is ${h.aud(h.V('820').std.base)} for the applicant on each of the three, with ${h.aud(h.V('820').std.addU18)} for each dependent child; the sponsor pays nothing. In the Department of Home Affairs processing times guide updated on 2 November 2026, read on 14 November 2026, half of the 820 and 309 files were decided within ${t820.p50}, and nine in ten within ${t820.p90} onshore and ${t309.p90} offshore. The tool picks the visa for your situation and shows its charge and times.`,
    faqs: (h) => [
      { q: 'Which partner visa should I apply for?', a: 'Where you are when you apply decides it for a married or de facto couple: the 820 in Australia, the 309 outside. The 300 is for an engaged couple who will marry in Australia, applied for outside Australia. Each visa has its own eligibility criteria on the Department of Home Affairs website.' },
      { q: 'How much is a partner visa in Australia?', a: `${h.aud(h.V('820').std.base)} for the applicant on the 820, 309 and 300 in 2026, plus ${h.aud(h.V('820').std.addU18)} per dependent child under 18 and ${h.aud(h.V('820').std.add18)} per dependent family member aged 18 or over. The sponsor pays nothing. Health checks and police certificates are extra.` },
      { q: 'How long does a partner visa take?', a: `In the update of 2 November 2026: 820, ${t820.p50} for half of the files and ${t820.p90} for nine in ten; 309, ${t309.p50} and ${t309.p90}; 300, ${t300.p50} and ${t300.p90}. The permanent stage of the 820 and 309 is decided later on the same application.` },
    ],
    body: (h) => `
<h2>Partner visa options side by side</h2>
${h.table(['', '820 and 801', '309 and 100', '300 Prospective Marriage'], [
  ['Where you apply', 'In Australia', 'Outside Australia', 'Outside Australia'],
  ['Relationship', 'Married or de facto', 'Married or de facto', 'Engaged'],
  ['Charge, applicant', h.aud(h.V('820').std.base), h.aud(h.V('309').std.base), h.aud(h.V('300').std.base)],
  ['Each child under 18', h.aud(h.V('820').std.addU18), h.aud(h.V('309').std.addU18), h.aud(h.V('300').std.addU18)],
  ['Leads to', 'Permanent 801 on the same application', 'Permanent 100 on the same application', '820 after the wedding, at a lower charge'],
], 'Schedule 1 items 1124B, 1129 and 1215, compilation in force on 1 November 2026.', ['l', 'l', 'l', 'l'])}
<p>The three visas cost the same at lodgement. The engaged route costs more in total, because the 820 after the wedding is a second application with its own charge, ${h.aud(h.V('820').variants![0].fee.base)} for the applicant. The ${h.a('partner-visa-australia-cost', 'partner visa cost page')} adds both charges for your family.</p>
<h2>Partner visa waiting times</h2>
${h.table(TIMES_HEAD, timesRows(['820', '801', '309', '100', '300']), timesCaption, ['l', 'r', 'r'])}
<p>The ${h.a('820-visa-processing-time', '820 processing time page')} and the ${h.a('309-visa-processing-time', '309 processing time page')} turn these times into dates from your lodgement day.</p>
<h2>What every partner visa asks for</h2>
<ul><li>A genuine and continuing relationship, shown by finances, the household, social recognition and commitment.</li><li>A sponsor who is an Australian citizen, permanent resident or eligible New Zealand citizen, approved with the application.</li><li>Health and character checks of the applicant and of each child included.</li></ul>
<p>A de facto relationship generally needs to have lasted twelve months before the application, unless it is registered in an Australian state or territory or another exception applies. This site summarises the rules from the Department's pages and does not assess your case: the Department, or a registered migration agent, does.</p>`,
  },
});
