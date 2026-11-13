import { definePage } from '../../lib/guide-types';
export default definePage({
  id: '190-visa-cost', group: 'skilled', order: 120,
  tool: { kind: 'mini:cost-190' },
  mini: { kind: 'mini:decision', props: {"title": "When a 190 decision could come"} },
  visa: '190',
  related: ["189-visa-cost", "491-visa-cost", "skilled-visa-costs-compared", "second-instalment"],
  sources: ["regs", "ha_190", "ha_processing"],
  en: {
    slug: '190-visa-cost', nav: "190 visa cost", card: "Skilled Nominated: charges with a state nomination, family members and English.",
    title: "190 Visa Cost 2026: Charges After a State Nomination",
    description: "190 visa cost in 2026 after a state or territory nomination: main applicant, partner, children, second instalment and Pacific rate, from Schedule 1 in force.",
    h1: "190 visa cost after a state nomination",
    intro: (h) => `The 190 visa cost is ${h.aud(h.V('190').std.base)} for the main applicant, plus ${h.aud(h.V('190').std.add18)} for a partner and ${h.aud(h.V('190').std.addU18)} for each child.`,
    resume: (h) => `The Skilled Nominated visa is a permanent, points-tested visa granted to applicants nominated by a state or territory government agency. Item 1138 of Schedule 1 sets its charge: ${h.aud(h.V('190').std.base)} for the main applicant, ${h.aud(h.V('190').std.add18)} for each family member aged 18 or over, and ${h.aud(h.V('190').std.addU18)} for each one under 18, in the compilation in force on 1 November 2026. That is five dollars more for the main applicant than the ${h.aud(h.V('189').std.base)} of the 189. Adults who cannot show functional English pay a second instalment of ${h.aud(h.V('190').second!.adultNoEnglish!)} each before grant. The state or territory does not collect the visa charge: it is paid to the Department with the application. A Pacific or Timor-Leste passport lowers the base charge to ${h.aud(h.V('190').pacific!.base)}. The calculator above adds every person you enter, and the advanced fields hold the Pacific rate, the paper surcharge and the second instalment, so the total matches the payment screen of ImmiAccount before you lodge.`,
    faqs: (h) => [
      { q: "Does the state pay any of the 190 visa charge?", a: `No. The visa application charge of ${h.aud(h.V('190').std.base)} and the family charges are paid to the Department by the applicant, in one payment when the application is lodged. The state or territory runs its own nomination process, and any fee it sets for that step is separate from the visa charge. The calculator above counts the Department's charge only.` },
      { q: "Is the 190 cheaper than the 189?", a: `No: the base charge is ${h.aud(h.V('190').std.base)} against ${h.aud(h.V('189').std.base)}, and the family charges are the same within five dollars. The difference between the two visas is the nomination and the commitment to the state, not the price. Choose between them on eligibility and on the invitation you receive; the calculator gives both totals for the same family in a few seconds.` },
      { q: "Can I add my partner after lodging the 190?", a: `A family member can be added before a decision is made, by a combined application, and pays the additional applicant charge. After the grant, the partner would need a visa of their own, at a much higher price. Before you lodge, list every family member you want on the visa, so that the total above matches what ImmiAccount will ask for.` },
    ],
    body: (h) => `
<h2>190 visa cost for each household size</h2>
${h.scenarios('190')}
<p>The nomination does not change what you pay the Department: a couple with two children pays ${h.aud(h.cost({ code: '190', adults: 1, children: 2 }).total)} whether the nomination came from Victoria, Western Australia or Tasmania. What changes with the state is the list of occupations and the commitment to live there, set out on each state program page.</p>
<h2>Who can apply for the 190</h2>
${h.conditions('190')}
<p>The invitation follows the nomination; once it arrives, you have a fixed period to lodge and pay. If your circumstances changed between the nomination and the application, such as a new partner or a birth, add them to the application at lodgement so that each pays the additional applicant charge rather than a separate visa later.</p>
${h.feeTable('190')}
<h2>190 visa processing time</h2>
<p>Processing times for nominated applications move with each state program year and with the Department's planning levels. Read the 50% and 90% times for subclass 190 on the official tool, then enter them below to see the dates that follow from your lodgement.</p>`,
  },
});
