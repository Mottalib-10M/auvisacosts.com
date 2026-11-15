import { definePage } from '../../lib/guide-types';
import { PARENT } from '../../lib/times';
const Q143 = PARENT.queue.find((q) => q.code === '143')!;
export default definePage({
  id: 'contributory-parent-visa-143-cost', group: 'parents', order: 510,
  tool: { kind: 'mini:cost-143' },
  mini: { kind: 'mini:parentq-143' },
  visa: '143',
  related: ["173-visa-cost", "parent-visa-103-cost", "parent-visa-costs-compared", "second-instalment"],
  sources: ["regs", "ha_143", "ha_processing"],
  en: {
    slug: 'contributory-parent-visa-143-cost', nav: "Contributory Parent visa 143 cost", card: "The large second instalment, the first charge, children and the cheaper path through a 173.",
    title: "Contributory Parent Visa 143 Cost 2026: Both Instalments",
    description: "Contributory Parent visa 143 cost in 2026: first instalment, the large second instalment per adult, dependent children, and the total after a 173 visa.",
    h1: "Contributory Parent visa 143 cost",
    intro: (h) => `The Contributory Parent visa 143 cost is ${h.aud(h.V('143').std.base)} at lodgement and ${h.aud(h.V('143').second!.perApplicant!)} per adult before grant.`,
    resume: (h) => `The Contributory Parent visa is the permanent parent visa with the shorter queue, paid for by a large second instalment. Item 1130 of Schedule 1 sets the first instalment at ${h.aud(h.V('143').std.base)} for the main applicant, ${h.aud(h.V('143').std.add18)} for a second parent or other adult, and ${h.aud(h.V('143').std.addU18)} for a child under 18, in the compilation in force on 1 November 2026. Before grant, each adult pays a second instalment of ${h.aud(h.V('143').second!.perApplicant!)}, and a dependent child under 18 pays ${h.aud(h.V('143').second!.perChild!)}. One parent alone therefore pays ${h.aud(h.cost({ code: '143', adults: 0, children: 0 }).total)}, and a couple ${h.aud(h.cost({ code: '143', adults: 1, children: 0 }).total)}. Parents who first hold a Contributory Parent (Temporary) visa, subclass 173, pay a first instalment of ${h.aud(h.V('143').variants!.find((x) => x.id === 'from173')!.fee.base)} and a second instalment of {v2:143:from173} each when they apply for the 143, having paid the rest with the 173. With a Pacific or Timor-Leste passport, the first instalment is ${h.aud(h.V('143').pacific!.base)}.`,
    faqs: (h) => [
      { q: "When do I pay the 143 second instalment?", a: `Before the visa is granted, when the Department sends a payment request. Regulation 2.12D gives you 28 days if the notice is sent within Australia and 70 days otherwise. The second instalment for the 143 is the largest single payment in the Australian visa system, so plan the money well before the request arrives: the visa is not granted until it is paid.` },
      { q: "Is the 143 cheaper through a 173 first?", a: `The total is close. The 173 costs ${h.aud(h.V('173').std.base)} plus ${h.aud(h.V('173').second!.perApplicant!)}; the 143 then costs ${h.aud(h.V('143').variants!.find((x) => x.id === 'from173')!.fee.base)} plus {v2:143:from173} per adult. The 173 spreads the cost over two applications. The two-step route also lets parents live in Australia on the 173 while they save for the second step, which is the main reason families choose it over a direct 143 application.` },
      { q: "Does a child pay the full second instalment on a 143?", a: `No. A dependent child who was under 18 at the time of application pays ${h.aud(h.V('143').second!.perChild!)}. Each adult pays ${h.aud(h.V('143').second!.perApplicant!)}. For two parents and one dependent child, the second instalments alone come to more than two adult amounts, which the calculator adds for you.` },
    ],
    body: (h) => `
<h2>Contributory Parent visa 143 cost for one or two parents</h2>
${h.scenarios('143')}
<p>The second instalment is requested only when the case officer is ready to grant, so families can save between lodgement and the payment request. Paying it on time matters: the visa is not granted until it is received, and the payment request sets a deadline.</p>
<h2>Who can apply for the 143</h2>
${h.conditions('143')}
<p>You need a child who is a settled Australian citizen, permanent resident or eligible New Zealand citizen, and you apply from outside Australia. Applicants who already hold or have applied for a Sponsored Parent (Temporary) visa cannot apply.</p>
${h.feeTable('143')}
<h2>Contributory Parent visa processing time</h2>
<p>A 143 visa has no processing time in months: applications wait in the parent queue and are released as the yearly places allow. On ${h.date(PARENT.as_at)} the Department had released applications ${Q143.releasedLabel.replace(/^Lodged\/queued/, 'lodged or queued')}, and it estimates about ${PARENT.newApplicationYears.contributory} years for an application made now: that estimate is the answer the tool above gives, with the other parent queue beside it for comparison; the ${h.a('parent-visa-processing-time', 'parent visa processing time page')} explains the queue.</p>`,
  },
});
