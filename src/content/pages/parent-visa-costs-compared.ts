import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'parent-visa-costs-compared', group: 'guides', order: 660,
  tool: { kind: 'mini:parents' },
  related: ["parent-visa-103-cost", "contributory-parent-visa-143-cost", "173-visa-cost", "870-visa-cost"],
  sources: ["regs", "ha_103", "ha_143", "ha_870"],
  en: {
    slug: 'parent-visa-costs-compared', nav: "Parent visas compared", card: "The 103, 143, 173 then 143, and 870 added up for one or two parents.",
    title: "Parent Visa Costs Compared: 103, 143, 173 and 870 in 2026",
    description: "Parent visa costs compared for 2026: the non-contributory 103, the contributory 143, the 173 then 143 route and the temporary 870, for one or two parents.",
    h1: "Parent visa costs compared",
    intro: (h) => `Parent visa costs run from ${h.aud(h.cost({ code: '103', adults: 0, children: 0 }).total)} for one parent on the 103 to ${h.aud(h.cost({ code: '143', adults: 0, children: 0 }).total)} on the contributory 143.`,
    resume: (h) => `Four routes bring a parent to Australia, and their prices differ more than for any other family of visas. The Parent visa, subclass 103, costs ${h.aud(h.cost({ code: '103', adults: 0, children: 0 }).total)} for one parent, first and second instalments together. The Contributory Parent visa, subclass 143, costs ${h.aud(h.cost({ code: '143', adults: 0, children: 0 }).total)}, most of it in a second instalment of ${h.aud(h.V('143').second!.perApplicant!)}. The temporary 173 splits the contributory cost in two: ${h.aud(h.cost({ code: '173', adults: 0, children: 0 }).total)} for the 173, then ${h.aud(h.cost({ code: '143', adults: 0, children: 0, variant: 'from173' }).total)} for the 143. The Sponsored Parent (Temporary) visa, subclass 870, costs ${h.aud(h.cost({ code: '870', adults: 0, children: 0 }).total)} for a stay of up to 3 years and gives no permanent status. Parents of age pension age who apply in Australia have the 804 and the 864, with the same charges as the 103 and the 143. Two parents applying together share one application on the permanent visas but each pay their own 870.`,
    faqs: (h) => [
      { q: "What is the cheapest way to bring parents to Australia?", a: `In charges, the 103 or the 804: ${h.aud(h.cost({ code: '103', adults: 1, children: 0 }).total)} for two parents. The temporary 870 costs less per visa but must be renewed. The 103 is slow to be processed, which is the price of the low charge. The comparison table above shows each route for two parents.` },
      { q: "Is the 173 then 143 route cheaper than a direct 143?", a: `The totals are close. The 173 route costs ${h.aud(h.cost({ code: '173', adults: 0, children: 0 }).total)} plus ${h.aud(h.cost({ code: '143', adults: 0, children: 0, variant: 'from173' }).total)} for one parent, against ${h.aud(h.cost({ code: '143', adults: 0, children: 0 }).total)} for a direct 143. The 173 route adds a second application and two payment requests, but it lets parents live in Australia between the two steps.` },
      { q: "Can two parents share one 870 application?", a: `No. Each parent applies for the 870 separately and pays its own first and second instalments. Two parents therefore pay two 870 charges, while on the 103, 143, 804 and 864 they share one application. The table above counts both. Each application receives its own decision and its own payment request.` },
    ],
    body: (h) => `
<h2>Parent visa costs compared for two parents</h2>
${h.compareTable(['103', '143', '173', '804', '864', '870'], 1, 0, 'Two parents. Permanent visas: one application for both. 870: two separate applications, stay of up to 3 years each.')}
<p>The calculator above adds both steps of the 173 route and doubles the 870 for two parents. The 173 total in the table is the temporary step only.</p>
<h2>How the instalments fall</h2>
<p>All permanent parent visas ask for a second instalment before grant. On the 103 and 804 it is ${h.aud(h.V('103').second!.perApplicant!)} per applicant; on the 143 and 864 it is ${h.aud(h.V('143').second!.perApplicant!)} per adult and ${h.aud(h.V('143').second!.perChild!)} per dependent child. The payment request sets a deadline of ${h.C.secondInstalmentNoticeDaysInAustralia} days within Australia and ${h.C.secondInstalmentNoticeDaysOther} days otherwise.</p>
<h2>Choosing a route</h2>
<p>Parents who hold or have applied for an 870 cannot apply for the 103, 143, 804 or 864 at the same time, and a parent with one permanent parent application open must withdraw it to lodge another. Plan the route before lodging: each change means a new first instalment.</p>`,
  },
});
