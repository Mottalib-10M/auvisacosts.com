import { definePage } from '../../lib/guide-types';
export default definePage({
  id: '494-visa-cost', group: 'work', order: 220,
  tool: { kind: 'mini:cost-494' },
  mini: { kind: 'mini:decision', props: {"title": "When a 494 decision could come"} },
  visa: '494',
  related: ["186-visa-cost", "191-visa-cost", "491-visa-cost", "second-instalment"],
  sources: ["regs", "ha_494", "ha_processing"],
  en: {
    slug: '494-visa-cost', nav: "494 visa cost", card: "Employer sponsored regional visa: charges, family, English instalment, then the 191.",
    title: "494 Visa Cost 2026: Employer Sponsored Regional Charges",
    description: "494 visa cost in 2026: main applicant, partner and children, the second instalment without functional English, and the later 191 for permanent residence.",
    h1: "494 visa cost for a regional employer job",
    intro: (h) => `The 494 visa cost is ${h.aud(h.V('494').std.base)} for the main applicant, plus ${h.aud(h.V('494').std.add18)} for a partner and ${h.aud(h.V('494').std.addU18)} per child.`,
    resume: (h) => `The Skilled Employer Sponsored Regional visa is a provisional visa for workers nominated by an employer in regional Australia. Item 1242 of Schedule 1 sets the same first instalment as the 186: ${h.aud(h.V('494').std.base)} for the main applicant, ${h.aud(h.V('494').std.add18)} for each adult family member and ${h.aud(h.V('494').std.addU18)} for each child, read in the compilation in force on 1 November 2026. Its second instalment also mirrors the 186: ${h.aud(h.V('494').second!.primaryNoEnglish!)} for a main applicant without functional English and ${h.aud(h.V('494').second!.adultNoEnglish!)} for any other adult in that position, nil for a Minister of Religion and family. After holding the 494 and meeting its conditions, the family can move to permanent residence with the 191, whose charge is ${h.aud(h.V('191').std.base)} for the main applicant. With a Pacific or Timor-Leste passport, the 494 base charge is ${h.aud(h.V('494').pacific!.base)}. The employer's nomination is a separate application.`,
    faqs: (h) => [
      { q: "Do I pay twice to become permanent on the 494 route?", a: `Yes: the 494 charge now, then the 191 charge of ${h.aud(h.V('191').std.base)} for the main applicant when you apply for permanent residence. Both are paid by the applicant. For a couple with children, add the family charges of each visa: the calculator on the 191 page gives the second step for the same family.` },
      { q: "Is the 494 charge different from the 186?", a: `No. Items 1242 and 1114B set the same first instalment and the same second instalment amounts. A main applicant without functional English pays ${h.aud(h.V('494').second!.primaryNoEnglish!)} on either visa; the difference between them is in the conditions, the regional requirement and the path to permanent residence.` },
      { q: "Does a family member without English always pay the second instalment?", a: `Only an applicant aged 18 or over at the time of application who is assessed as not having functional English. Children under 18 never pay it. The assessment is made on the evidence of English supplied with the application. A test result at the functional level, or a passport from an exempt country, avoids the payment.` },
    ],
    body: (h) => `
<h2>494 visa cost by household</h2>
${h.scenarios('494')}
<p>Over both steps, a couple with two children pays ${h.aud(h.cost({ code: '494', adults: 1, children: 2 }).total)} for the 494 and ${h.aud(h.cost({ code: '191', adults: 1, children: 2 }).total)} for the 191. A 186 in the Direct Entry stream costs the family the same first instalment in one step, which is why the regional route is chosen for the job and the region, not for the price.</p>
<h2>Who can apply for the 494</h2>
${h.conditions('494')}
<p>The application must be made in the stream for which the employer nominated the occupation. If the employer withdraws the nomination before a decision, the application fails and the charge is generally not refunded.</p>
${h.feeTable('494')}
<h2>494 visa processing time</h2>
<p>Copy the 50% and 90% times for the 494 stream that applies to you from the official tool. Employer sponsored regional applications are listed by stream.</p>`,
  },
});
