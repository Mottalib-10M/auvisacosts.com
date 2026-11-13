import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'parent-visa-103-cost', group: 'parents', order: 530,
  tool: { kind: 'mini:cost-103' },
  mini: { kind: 'mini:decision', props: {"title": "When a 103 decision could come"} },
  visa: '103',
  related: ["contributory-parent-visa-143-cost", "aged-parent-visa-804-cost", "parent-visa-costs-compared", "870-visa-cost"],
  sources: ["regs", "ha_103", "ha_processing"],
  en: {
    slug: 'parent-visa-103-cost', nav: "Parent visa 103 cost", card: "Non-contributory parent visa: the lower charge and the long queue.",
    title: "Parent Visa 103 Cost 2026: The Non-Contributory Route",
    description: "Parent visa 103 cost in 2026: first instalment, the second instalment for each applicant, and how it compares with the contributory 143 for two parents.",
    h1: "Parent visa 103 cost",
    intro: (h) => `The parent visa 103 cost is ${h.aud(h.V('103').std.base)} at lodgement, plus ${h.aud(h.V('103').second!.perApplicant!)} per applicant before grant.`,
    resume: (h) => `The Parent visa, subclass 103, is the permanent parent visa without the large contribution. Item 1124 of Schedule 1 sets the first instalment at ${h.aud(h.V('103').std.base)} for the main applicant, ${h.aud(h.V('103').std.add18)} for a second parent or other adult and ${h.aud(h.V('103').std.addU18)} for a child under 18, and a second instalment of ${h.aud(h.V('103').second!.perApplicant!)} for every applicant, in the compilation in force on 1 November 2026. One parent therefore pays ${h.aud(h.cost({ code: '103', adults: 0, children: 0 }).total)} and a couple ${h.aud(h.cost({ code: '103', adults: 1, children: 0 }).total)}, against ${h.aud(h.cost({ code: '143', adults: 1, children: 0 }).total)} for a couple on the contributory 143. With a Pacific or Timor-Leste passport, the first instalment is ${h.aud(h.V('103').pacific!.base)}. The Aged Parent visa, subclass 804, applied for in Australia, has the same charges. The calculator above adds both instalments for each parent and each dependent child you enter. The second instalment is requested only when the decision is near, with a deadline of ${h.C.secondInstalmentNoticeDaysInAustralia} days in Australia and ${h.C.secondInstalmentNoticeDaysOther} days elsewhere.`,
    faqs: (h) => [
      { q: "Is the 103 parent visa cheaper than the 143?", a: `Much cheaper: ${h.aud(h.cost({ code: '103', adults: 0, children: 0 }).total)} for one parent against ${h.aud(h.cost({ code: '143', adults: 0, children: 0 }).total)}. The difference is the second instalment, ${h.aud(h.V('103').second!.perApplicant!)} on the 103 and ${h.aud(h.V('143').second!.perApplicant!)} on the 143. In exchange, the 103 is processed far more slowly. The Department publishes the waiting period on its page; we do not reproduce it.` },
      { q: "Does every parent pay the 103 second instalment?", a: `Yes. Item 1124 sets a second instalment of ${h.aud(h.V('103').second!.perApplicant!)} for each applicant, including children on the application. Both instalments are counted per person, so two parents applying together pay two second instalments. The calculator adds them once you enter the second parent as an adult.` },
      { q: "Is the 804 charge the same as the 103?", a: `Yes. Items 1124 and 1124A set the same first and second instalments; the 804 is applied for in Australia by parents of pension age. Families choose between the two on age and place: the 804 asks the parent to be of age pension age and in Australia when applying, while the 103 can be applied for outside Australia.` },
    ],
    body: (h) => `
<h2>Parent visa 103 cost for one or two parents</h2>
${h.scenarios('103')}
<p>For a couple, the contributory route costs ${h.aud(h.cost({ code: '143', adults: 1, children: 0 }).total - h.cost({ code: '103', adults: 1, children: 0 }).total)} more than the 103. Moving from one route to the other means withdrawing one application and lodging another, with its own charge.</p>
<h2>Who can apply for the 103</h2>
${h.conditions('103')}
<p>You need a settled child in Australia, you apply from outside Australia, and you must not have applied for or hold a Sponsored Parent (Temporary) visa. If you have another parent visa application open, it has to be withdrawn when you apply.</p>
${h.feeTable('103')}
<h2>Parent visa 103 processing time</h2>
<p>The Department's tool gives a 50% and a 90% time for the 103 like for any other visa. Enter them below to see the dates they imply from your lodgement day.</p>`,
  },
});
