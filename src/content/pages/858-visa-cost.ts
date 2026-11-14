import { definePage } from '../../lib/guide-types';
import { pair } from '../../lib/times';
const t858 = pair('858');
export default definePage({
  id: '858-visa-cost', group: 'skilled', order: 150,
  tool: { kind: 'mini:cost-858' },
  mini: { kind: 'mini:times-858', props: { title: 'When a 858 decision could come: the official times' } },
  visa: '858',
  related: ["189-visa-cost", "190-visa-cost", "skilled-visa-costs-compared", "second-instalment"],
  sources: ["regs", "ha_858", "ha_processing"],
  en: {
    slug: '858-visa-cost', nav: "858 visa cost", card: "National Innovation visa: charges by invitation, family members and English instalment.",
    title: "858 Visa Cost 2026: National Innovation Visa for a Family",
    description: "858 visa cost in 2026 for the National Innovation visa: main applicant, partner, children, second instalment without functional English, Pacific rate.",
    h1: "858 visa cost: the National Innovation visa",
    intro: (h) => `The 858 visa cost is ${h.aud(h.V('858').std.base)} for the main applicant, plus ${h.aud(h.V('858').std.add18)} for a partner and ${h.aud(h.V('858').std.addU18)} per child.`,
    resume: (h) => `The National Innovation visa is a permanent visa, subclass 858, that can only be applied for after a written invitation from the Minister. Its charge sits in item 1113 of Schedule 1. In the compilation in force on 1 November 2026, the main applicant pays ${h.aud(h.V('858').std.base)}, each family member aged 18 or over ${h.aud(h.V('858').std.add18)}, and each child ${h.aud(h.V('858').std.addU18)}. These are the highest base charges of the permanent skilled visas, about a hundred dollars above the 189 and 190. Adults assessed as not having functional English pay a second instalment of ${h.aud(h.V('858').second!.adultNoEnglish!)} each before grant. With a Pacific or Timor-Leste passport, the base charge is ${h.aud(h.V('858').pacific!.base)}. The expression of interest that precedes the invitation is free; the charge is paid only when the visa application is lodged.`,
    faqs: (h) => [
      { q: "Do I pay anything for the 858 expression of interest?", a: `No. The expression of interest is free; the ${h.aud(h.V('858').std.base)} base charge and the family charges are paid when you lodge the visa application after the invitation. The expression of interest stage costs nothing at all. Once invited, you pay the whole first instalment in one go, for every applicant on the form, when you lodge in ImmiAccount.` },
      { q: "Is the 858 more expensive than the 189?", a: `Slightly: ${h.aud(h.V('858').std.base)} against ${h.aud(h.V('189').std.base)} for the main applicant, and the same pattern for family members. For a couple with children, the difference stays small. The real difference between the two visas is in who can apply: the 858 is for people with an internationally recognised record of exceptional achievement.` },
      { q: "Does the 858 have a second instalment?", a: `Only for applicants aged 18 or over assessed as not having functional English: ${h.aud(h.V('858').second!.adultNoEnglish!)} each. Children under 18 never pay it. A test result or other evidence of functional English for every adult avoids it completely. The payment is requested only when the decision is near, with a deadline set in the request.` },
    ],
    body: (h) => `
<h2>858 visa cost for each household</h2>
${h.scenarios('858')}
<p>For a couple with two children the first instalment is ${h.aud(h.cost({ code: '858', adults: 1, children: 2 }).firstInstalment)}. Applicants who hesitate between the 858 and a points-tested visa can compare the two with the ${h.a('skilled-visa-costs-compared', 'skilled visa comparison')}, keeping in mind that only the 858 needs no points score.</p>
<h2>Who can apply for the 858</h2>
${h.conditions('858')}
<p>The application must be lodged within the period the invitation states. An applicant in Australia must hold a substantive visa or one of the bridging visas listed in the item.</p>
${h.feeTable('858')}
<h2>858 visa processing time</h2>
<p>The Department of Home Affairs published these times for the 858: half of the applications decided last month took ${t858.p50} or less, and 9 in 10 took ${t858.p90} or less. The tool above is already filled with them: change the day you applied to see your own dates.</p>`,
  },
});
