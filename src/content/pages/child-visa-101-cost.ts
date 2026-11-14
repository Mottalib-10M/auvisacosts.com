import { definePage } from '../../lib/guide-types';
import { pair } from '../../lib/times';
const t101 = pair('101');
export default definePage({
  id: 'child-visa-101-cost', group: 'family', order: 340,
  tool: { kind: 'mini:cost-101' },
  mini: { kind: 'mini:times-101', props: { title: 'When a 101 decision could come: the official times' } },
  visa: '101',
  related: ["partner-visa-309-cost", "partner-visa-820-cost", "visa-cost-for-a-family", "parent-visa-costs-compared"],
  sources: ["regs", "ha_101", "ha_processing"],
  en: {
    slug: 'child-visa-101-cost', nav: "Child visa 101 cost", card: "Child visas 101 and 802: the charge, siblings, orphan relative rate.",
    title: "Child Visa 101 Cost 2026: Subclasses 101 and 802 Compared",
    description: "Child visa 101 cost in 2026 and the same charge for the 802 in Australia: first child, brothers and sisters joining, orphan relative and Pacific rates.",
    h1: "Child visa 101 cost, and the 802",
    intro: (h) => `The child visa 101 cost is ${h.aud(h.V('101').std.base)} for the first child, then ${h.aud(h.V('101').std.addU18)} for each sibling under 18.`,
    resume: (h) => `A child of an Australian citizen, permanent resident or eligible New Zealand citizen can apply for a permanent Child visa: subclass 101 from outside Australia, subclass 802 from inside. Items 1108 and 1108A of Schedule 1 set the same charge for both: ${h.aud(h.V('101').std.base)} for the main applicant, ${h.aud(h.V('101').std.add18)} for each other applicant aged 18 or over, and ${h.aud(h.V('101').std.addU18)} for each child under 18 who joins the application, in the compilation in force on 1 November 2026. Two siblings applying together therefore pay ${h.aud(h.cost({ code: '101', adults: 0, children: 1 }).total)}, not twice the base charge. A child who appears to be an orphan relative pays the lower rate of ${h.aud(h.V('101').variants!.find((x) => x.id === 'orphan')!.fee.base)}. There is no second instalment. With a Pacific or Timor-Leste passport, the charge is ${h.aud(h.V('101').pacific!.base)}. The parent who sponsors pays no fee to the Department.`,
    faqs: (h) => [
      { q: "Is the 802 cheaper than the 101?", a: `No. Items 1108 and 1108A set the same charge, ${h.aud(h.V('101').std.base)} for the main applicant, in and outside Australia. The 802 is the onshore application, made while the child is in Australia; the 101 is made while the child is outside. Brothers and sisters joining either one pay ${h.aud(h.V('101').std.addU18)} each.` },
      { q: "Do siblings each pay the full child visa charge?", a: `No. When they join one application, the first child pays ${h.aud(h.V('101').std.base)} and each sibling under 18 pays ${h.aud(h.V('101').std.addU18)}. A dependent child aged 18 or over pays the adult rate of ${h.aud(h.V('101').std.add18)}. Separate applications for each child would each pay the full main charge, so a combined one usually costs much less.` },
      { q: "Is there a lower child visa charge for orphans?", a: `Yes. A child who appears to be an orphan relative pays ${h.aud(h.V('101').variants!.find((x) => x.id === 'orphan')!.fee.base)} as the main applicant. Brothers and sisters joining the orphan relative application pay lower additional applicant charges too. The calculator offers the orphan relative rate in its advanced fields. The child's status is assessed with the application.` },
    ],
    body: (h) => `
<h2>Child visa 101 cost for one child and siblings</h2>
${h.scenarios('101')}
<p>Grouping brothers and sisters in one application is the main saving. An adult child aged 18 to 24 who studies full time and depends on the parent can be the main applicant, with younger siblings joining at the under-18 rate.</p>
<h2>Who can apply for the 101 or 802</h2>
${h.conditions('101')}
<p>The child must be single and dependent. The 101 is applied for outside Australia and the 802 inside; the charge does not change with the place.</p>
${h.feeTable('101')}
<h2>Child visa processing time</h2>
<p>The Department of Home Affairs published these times for the 101: half of the applications decided last month took ${t101.p50} or less, and 9 in 10 took ${t101.p90} or less. The tool above is already filled with them: change the day you applied to see your own dates. The Department lists the 101 and the 802 separately; the tool shows the 101.</p>`,
  },
});
