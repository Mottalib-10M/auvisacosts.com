import { definePage } from '../../lib/guide-types';
export default definePage({
  id: '870-visa-cost', group: 'parents', order: 560,
  tool: { kind: 'mini:cost-870' },
  mini: { kind: 'mini:decision', props: {"title": "When a 870 decision could come"} },
  visa: '870',
  related: ["parent-visa-103-cost", "contributory-parent-visa-143-cost", "parent-visa-costs-compared", "visitor-visa-600-cost"],
  sources: ["regs", "ha_870", "ha_processing"],
  en: {
    slug: '870-visa-cost', nav: "870 visa cost", card: "Sponsored Parent (Temporary): first charge and the 3 or 5 year second instalment.",
    title: "870 Visa Cost 2026: Sponsored Parent Visa for 3 or 5 Years",
    description: "870 visa cost in 2026 for the Sponsored Parent (Temporary) visa: first charge, second instalment for 3 or 5 years, per parent, and the Pacific rate, totalled.",
    h1: "870 visa cost for 3 or 5 years",
    intro: (h) => `The 870 visa cost is ${h.aud(h.V('870').std.base)} at lodgement, plus ${h.aud(h.V('870').second!.perApplicant!)} before grant for a stay of up to 3 years.`,
    resume: (h) => `The Sponsored Parent (Temporary) visa, subclass 870, lets parents stay in Australia for up to 3 or 5 years at a time without the queue of the permanent parent visas. Item 1239 of Schedule 1 sets a first instalment of ${h.aud(h.V('870').std.base)} for each parent and a second instalment that depends on the length of stay: ${h.aud(h.V('870').second!.perApplicant!)} for a stay of up to 3 years, and ${h.aud(h.V('870').second!.perApplicantLong!)} for up to 5 years, in the compilation in force on 1 November 2026. Each parent applies separately, so a couple pays twice. For one parent, 3 years cost ${h.aud(h.cost({ code: '870', adults: 0, children: 0 }).total)}; for two parents, twice that. With a Pacific or Timor-Leste passport, the first instalment is ${h.aud(h.V('870').pacific!.base)}. Before the parent applies, the child must be approved as a parent sponsor, a separate step.`,
    faqs: (h) => [
      { q: "How much is the 870 for 5 years?", a: `The first instalment of ${h.aud(h.V('870').std.base)} plus a second instalment of ${h.aud(h.V('870').second!.perApplicantLong!)} for a stay of up to 5 years, per parent. For 3 years the second instalment is ${h.aud(h.V('870').second!.perApplicant!)}. The calculator asks for the length of stay and adds the right amount for each parent who applies.` },
      { q: "Can both parents apply on one 870 application?", a: `No. Each parent applies and pays separately; the 870 has no additional applicant charge. Two parents therefore pay two first instalments and two second instalments. The calculator multiplies the charges by the number of parents you enter. Each parent also receives its own decision.` },
      { q: "Is the 870 cheaper than a permanent parent visa?", a: `Per visa, yes: ${h.aud(h.cost({ code: '870', adults: 0, children: 0 }).total)} for 3 years against ${h.aud(h.cost({ code: '103', adults: 0, children: 0 }).total)} for a 103. But the 870 must be renewed with new charges, and it leads to no permanent status by itself. Over several renewals the 870 can cost more than a 103 in total. The parent visa comparison page puts the routes side by side.` },
    ],
    body: (h) => `
<h2>870 visa cost for one or two parents</h2>
${h.scenarios('870')}
<p>Compared with the permanent parent visas, the 870 costs less per stay but gives no permanent status, and each new visa is a new charge. For a couple, two successive 3-year 870 visas already cost more than one 103 application.</p>
<h2>Who can apply for the 870</h2>
${h.conditions('870')}
<p>The parent must be the biological, adoptive or step-parent, or the parent-in-law, of the approved sponsor. A parent who holds or has applied for a 870 cannot apply for the 103, 143, 804 or 864 at the same time.</p>
${h.feeTable('870')}
<h2>870 visa processing time</h2>
<p>There are two steps to time: the approval of the parent sponsor, then the visa. Copy the official times for subclass 870 below to see the dates for the visa step.</p>`,
  },
});
