import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'prospective-marriage-visa-300-cost', group: 'family', order: 330,
  tool: { kind: 'mini:cost-300' },
  mini: { kind: 'mini:decision', props: {"title": "When a 300 decision could come"} },
  visa: '300',
  related: ["partner-visa-820-cost", "partner-visa-309-cost", "visa-cost-for-a-family", "pacific-visa-rates"],
  sources: ["regs", "ha_300", "ha_processing"],
  en: {
    slug: 'prospective-marriage-visa-300-cost', nav: "Prospective Marriage visa 300 cost", card: "Fianc\u00e9 visa: the charge, then the much lower partner visa after the wedding.",
    title: "Prospective Marriage Visa 300 Cost 2026: Before the Wedding",
    description: "Prospective Marriage visa 300 cost in 2026: the charge for the fianc\u00e9 or fianc\u00e9e and children, then the lower partner charge after the wedding, totalled.",
    h1: "Prospective Marriage visa 300 cost",
    intro: (h) => `The Prospective Marriage visa 300 cost is ${h.aud(h.V('300').std.base)}; after the wedding, the partner visa costs only ${h.aud(h.V('820').variants!.find((x) => x.id === 'pmv')!.fee.base)}.`,
    resume: (h) => `The Prospective Marriage visa lets a person engaged to an Australian citizen, permanent resident or eligible New Zealand citizen come to Australia to marry. Item 1215 of Schedule 1 sets the same charge as a partner visa: ${h.aud(h.V('300').std.base)} for the applicant, ${h.aud(h.V('300').std.add18)} for each other adult and ${h.aud(h.V('300').std.addU18)} for each child, in the compilation in force on 1 November 2026. The saving comes at the second step. Once married in Australia, the holder applies for the onshore partner visa at ${h.aud(h.V('820').variants!.find((x) => x.id === 'pmv')!.fee.base)} instead of the standard ${h.aud(h.V('820').std.base)}. The two steps together cost ${h.aud(h.V('300').std.base)} plus ${h.aud(h.V('820').variants!.find((x) => x.id === 'pmv')!.fee.base)} for the applicant alone. With a Pacific or Timor-Leste passport, the first charge is ${h.aud(h.V('300').pacific!.base)}. The visa is granted for 9 to 15 months, and the wedding must take place in that window.`,
    faqs: (h) => [
      { q: "How much is the partner visa after a 300?", a: `Item 1124B sets ${h.aud(h.V('820').variants!.find((x) => x.id === 'pmv')!.fee.base)} for a Prospective Marriage visa holder who has married the sponsor and applies for the onshore partner visa, against ${h.aud(h.V('820').std.base)} for other applicants. Only the main applicant's charge is lower; a dependent child who joins the onshore partner application pays the reduced child rate set in the same item.` },
      { q: "How long does the 300 visa last?", a: `It is granted for 9 to 15 months from the grant, and you must marry your sponsor within that period. If the marriage does not take place in that window, the visa ends; the charge paid for it is not refunded and a later partner application pays the standard charge.` },
      { q: "Can children come on the 300?", a: `Yes, dependent children can be included; each pays the under-18 additional applicant charge of ${h.aud(h.V('300').std.addU18)}. An adult dependant, 18 or over at lodgement, pays the adult rate of ${h.aud(h.V('300').std.add18)}. The total of the calculator includes each person you add. Each one is counted on the same application as the main applicant.` },
    ],
    body: (h) => `
<h2>Prospective Marriage visa 300 cost with children</h2>
${h.scenarios('300')}
<p>For a couple who plan to marry in Australia, the 300 route costs more in total than a 309 lodged after a wedding abroad, because the second step is paid on top. Its advantage is the right to enter and marry in Australia, not the price.</p>
<h2>Who can apply for the 300</h2>
${h.conditions('300')}
<p>You must be outside Australia when you apply, aged 18 or over, and have met your future spouse in person as adults. After the wedding, the partner visa application must be made while you hold the 300.</p>
${h.feeTable('300')}
<h2>Prospective Marriage visa processing time</h2>
<p>Copy the 50% and 90% times for subclass 300 from the official tool. Plan the wedding date from the end of the window, not the start: the visa is granted for 9 to 15 months.</p>`,
  },
});
