import { definePage } from '../../lib/guide-types';
export default definePage({
  id: '408-visa-cost', group: 'work', order: 260,
  tool: { kind: 'mini:cost-408' },
  mini: { kind: 'mini:decision', props: {"title": "When a 408 decision could come"} },
  visa: '408',
  related: ["400-visa-cost", "482-visa-cost", "visa-cost-for-a-family", "visa-processing-times"],
  sources: ["regs", "ha_408", "ha_processing"],
  en: {
    slug: '408-visa-cost', nav: "408 visa cost", card: "Temporary Activity visa: standard charge, adults at full price, children.",
    title: "408 Visa Cost 2026: Temporary Activity Visa for a Family",
    description: "408 visa cost in 2026 for the Temporary Activity visa: standard charge, adult family members at the same price, children, and the lower or nil rates for some.",
    h1: "408 visa cost: Temporary Activity",
    intro: (h) => `The 408 visa cost is ${h.aud(h.V('408').std.base)} for the main applicant and the same ${h.aud(h.V('408').std.add18)} for each adult who joins.`,
    resume: (h) => `The Temporary Activity visa, subclass 408, covers short-term activities in several streams. Item 1237 of Schedule 1 sets a standard charge of ${h.aud(h.V('408').std.base)} for the main applicant, ${h.aud(h.V('408').std.add18)} for each family member aged 18 or over and ${h.aud(h.V('408').std.addU18)} for each child under 18, in the compilation in force on 1 November 2026. Several classes of applicants named by the Minister pay one of three lower tiers set in the same item, and some pay nothing. There is no second instalment. A couple with two children at the standard rate pays ${h.aud(h.cost({ code: '408', adults: 1, children: 2 }).total)}. Some streams require a sponsor. The calculator above uses the standard rate, adds an adult family member at the full charge and a child at the lower one, and shows the total paid at lodgement, since nothing is requested later.`,
    faqs: (h) => [
      { q: "Do adult family members pay the full 408 charge?", a: `Yes. Item 1237 sets the additional applicant charge for a person aged 18 or over at ${h.aud(h.V('408').std.add18)}, the same as the main charge. A child under 18 pays a lower ${h.aud(h.V('408').std.addU18)}. That makes the 408 one of the visas where a family costs close to three times the main charge.` },
      { q: "Are some 408 applicants charged less?", a: `Yes. The item has lower tiers for classes named by the Minister, and a nil charge for some applicants. The standard charge is ${h.aud(h.V('408').std.base)}. The classes and their lower charges are set by legislative instrument, which we do not reproduce. The calculator uses the standard rate.` },
      { q: "Is there a second instalment on the 408?", a: `No. The second instalment of the Temporary Activity visa is nil. The whole charge is paid at lodgement, so the total of the calculator is what you pay in ImmiAccount when you apply. Family members who join the application pay their own additional applicant charges at the same time.` },
    ],
    body: (h) => `
<h2>408 visa cost for a family</h2>
${h.scenarios('408')}
<p>As with the 482, an adult family member pays the full main charge. If your activity is in a stream with a reduced rate, the Department's Visa Pricing Estimator shows it before you pay; this page uses the standard rate.</p>
<h2>Who can apply for the 408</h2>
${h.conditions('408')}
<p>You can apply in or outside Australia, with the sponsor or supporter your stream requires. An application in Australia must be made while you hold a substantive visa, or within 28 days after it ends.</p>
${h.feeTable('408')}
<h2>408 visa processing time</h2>
<p>The official tool lists the 408 by stream. Enter the times for your stream with the day you applied to see the dates they imply.</p>`,
  },
});
