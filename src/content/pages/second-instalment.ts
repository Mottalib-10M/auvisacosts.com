import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'second-instalment', group: 'guides', order: 630,
  tool: { kind: 'mini:cost-189', props: {"a": 1, "ne": 1} },
  mini: { kind: 'mini:deadline' },
  related: ["189-visa-cost", "186-visa-cost", "contributory-parent-visa-143-cost", "parent-visa-costs-compared"],
  sources: ["regs", "ha_189", "ha_143"],
  en: {
    slug: 'second-instalment', nav: "Second instalment", card: "Who pays the second instalment, how much, and the deadline after the request.",
    title: "Second Instalment Visa Charge: Who Pays and By When, 2026",
    description: "Second instalment of the Australian visa charge in 2026: functional English amounts, parent visa contributions and the 28 or 70 day payment deadline to meet.",
    h1: "Second instalment of the visa charge",
    intro: (h) => `The second instalment visa charge is ${h.aud(h.V('189').second!.adultNoEnglish!)} for an adult without functional English on a 189, and up to ${h.aud(h.V('143').second!.perApplicant!)} per adult on a parent visa.`,
    resume: (h) => `The visa application charge has two parts. The first instalment is paid with the application. The second instalment is paid before the visa is granted, and only where Schedule 1 of the Migration Regulations 1994 sets one. It falls on two groups of applicants. On skilled and employer sponsored visas, it is paid by each applicant aged 18 or over at the time of application who is assessed as not having functional English: ${h.aud(h.V('189').second!.adultNoEnglish!)} on the 189 and 190, ${h.aud(h.V('491').second!.adultNoEnglish!)} on the 491 and 858, and up to ${h.aud(h.V('186').second!.primaryNoEnglish!)} on the 186 and 494 for a main applicant. On parent visas, it is the contribution itself: ${h.aud(h.V('103').second!.perApplicant!)} per applicant on the 103 and 804, ${h.aud(h.V('173').second!.perApplicant!)} per adult on the 173, and ${h.aud(h.V('143').second!.perApplicant!)} per adult on the 143 and 864. The Department sends a written request; regulation 2.12D then gives ${h.C.secondInstalmentNoticeDaysInAustralia} days to pay if the notice is sent within Australia and ${h.C.secondInstalmentNoticeDaysOther} days in other cases.`,
    faqs: (h) => [
      { q: "Who pays the second instalment for functional English?", a: `Each applicant aged 18 or over at the time of application who is assessed as not having functional English, on the visas whose item of Schedule 1 sets an amount. Children under 18 never pay it. The amount differs by visa. Enter the number of adults without functional English in the calculator to see the total.` },
      { q: "How long do I have to pay the second instalment?", a: `Regulation 2.12D gives ${h.C.secondInstalmentNoticeDaysInAustralia} days when the notice is sent from Australia to an address in Australia, and ${h.C.secondInstalmentNoticeDaysOther} days in other cases, from the day you are taken to receive it. The notice says which deadline applies. If the payment is not made on time, the application can be refused.` },
      { q: "Is the second instalment refunded if the visa is refused?", a: `It is requested before grant, so a refusal usually comes before any payment. Regulation 2.12H lists the cases where a paid second instalment is refunded. If you withdraw before paying, the second instalment is never requested. Keep the notice and pay only through the channel it names.` },
    ],
    body: (h) => `
<h2>Second instalment amounts by visa</h2>
${h.secondTable()}
<p>Whether an adult has functional English is assessed by the Department from the evidence it lists on its website. The amount is fixed per person by the item of the visa, so a couple where only one partner lacks functional English pays one instalment, not two.</p>
<h2>The deadline after the payment request</h2>
<p>The second calculator gives the last day to pay. The period starts on the day you are taken to have received the notice, which depends on how it was sent, under section 494C of the Migration Act. If the instalment is not paid in time, the visa cannot be granted.</p>
<h2>Second instalment visa charge for parents</h2>
<p>For contributory parent visas, the second instalment is the bulk of the cost. Families who choose the temporary 173 first pay ${h.aud(h.V('173').second!.perApplicant!)} per adult before that visa, then {v2:143:from173} per adult before the permanent 143; the ${h.a('parent-visa-costs-compared', 'parent comparison')} adds both steps.</p>`,
  },
});
