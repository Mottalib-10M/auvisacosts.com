import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'visa-cost-for-a-family', group: 'guides', order: 640,
  tool: { kind: 'mini:cost', props: {"a": 1, "c": 2} },
  mini: { kind: 'mini:family' },
  related: ["australian-visa-fees-2026", "482-visa-cost", "child-visa-101-cost", "second-instalment"],
  sources: ["regs", "ha_estimator"],
  en: {
    slug: 'visa-cost-for-a-family', nav: "Visa cost for a family", card: "What a partner and each child add to the main charge, visa by visa.",
    title: "Visa Cost for a Family in Australia: Partner and Children",
    description: "Visa cost for a family in Australia in 2026: what a partner and each child add to the main charge, which visas charge every person in full, and grouping.",
    h1: "Visa cost for a family, member by member",
    intro: (h) => `The visa cost for a family is the main charge plus an adult charge for a partner and a child charge for each child: ${h.aud(h.cost({ code: '189', adults: 1, children: 2 }).total)} for a couple with two children on a 189.`,
    resume: (h) => `Most Australian visas let family members join the main applicant's application. Each one then pays an additional applicant charge set in the same item of Schedule 1, at a rate that depends on age on the day of lodgement: one rate for a person aged 18 or over, a lower one for a child under 18. On most permanent visas the adult rate is half the main charge and the child rate about a quarter, so a family of four pays a little more than twice the main charge. Two groups break that rule. On the 482 and the 408, an adult family member pays the full main charge. On visitor, working holiday and resident return visas, there is no family application at all, and every person pays the base charge on their own application. Partner and child visas are a special case: the partner is the sponsor, not an applicant, so only the applicant and any children pay.`,
    faqs: (h) => [
      { q: "Do children pay the same visa charge as adults?", a: `Not on visas with a family application: a child under 18 pays a lower additional applicant charge, ${h.aud(h.V('189').std.addU18)} on a 189. On visitor and working holiday visas, each child pays the full base charge. Partner visas charge only the applicant and any children, never the Australian sponsor.` },
      { q: "Is my partner charged on a partner visa?", a: `No. On a partner visa the Australian partner is the sponsor and pays nothing to the Department; the applicant and any children pay. A child joining the application pays the under-18 charge of the partner visa, ${h.aud(h.V('820').std.addU18)} onshore. The sponsor's eligibility is assessed with the application.` },
      { q: "Can I add a newborn to my visa application?", a: `A family member can be added before a decision by a combined application, paying the child rate. After grant, the child would need a visa of their own. A newborn added before the decision pays the child rate of the same item.` },
    ],
    body: (h) => `
<h2>Visa cost for a family of four, by visa</h2>
${h.compareTable(['189', '190', '491', '186', '482', '500', '820', '600'], 1, 2, 'Couple with two children under 18, standard rates, no second instalment. Visitor visas: four separate applications.')}
<p>The order of the table is not the order of preference: the right visa is the one you are eligible for. What the table shows is how much the family adds. A couple with two children pays ${h.aud(h.cost({ code: '482', adults: 1, children: 2 }).total)} on the 482, where the partner pays the full charge, against ${h.aud(h.cost({ code: '189', adults: 1, children: 2 }).total)} on the 189.</p>
<h2>Grouping family members</h2>
<ul><li>Add every family member at lodgement when the visa allows it: joining later usually means a separate application at a full charge.</li><li>The age that counts is the age on the day of lodgement: a child of 17 pays the child rate even if the visa is granted after the eighteenth birthday.</li><li>Second instalments are per person: count each adult without functional English separately.</li></ul>
<h2>What is not in the visa charge</h2>
<p>Health examinations, police certificates, translations, skills assessments and English tests are paid to other providers for each family member. They are outside the Regulations and outside these totals.</p>`,
  },
});
