import { definePage } from '../../lib/guide-types';
import { pair } from '../../lib/times';
const t417 = pair('417');
export default definePage({
  id: 'working-holiday-visa-417-cost', group: 'work', order: 240,
  tool: { kind: 'mini:cost-417' },
  mini: { kind: 'mini:times-417', props: { title: 'When a 417 decision could come: the official times' } },
  visa: '417',
  related: ["462-visa-cost", "evisitor-651", "eta-601-cost", "visa-processing-times"],
  sources: ["regs", "ha_417", "ha_processing"],
  en: {
    slug: 'working-holiday-visa-417-cost', nav: "Working Holiday visa 417 cost", card: "Working holiday visa: first visa, second and third visas, per person.",
    title: "Working Holiday Visa 417 Cost 2026: First, Second and Third",
    description: "Working Holiday visa 417 cost in 2026: the first visa, the higher charge for a second or third visa, age limit, and specified work rules for the third year.",
    h1: "Working Holiday visa 417 cost",
    intro: (h) => `The working holiday visa 417 cost is ${h.aud(h.V('417').std.base)} for a first visa and ${h.aud(h.V('417').variants!.find((x) => x.id === 'repeat')!.fee.base)} for a second or third one.`,
    resume: (h) => `The Working Holiday visa, subclass 417, lets young people from partner countries holiday and work in Australia. Item 1225 of Schedule 1 sets a charge of ${h.aud(h.V('417').std.base)} for an applicant who has never been in Australia on a 417, and ${h.aud(h.V('417').variants!.find((x) => x.id === 'repeat')!.fee.base)} for any other applicant, which in practice means a second or third visa, in the compilation in force on 1 November 2026. There is no family application and no second instalment: each person applies and pays. Applicants must be aged 18 to 35, or younger if the arrangement with their country sets a lower limit. A third 417 requires at least 6 months of specified work done while holding the second visa, after 1 July 2019. Some passport holders are named by the Minister for a nil charge. The three visas together cost ${h.aud(h.V('417').std.base)} plus twice ${h.aud(h.V('417').variants!.find((x) => x.id === 'repeat')!.fee.base)} for one person.`,
    faqs: (h) => [
      { q: "Why is the second 417 more expensive?", a: `Item 1225 sets ${h.aud(h.V('417').std.base)} only for an applicant who has not been in Australia on a 417 before; everyone else pays ${h.aud(h.V('417').variants!.find((x) => x.id === 'repeat')!.fee.base)}. The higher charge applies to the second and third 417, and also to an applicant who held a 417 before even if it was some years ago. The calculator asks which visa you are applying for.` },
      { q: "Can my partner join my 417 application?", a: `No. The 417 has no family application; each person applies and pays the full charge. A partner of a different nationality may need a 462 or another visa. A couple travelling together pays two charges, one for each person. Each one also needs to meet the age and passport criteria.` },
      { q: "What is the age limit for the 417?", a: `Between 18 and 35, or a younger maximum when the instrument for your country sets one. Applying above the age limit makes the application invalid, and the charge is generally not refunded. Check the limit for your passport before paying. The age is checked on the day of application.` },
    ],
    body: (h) => `
<h2>Working Holiday visa 417 cost for each visa</h2>
${h.scenarios('417')}
<p>A couple travelling together pays two charges, since there is no partner rate. Applicants from countries under the Work and Holiday program use the ${h.av('462', '462 visa')} instead, with its own charge.</p>
<h2>Who can apply for the 417</h2>
${h.conditions('417')}
<p>The first 417 is applied for outside Australia with a working holiday eligible passport. A second or third can be applied for in Australia, if you hold a substantive visa or held one in the 28 days before applying.</p>
${h.feeTable('417')}
<h2>Working Holiday visa processing time</h2>
<p>The Department of Home Affairs published these times for the 417: half of the applications decided last month took ${t417.p50} or less, and 9 in 10 took ${t417.p90} or less. The tool above is already filled with them: change the day you applied to see your own dates.</p>`,
  },
});
