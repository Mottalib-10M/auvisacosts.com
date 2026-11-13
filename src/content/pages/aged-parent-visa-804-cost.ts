import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'aged-parent-visa-804-cost', group: 'parents', order: 540,
  tool: { kind: 'mini:cost-804' },
  mini: { kind: 'mini:decision', props: {"title": "When a 804 decision could come"} },
  visa: '804',
  related: ["864-visa-cost", "parent-visa-103-cost", "parent-visa-costs-compared", "second-instalment"],
  sources: ["regs", "ha_804", "ha_processing"],
  en: {
    slug: 'aged-parent-visa-804-cost', nav: "Aged Parent visa 804 cost", card: "Aged parent visa in Australia: the same charges as the 103.",
    title: "Aged Parent Visa 804 Cost 2026: Charges for Parents Onshore",
    description: "Aged Parent visa 804 cost in 2026 for parents of pension age applying in Australia: first instalment, second instalment per applicant, the 864 compared.",
    h1: "Aged Parent visa 804 cost, in Australia",
    intro: (h) => `The Aged Parent visa 804 cost is ${h.aud(h.V('804').std.base)} at lodgement, plus ${h.aud(h.V('804').second!.perApplicant!)} per applicant before grant.`,
    resume: (h) => `The Aged Parent visa, subclass 804, is the onshore twin of the 103, for parents old enough to receive the Australian age pension. Item 1124A of Schedule 1 sets its charge at ${h.aud(h.V('804').std.base)} for the main applicant, ${h.aud(h.V('804').std.add18)} for each other adult and ${h.aud(h.V('804').std.addU18)} for a child under 18, with a second instalment of ${h.aud(h.V('804').second!.perApplicant!)} for each applicant, in the compilation in force on 1 November 2026. A couple therefore pays ${h.aud(h.cost({ code: '804', adults: 1, children: 0 }).total)}. Its contributory counterpart, the Contributory Aged Parent visa, subclass 864, costs ${h.aud(h.V('864').std.base)} at lodgement and ${h.aud(h.V('864').second!.perApplicant!)} per adult before grant. With a Pacific or Timor-Leste passport, the 804 charge is ${h.aud(h.V('804').pacific!.base)}. The child who sponsors pays nothing to the Department, but must meet the sponsorship conditions on the Department's page.`,
    faqs: (h) => [
      { q: "Is the 804 the same price as the 103?", a: `Yes, items 1124 and 1124A set the same amounts: ${h.aud(h.V('804').std.base)} first instalment and ${h.aud(h.V('804').second!.perApplicant!)} second instalment per applicant. So for two parents applying together, the totals are the same too. The difference between the two visas lies in where the application is made and in the age requirement.` },
      { q: "What is the contributory version of the 804?", a: `The Contributory Aged Parent visa, subclass 864, with a first instalment of ${h.aud(h.V('864').std.base)} and a second instalment of ${h.aud(h.V('864').second!.perApplicant!)} for each adult. Two parents applying together pay two second instalments, one each. The 864 is the onshore counterpart of the 143, and it is priced in the same way.` },
      { q: "Do I pay the 804 second instalment straight away?", a: `No. It is requested before grant, by a written notice that sets a deadline of 28 days in Australia. Outside Australia, the period to pay is ${h.C.secondInstalmentNoticeDaysOther} days. The visa is not granted before the payment, so keep the money available while the application waits.` },
    ],
    body: (h) => `
<h2>Aged Parent visa 804 cost for one or two parents</h2>
${h.scenarios('804')}
<p>Parents who apply for an 804 are in Australia when they lodge. The age requirement is that of the Australian age pension.</p>
<h2>Who can apply for the 804</h2>
${h.conditions('804')}
<p>You need a settled child in Australia and must be of age pension age. If you hold or have applied for a Sponsored Parent (Temporary) visa you cannot apply. An earlier parent visa application must be withdrawn.</p>
${h.feeTable('804')}
<h2>Aged Parent visa processing time</h2>
<p>Copy the 50% and 90% times for subclass 804 from the official tool, then enter them below to see the dates they give from your lodgement day.</p>`,
  },
});
