import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'bridging-visa-b-cost', group: 'temporary', order: 470,
  tool: { kind: 'mini:cost-020' },
  mini: { kind: 'mini:decision', props: {"title": "When a 020 decision could come"} },
  visa: '020',
  related: ["resident-return-visa-155-cost", "partner-visa-820-cost", "visa-processing-times", "subsequent-temporary-application-charge"],
  sources: ["regs", "ha_020", "ha_processing"],
  en: {
    slug: 'bridging-visa-b-cost', nav: "Bridging visa B cost", card: "Bridging visa B: the charge to travel while an application is pending.",
    title: "Bridging Visa B Cost 2026: Charge to Travel While You Wait",
    description: "Bridging visa B cost in 2026: the charge to leave Australia and return while an application or review is pending, family members and the Pacific rate.",
    h1: "Bridging visa B cost",
    intro: (h) => `The bridging visa B cost is ${h.aud(h.V('020').std.base)} for the applicant; family members included pay nothing more.`,
    resume: (h) => `The Bridging visa B, subclass 020, lets a person who holds a bridging visa A or B leave Australia and return while a visa application, or a judicial review, is under way. Item 1302 of Schedule 1 sets a base charge of ${h.aud(h.V('020').std.base)} in the compilation in force on 1 November 2026, and a nil additional applicant charge, so a family on one application pays the same ${h.aud(h.cost({ code: '020', adults: 1, children: 2 }).total)} as a person alone. With a Pacific or Timor-Leste passport, the charge is ${h.aud(h.V('020').pacific!.base)}. There is no second instalment. The bridging visa C, granted while some applications are pending, has a nil charge under item 1303. The calculator above shows the total for any family on one application. The bridging visa B is applied for while a substantive application or a review is pending, and the charge is paid each time a new one is needed for travel.`,
    faqs: (h) => [
      { q: "Do family members pay for a bridging visa B?", a: `Not if they are included in the same application: the additional applicant charge is nil, so the family pays ${h.aud(h.V('020').std.base)} in total. The Pacific rate of ${h.aud(h.V('020').pacific!.base)} also covers the whole family on one application. The bridging visa B is applied for while another application is pending.` },
      { q: "Is a bridging visa C free?", a: `Yes. Item 1303 sets every component of the bridging visa C charge at nil. A bridging visa C is granted to some applicants in Australia who did not hold a substantive visa when applying; it does not allow travel, which is why a bridging visa B is needed to leave.` },
      { q: "Why is the bridging visa B cheaper with a Pacific passport?", a: `Item 1302 sets a separate charge of ${h.aud(h.V('020').pacific!.base)} for an applicant holding a passport of a Pacific-regional country, including Timor-Leste. The saving on the bridging visa B is among the largest in Schedule 1 in proportion to the standard charge. It applies to every applicant who holds such a passport.` },
    ],
    body: (h) => `
<h2>Bridging visa B cost for a family</h2>
${h.scenarios('020')}
<p>Because family members included in the application add nothing, it is worth applying together when the whole family travels. Apply well before the trip: the charge is paid at lodgement whether or not the visa is granted in time.</p>
<h2>Who can apply for the bridging visa B</h2>
${h.conditions('020')}
<p>You must be in Australia and hold a bridging visa A or B linked to a pending substantive visa application or a judicial review.</p>
${h.feeTable('020')}
<h2>Bridging visa B processing time</h2>
<p>The official tool may list a time for subclass 020. Enter it below with the day you applied and compare the result with your planned departure date.</p>`,
  },
});
