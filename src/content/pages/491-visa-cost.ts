import { definePage } from '../../lib/guide-types';
export default definePage({
  id: '491-visa-cost', group: 'skilled', order: 130,
  tool: { kind: 'mini:cost-491' },
  mini: { kind: 'mini:decision', props: {"title": "When a 491 decision could come"} },
  visa: '491',
  related: ["191-visa-cost", "190-visa-cost", "skilled-visa-costs-compared", "494-visa-cost"],
  sources: ["regs", "ha_491", "ha_processing"],
  en: {
    slug: '491-visa-cost', nav: "491 visa cost", card: "Skilled Work Regional: charges for the regional provisional visa and the later 191.",
    title: "491 Visa Cost 2026: Regional Visa Charges for a Family",
    description: "491 visa cost in 2026: the regional provisional visa for you, a partner and children, second instalment without functional English, and the later 191 charge.",
    h1: "491 visa cost, then the 191",
    intro: (h) => `The 491 visa cost is ${h.aud(h.V('491').std.base)} for the main applicant; the later permanent 191 costs only ${h.aud(h.V('191').std.base)}.`,
    resume: (h) => `The Skilled Work Regional visa is a provisional visa for people nominated by a state or territory, or sponsored by an eligible relative, to live and work in a designated regional area. Item 1241 of Schedule 1 charges ${h.aud(h.V('491').std.base)} for the main applicant, ${h.aud(h.V('491').std.add18)} for each family member aged 18 or over and ${h.aud(h.V('491').std.addU18)} for each child, the same scale as the 190. The second instalment for an adult without functional English is ${h.aud(h.V('491').second!.adultNoEnglish!)}, five dollars more than on the 189 and 190. Permanent residence comes later through the 191 visa, whose charge is far lower: ${h.aud(h.V('191').std.base)} for the main applicant under item 1139. Counting both steps, a couple with two children pays about ${h.aud(h.cost({ code: '491', adults: 1, children: 2 }).total)} for the 491 and ${h.aud(h.cost({ code: '191', adults: 1, children: 2 }).total)} for the 191. A Pacific or Timor-Leste passport lowers the first charge to ${h.aud(h.V('491').pacific!.base)}.`,
    faqs: (h) => [
      { q: "Do I pay again for the 191 after the 491?", a: `Yes, the 191 is a new application with its own charge, ${h.aud(h.V('191').std.base)} for the main applicant and ${h.aud(h.V('191').std.add18)} for each adult in the family. It is much lower than the 491 charge. So a family on the regional route pays two charges in total: the provisional 491 first, then the permanent 191 after at least three years of living and working in a designated regional area.` },
      { q: "Is the 491 charge different when a relative sponsors me?", a: `No. Item 1241 sets one charge for the visa whether the applicant is nominated by a state or territory or sponsored by an eligible relative. The difference between the two routes lies in the criteria and in who nominates you, not in the charge. Family members pay the same additional applicant charges in both cases.` },
      { q: "Does the 491 second instalment apply to the main applicant?", a: `It applies to any applicant aged 18 or over who is assessed as not having functional English. A points-tested main applicant must already show competent English, so in practice it concerns family members. If your partner has no test result showing functional English, the calculator adds the ${h.aud(h.V('491').second!.adultNoEnglish!)} second instalment for them, payable before grant.` },
    ],
    body: (h) => `
<h2>491 visa cost by household</h2>
${h.scenarios('491')}
<p>The regional route costs the same up front as the 190 but adds a second, much smaller application later. Families who weigh the 491 against waiting for a 190 invitation should compare the total of both steps with the time the 491 may save; the ${h.a('skilled-visa-costs-compared', 'comparison page')} puts the three skilled visas side by side.</p>
<h2>Who can apply for the 491</h2>
${h.conditions('491')}
<p>Relatives who sponsor a 491 applicant must live in a designated regional area. Whether the nomination comes from a state or the sponsorship from a relative, the Department charges the same amount; only the invitation and the conditions of the visa change.</p>
${h.feeTable('491')}
<h2>491 visa processing time</h2>
<p>Read the current 50% and 90% times for subclass 491 on the official tool and enter them below to see the dates they imply for your application. The times describe last month's decisions and change from one month to the next.</p>`,
  },
});
