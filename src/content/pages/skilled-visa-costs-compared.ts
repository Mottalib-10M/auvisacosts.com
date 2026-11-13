import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'skilled-visa-costs-compared', group: 'guides', order: 650,
  tool: { kind: 'mini:compare', props: {"a": 1, "c": 1} },
  related: ["189-visa-cost", "190-visa-cost", "491-visa-cost", "186-visa-cost"],
  sources: ["regs", "ha_189", "ha_190", "ha_491"],
  en: {
    slug: 'skilled-visa-costs-compared', nav: "Skilled visas compared", card: "The 189, 190, 491, 858, 186 and 494 side by side for the same family.",
    title: "Skilled Visa Costs Compared: 189, 190, 491, 186 and 494",
    description: "Skilled visa costs compared for 2026: 189, 190, 491, 858, 186 and 494 side by side for a single applicant and a family, second instalments, the 191 step.",
    h1: "Skilled visa costs compared",
    intro: (h) => `Skilled visa costs are close for the main applicant, ${h.aud(h.V('189').std.base)} to ${h.aud(h.V('858').std.base)}; the family and the English instalment make the difference.`,
    resume: (h) => `The permanent and provisional skilled visas have charges within a hundred dollars of each other for the main applicant: ${h.aud(h.V('189').std.base)} on the 189, ${h.aud(h.V('190').std.base)} on the 190, 491, 186 and 494, and ${h.aud(h.V('858').std.base)} on the 858. The differences appear elsewhere. The second instalment for an adult without functional English is ${h.aud(h.V('189').second!.adultNoEnglish!)} on the 189 and 190 but ${h.aud(h.V('186').second!.primaryNoEnglish!)} for a main applicant on the 186 and 494. The regional 491 and 494 are provisional, and the step to permanent residence through the 191 adds ${h.aud(h.V('191').std.base)} for the main applicant. For a couple with one child, all with functional English, the totals stay close; with a partner who lacks functional English, the employer visas cost a few dollars more than the points-tested ones. Choose the visa you are eligible for and invited to; the price rarely decides between them.`,
    faqs: (h) => [
      { q: "Which skilled visa is the cheapest?", a: `For the main applicant, the 189 at ${h.aud(h.V('189').std.base)}; the 190, 491, 186 and 494 cost ${h.aud(h.V('190').std.base)}. The 191, the second step of the regional route, costs ${h.aud(h.V('191').std.base)}. The differences between them are in the criteria, not in the price. Children pay about a quarter of the main charge on each.` },
      { q: "Does the 491 cost more than the 190 in the end?", a: `Yes, by the 191 charge: the 491 and the 190 cost the same up front, and the 491 holder later pays ${h.aud(h.V('191').std.base)} for the main applicant to become permanent. The 191 asks for at least three years in a designated regional area. Families add the 191 family charges too.` },
      { q: "Which skilled visa has the highest second instalment?", a: `The 186 and 494: ${h.aud(h.V('186').second!.primaryNoEnglish!)} for a main applicant without functional English. On the 189 and 190 it is ${h.aud(h.V('189').second!.adultNoEnglish!)}. Other adults pay ${h.aud(h.V('186').second!.adultNoEnglish!)} on the 186 and 494. Children never pay a second instalment for English. A test result showing functional English for every adult avoids the payment.` },
    ],
    body: (h) => `
<h2>Skilled visa costs compared for a couple with one child</h2>
${h.compareTable(['189', '190', '491', '858', '186', '494'], 1, 1, 'Couple with one child under 18, standard rates, everyone with functional English.')}
<p>The calculator above compares any two visas for the family you enter. For the regional route, add the ${h.av('191', '191 charge')} to the 491 or 494 total. To check whether you reach the pass mark of the points test before paying anything, count your points on <a href="https://immigrationpoints.com">immigrationpoints.com</a>, a separate calculator from the same publisher.</p>
<h2>With a partner without functional English</h2>
${h.compareTable(['189', '190', '491', '186', '494'], 1, 0, 'Couple, standard rates. Add the second instalment for the partner shown on each visa page.')}
<p>The table above leaves out the second instalment; on the 189 and 190 it is ${h.aud(h.V('189').second!.adultNoEnglish!)}, on the 491 and 858 ${h.aud(h.V('491').second!.adultNoEnglish!)}, on the 186 and 494 ${h.aud(h.V('186').second!.adultNoEnglish!)} for an adult who is not the main applicant.</p>
<h2>Charges that are not the applicant's</h2>
<p>On the 186 and 494, the employer pays for the nomination; on the 190 and 491, the state or territory runs its own nomination process. Those steps are separate from the visa application charge and are not counted here.</p>`,
  },
});
