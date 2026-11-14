import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'partner-visa-820-cost', group: 'family', order: 310,
  tool: { kind: 'mini:cost-820' },
  mini: { kind: 'mini:decision', props: {"title": "When a 820 decision could come"} },
  visa: '820',
  related: ["partner-visa-309-cost", "prospective-marriage-visa-300-cost", "visa-cost-for-a-family", "pacific-visa-rates"],
  sources: ["regs", "ha_820", "ha_processing"],
  en: {
    slug: 'partner-visa-820-cost', nav: "Partner visa 820 cost", card: "Onshore partner visa: one charge for the 820 and the 801, children, the lower rate after a 300.",
    title: "820 Visa: Partner Visa 820 Cost 2026, Onshore 820 and 801",
    description: "Partner visa 820 cost in 2026: one charge for the temporary 820 and the permanent 801, dependent children, the lower rate after a 300 visa and the Pacific rate.",
    h1: "820 visa: partner visa 820 cost, onshore",
    intro: (h) => `The partner visa 820 cost is ${h.aud(h.V('820').std.base)} for the applicant, paid once for both the 820 and the 801.`,
    resume: (h) => `The onshore partner visa is applied for in Australia by the spouse or de facto partner of an Australian citizen, permanent resident or eligible New Zealand citizen. It is one application for two visas: the temporary Partner (Temporary) visa, subclass 820, and the permanent Partner (Residence) visa, subclass 801. The Partner (Temporary) class has no charge of its own; the whole amount is set by item 1124B, the Partner (Residence) class. In the compilation in force on 1 November 2026, the applicant pays ${h.aud(h.V('820').std.base)}, each other family member aged 18 or over ${h.aud(h.V('820').std.add18)}, and each dependent child under 18 ${h.aud(h.V('820').std.addU18)}. There is no second instalment. A person who entered on a Prospective Marriage visa and married the sponsor pays a much lower charge, ${h.aud(h.V('820').variants!.find((x) => x.id === 'pmv')!.fee.base)}. With a Pacific or Timor-Leste passport, the standard charge is ${h.aud(h.V('820').pacific!.base)}. The sponsor pays nothing to the Department.`,
    faqs: (h) => [
      { q: "Do I pay again for the 801 permanent partner visa?", a: `No. The ${h.aud(h.V('820').std.base)} charge covers both stages; the temporary 820 class has a nil charge and the permanent stage is decided on the same application. That is why the partner visa is priced high: one payment covers the temporary visa, the wait of about two years and the decision on the permanent visa.` },
      { q: "Does my Australian partner pay a sponsorship fee?", a: `No. The sponsor pays nothing to the Department for a partner visa; the whole charge is paid by the applicant. The sponsor's own sponsorship is assessed with the application, at no charge. Dependent children of the applicant who join the application pay their own additional applicant charge.` },
      { q: "Why is the partner visa cheaper after a Prospective Marriage visa?", a: `Item 1124B sets ${h.aud(h.V('820').variants!.find((x) => x.id === 'pmv')!.fee.base)} for a holder of a Prospective Marriage visa who has married the sponsor, because the relationship was already assessed for the 300 visa. The lower charge requires the marriage to the sponsor to have taken place. A Prospective Marriage visa holder who applies before marrying, or for a different sponsor, pays the standard rate.` },
    ],
    body: (h) => `
<h2>Partner visa 820 cost with children</h2>
${h.scenarios('820')}
<p>Most couples pay the single charge: there is no partner fee on top, since the partner is the sponsor, not an applicant. Children from a previous relationship who live with the applicant join as dependants. The total is the same as the offshore 309 for the same family, so the choice between the two is about where you are, not the price.</p>
<h2>Who can apply for the 820</h2>
${h.conditions('820')}
<p>Apply in Australia, not in immigration clearance, while holding a visa that does not bar a further application. The permanent 801 stage is assessed later on the same application, without a second charge.</p>
${h.feeTable('820')}
<h2>Partner visa 820 processing time</h2>
<p>The Department publishes separate times for the 820 stage and the 801 stage. Copy the 50% and 90% times for the 820 from the official tool to see the dates that follow from your lodgement day.</p>`,
  },
});
