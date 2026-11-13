import { definePage } from '../../lib/guide-types';
export default definePage({
  id: '191-visa-cost', group: 'skilled', order: 140,
  tool: { kind: 'mini:cost-191' },
  mini: { kind: 'mini:decision', props: {"title": "When a 191 decision could come"} },
  visa: '191',
  related: ["491-visa-cost", "494-visa-cost", "skilled-visa-costs-compared", "visa-cost-for-a-family"],
  sources: ["regs", "ha_191", "ha_processing"],
  en: {
    slug: '191-visa-cost', nav: "191 visa cost", card: "Permanent residence after a 491 or 494: the low charge and who pays it.",
    title: "191 Visa Cost 2026: Permanent Residence After a 491 or 494",
    description: "191 visa cost in 2026 for 491 and 494 holders moving to permanent residence: main applicant, partner and children, the Pacific rate and the Hong Kong stream.",
    h1: "191 visa cost for 491 and 494 holders",
    intro: (h) => `The 191 visa cost is ${h.aud(h.V('191').std.base)} for the main applicant, with ${h.aud(h.V('191').std.add18)} for a partner and ${h.aud(h.V('191').std.addU18)} for each child.`,
    resume: (h) => `The Permanent Residence (Skilled Regional) visa is the second step of the regional skilled route. It is open to people who held a Skilled Work Regional (491) or Skilled Employer Sponsored Regional (494) visa and met its conditions. Its charge is low because the first visa already paid for most of the assessment: item 1139 sets ${h.aud(h.V('191').std.base)} for the main applicant in the Regional Provisional Visas stream, ${h.aud(h.V('191').std.add18)} for each adult family member and ${h.aud(h.V('191').std.addU18)} for each child, in the compilation in force on 1 November 2026. There is no second instalment in this stream. Holders of a Hong Kong or British National (Overseas) passport who apply in the Hong Kong (Regional) stream pay a much larger charge of the size of a 189, and a second instalment for adults without functional English. With a Pacific or Timor-Leste passport, the base charge is ${h.aud(h.V('191').pacific!.base)}.`,
    faqs: (h) => [
      { q: "Is there a second instalment on the 191?", a: `Not in the Regional Provisional Visas stream. Only the Hong Kong (Regional) stream has one, for adults without functional English. In the main stream, the ${h.aud(h.V('191').std.base)} charge and the family charges paid at lodgement are the whole visa application charge, with nothing more requested before the decision.` },
      { q: "Do my children pay the 191 charge if they are already in Australia?", a: `Yes, each child who joins the application pays the under-18 charge of ${h.aud(h.V('191').std.addU18)}, wherever they are when the application is made. A child who is 18 or over on the day of application pays the adult rate of ${h.aud(h.V('191').std.add18)} instead. The calculator applies the right rate once you enter adults and children separately.` },
      { q: "Can I apply for the 191 from a 494 visa?", a: `Yes. The Regional Provisional Visas stream is open to holders of a 491 or a 494 visa who meet the conditions of the stream. The charge is the same whichever provisional visa you held: ${h.aud(h.V('191').std.base)} for the main applicant, with the same additional applicant charges for the family.` },
    ],
    body: (h) => `
<h2>191 visa cost by household</h2>
${h.scenarios('191')}
<p>Compared with the ${h.av('491', '491 charge')}, the 191 costs about a tenth. The family members who were on the 491 are usually the ones who join the 191, and a child born since then joins as a family member under 18 at ${h.aud(h.V('191').std.addU18)}.</p>
<h2>Who can apply for the 191</h2>
${h.conditions('191')}
<p>The main condition is time and income in regional Australia while holding the provisional visa. The charge is due when you lodge, not when the conditions are met, so wait until your evidence is complete before paying.</p>
${h.feeTable('191')}
<h2>191 visa processing time</h2>
<p>Read the 191 processing times for the Regional Provisional Visas stream on the official tool. Many applicants remain on their provisional visa while waiting, so the decision date matters for travel and work plans more than for status.</p>`,
  },
});
