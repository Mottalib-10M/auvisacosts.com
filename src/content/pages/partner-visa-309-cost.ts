import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'partner-visa-309-cost', group: 'family', order: 320,
  tool: { kind: 'mini:cost-309' },
  mini: { kind: 'mini:decision', props: {"title": "When a 309 decision could come"} },
  visa: '309',
  related: ["partner-visa-820-cost", "prospective-marriage-visa-300-cost", "child-visa-101-cost", "visa-cost-for-a-family"],
  sources: ["regs", "ha_309", "ha_processing"],
  en: {
    slug: 'partner-visa-309-cost', nav: "Partner visa 309 cost", card: "Offshore partner visa: one charge for the 309 and the 100, children, Pacific rate.",
    title: "Partner Visa 309 Cost 2026: Offshore 309 and 100 Together",
    description: "Partner visa 309 cost in 2026 for applicants outside Australia: one charge for the provisional 309 and permanent 100, children, and the Pacific rates.",
    h1: "Partner visa 309 cost, from outside Australia",
    intro: (h) => `The partner visa 309 cost is ${h.aud(h.V('309').std.base)} for the applicant, covering both the 309 and the permanent 100.`,
    resume: (h) => `The offshore partner visa is applied for from outside Australia. Like the onshore one, it is a single application for two visas: the Partner (Provisional) visa, subclass 309, and the Partner (Migrant) visa, subclass 100. The provisional class has a nil charge and the full amount sits in item 1129 of Schedule 1, the Partner (Migrant) class. In the compilation in force on 1 November 2026, the applicant pays ${h.aud(h.V('309').std.base)}, each other family member aged 18 or over ${h.aud(h.V('309').std.add18)} and each child under 18 ${h.aud(h.V('309').std.addU18)}, with no second instalment. With a Pacific or Timor-Leste passport, the charge is ${h.aud(h.V('309').pacific!.base)}. Applicants who hold a Dependent Child visa, subclass 445, and family members combined with them pay nothing. The sponsoring partner in Australia pays no fee to the Department.`,
    faqs: (h) => [
      { q: "Is the 309 cheaper than the 820?", a: `No. Items 1129 and 1124B set the same standard charge, ${h.aud(h.V('309').std.base)}, for the offshore and the onshore partner visa. Pacific and Timor-Leste passport holders pay the same lower rate on both. The choice between them depends on where you are when you apply, not on the price.` },
      { q: "Do I pay for the 100 separately?", a: `No. The permanent 100 is decided on the same application, with no second charge and no second instalment. The single charge paid at lodgement covers the provisional 309 and the later decision on the permanent 100, about two years after the original application.` },
      { q: "Does a child under 18 pay the full partner charge?", a: `No. A dependent child who joins the application pays the under-18 additional applicant charge of ${h.aud(h.V('309').std.addU18)}. An adult child, 18 or over on the day of application, pays the adult rate of ${h.aud(h.V('309').std.add18)}. The calculator splits family members by age so that each pays the right amount.` },
    ],
    body: (h) => `
<h2>Partner visa 309 cost with children</h2>
${h.scenarios('309')}
<p>A couple with one child from the applicant's earlier relationship pays ${h.aud(h.cost({ code: '309', adults: 0, children: 1 }).total)}. Health examinations and police certificates from each country of residence are paid to the providers and come on top of the visa charge.</p>
<h2>Who can apply for the 309</h2>
${h.conditions('309')}
<p>You must be outside Australia when you apply. The permanent 100 is assessed later on the same application, without a second charge.</p>
${h.feeTable('309')}
<h2>Partner visa 309 processing time</h2>
<p>The official tool lists the 309 and the 100 separately. Enter the 50% and 90% times for the 309 below to see when a decision on the provisional stage could come.</p>`,
  },
});
