import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'resident-return-visa-155-cost', group: 'temporary', order: 460,
  tool: { kind: 'mini:cost-155' },
  mini: { kind: 'mini:decision', props: {"title": "When a 155 decision could come"} },
  visa: '155',
  related: ["bridging-visa-b-cost", "visitor-visa-600-cost", "pacific-visa-rates", "visa-processing-times"],
  sources: ["regs", "ha_155", "ha_processing"],
  en: {
    slug: 'resident-return-visa-155-cost', nav: "Resident return visa 155 cost", card: "Resident Return visa: the charge per person, Pacific rate.",
    title: "Resident Return Visa 155 Cost 2026: Charge per Person",
    description: "Resident Return visa 155 cost in 2026 for permanent residents and former citizens who keep travelling: the charge per person and the lower Pacific rate.",
    h1: "Resident return visa 155 cost",
    intro: (h) => `The resident return visa 155 cost is ${h.aud(h.V('155').std.base)} per person; with a Pacific or Timor-Leste passport it is ${h.aud(h.V('155').pacific!.base)}.`,
    resume: (h) => `The Resident Return visa, subclass 155, lets a permanent resident whose travel facility has expired, or a former permanent resident or former citizen, keep or regain the right to come back to Australia as a permanent resident. Item 1128 of Schedule 1 sets a base charge of ${h.aud(h.V('155').std.base)} for each applicant in the compilation in force on 1 November 2026, with no second instalment. The Pacific and Timor-Leste rate is much lower, ${h.aud(h.V('155').pacific!.base)}, a concession the Department's page says applies from 1 July 2026. Family members do not join at a reduced rate: each person applies and pays, so a couple pays ${h.aud(h.cost({ code: '155', adults: 1, children: 0 }).total)}. The 157 version of the same visa, with a short travel period, is charged under the same item.`,
    faqs: (h) => [
      { q: "Who can apply for a 155?", a: `A current permanent resident, a former permanent resident whose last permanent visa was not cancelled, or a former Australian citizen, as the Department’s page sets out. The 155 gives five years of travel for those who meet the residence requirement; a shorter visa may be granted to others. The charge is the same.` },
      { q: "Does each family member pay the 155 charge?", a: `Yes, ${h.aud(h.V('155').std.base)} each, or ${h.aud(h.V('155').pacific!.base)} each with a Pacific or Timor-Leste passport. There is no lower family rate: a couple with two children pays four charges. The calculator multiplies the charge by the number of people. Each person who travels needs their own visa to return.` },
      { q: "Is the 157 cheaper than the 155?", a: `Both are charged under item 1128 of Schedule 1, at the same amount. The 157 is the version of the visa with a shorter travel period, for people who meet some but not all of the requirements. The application decides which one is granted.` },
    ],
    body: (h) => `
<h2>Resident return visa 155 cost for a family</h2>
${h.scenarios('155')}
<p>Because each person applies separately, a family of four pays ${h.aud(h.cost({ code: '155', adults: 1, children: 2 }).total)}. Holders of Pacific or Timor-Leste passports pay the lower rate for each person on their own application.</p>
<h2>Who can apply for the 155</h2>
${h.conditions('155')}
<p>You can apply in or outside Australia. Each family member needs their own application and pays the full charge.</p>
${h.feeTable('155')}
<h2>Resident return visa processing time</h2>
<p>Copy the 50% and 90% times for subclass 155 from the official tool, and plan your departure after the 90% date if you are in Australia.</p>`,
  },
});
