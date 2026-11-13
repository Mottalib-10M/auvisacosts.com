import { definePage } from '../../lib/guide-types';
export default definePage({
  id: '173-visa-cost', group: 'parents', order: 520,
  tool: { kind: 'mini:cost-173' },
  mini: { kind: 'mini:decision', props: {"title": "When a 173 decision could come"} },
  visa: '173',
  related: ["contributory-parent-visa-143-cost", "parent-visa-103-cost", "parent-visa-costs-compared", "second-instalment"],
  sources: ["regs", "ha_173", "ha_processing"],
  en: {
    slug: '173-visa-cost', nav: "173 visa cost", card: "Temporary contributory parent visa: both instalments, then the 143.",
    title: "173 Visa Cost 2026: Contributory Parent (Temporary) Charges",
    description: "173 visa cost in 2026: first instalment, the second instalment per adult, children, and what the 143 permanent visa costs afterwards, all added up for you.",
    h1: "173 visa cost, and the step to the 143",
    intro: (h) => `The 173 visa cost is ${h.aud(h.V('173').std.base)} at lodgement and ${h.aud(h.V('173').second!.perApplicant!)} per adult before grant.`,
    resume: (h) => `The Contributory Parent (Temporary) visa, subclass 173, is a two-year visa that splits the contributory parent cost into two parts. Item 1221 of Schedule 1 sets a first instalment of ${h.aud(h.V('173').std.base)} for the main applicant, ${h.aud(h.V('173').std.add18)} for a second adult and ${h.aud(h.V('173').std.addU18)} for a child under 18, and a second instalment of ${h.aud(h.V('173').second!.perApplicant!)} for each adult and ${h.aud(h.V('173').second!.perChild!)} for a dependent child, in the compilation in force on 1 November 2026. When the holder later applies for the permanent Contributory Parent visa, subclass 143, the first instalment drops to ${h.aud(h.V('143').variants!.find((x) => x.id === 'from173')!.fee.base)} and the second to {v2:143:from173}. One parent pays ${h.aud(h.cost({ code: '173', adults: 0, children: 0 }).total)} for the 173, then ${h.aud(h.cost({ code: '143', adults: 0, children: 0, variant: 'from173' }).total)} for the 143. With a Pacific or Timor-Leste passport, the first 173 charge is ${h.aud(h.V('173').pacific!.base)}. The calculator above adds the first and second instalments for each parent and each dependent child you enter, so you can see the cost of the temporary step before you decide on the route.`,
    faqs: (h) => [
      { q: "How long does the 173 visa last?", a: `Two years. During that time the holder can apply for the permanent 143 at the lower rate set for 173 holders. If the 173 expires before the 143 application is made, the lower rate for 173 holders may no longer apply and the 143 would cost the full first and second instalments.` },
      { q: "What does the 143 cost after a 173?", a: `A first instalment of ${h.aud(h.V('143').variants!.find((x) => x.id === 'from173')!.fee.base)} and a second instalment of {v2:143:from173} per adult, under item 1130 of Schedule 1. Add it to what you already paid for the 173 to see the full cost of the route; the calculator on the parent visa comparison page adds both steps for one or two parents.` },
      { q: "Is the 173 second instalment refundable?", a: `It is paid before grant. Once the visa is granted, the charge has been used; regulation 2.12H lists the rare refund cases. Plan the ${h.aud(h.V('173').second!.perApplicant!)} per adult in advance: the visa cannot be granted until the payment arrives, within the deadline set by the payment request.` },
    ],
    body: (h) => `
<h2>173 visa cost for one or two parents</h2>
${h.scenarios('173')}
<p>Over both visas, a couple pays roughly the same as for a direct 143, with two payment dates instead of one. The 173 suits families who can raise the second instalment in two parts or who want the parents in Australia sooner on a temporary basis.</p>
<h2>Who can apply for the 173</h2>
${h.conditions('173')}
<p>The conditions follow the 143: a settled child in Australia and an application from outside Australia. The 143 application should be made while the 173 is still in effect, or within the period the item allows, to keep the lower charge.</p>
${h.feeTable('173')}
<h2>173 visa processing time</h2>
<p>Copy the official 50% and 90% times for the 173 into the calculator to see the dates they imply.</p>`,
  },
});
