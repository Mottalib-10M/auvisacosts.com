import { definePage } from '../../lib/guide-types';
import { PARENT } from '../../lib/times';
const Q864 = PARENT.queue.find((q) => q.code === '864')!;
export default definePage({
  id: '864-visa-cost', group: 'parents', order: 550,
  tool: { kind: 'mini:cost-864' },
  mini: { kind: 'mini:parentq-864' },
  visa: '864',
  related: ["aged-parent-visa-804-cost", "contributory-parent-visa-143-cost", "parent-visa-costs-compared", "second-instalment"],
  sources: ["regs", "ha_864", "ha_processing"],
  en: {
    slug: '864-visa-cost', nav: "864 visa cost", card: "Contributory Aged Parent: both instalments, and the lower rate from an 884.",
    title: "864 Visa Cost 2026: Contributory Aged Parent Instalments",
    description: "864 visa cost in 2026 for the Contributory Aged Parent visa: first instalment, second instalment per adult, children, and the lower rate for 884 holders.",
    h1: "864 visa cost: Contributory Aged Parent",
    intro: (h) => `The 864 visa cost is ${h.aud(h.V('864').std.base)} at lodgement and ${h.aud(h.V('864').second!.perApplicant!)} per adult before grant.`,
    resume: (h) => `The Contributory Aged Parent visa, subclass 864, is the permanent contributory parent visa for parents of age pension age who apply in Australia. Item 1130A of Schedule 1 sets a first instalment of ${h.aud(h.V('864').std.base)} for the main applicant, ${h.aud(h.V('864').std.add18)} for a second adult and ${h.aud(h.V('864').std.addU18)} for a child under 18, and a second instalment of ${h.aud(h.V('864').second!.perApplicant!)} for each adult and ${h.aud(h.V('864').second!.perChild!)} for a dependent child, in the compilation in force on 1 November 2026. One parent pays ${h.aud(h.cost({ code: '864', adults: 0, children: 0 }).total)} in all. Holders of a Contributory Aged Parent (Temporary) visa, subclass 884, pay a first instalment of ${h.aud(h.V('864').variants!.find((x) => x.id === 'from884')!.fee.base)} and a second instalment of {v2:864:from884} each. With a Pacific or Timor-Leste passport, the first instalment is ${h.aud(h.V('864').pacific!.base)}. The 864 has the same total as the offshore 143.`,
    faqs: (h) => [
      { q: "Is the 864 the onshore version of the 143?", a: `In cost, yes: the same first and second instalments, ${h.aud(h.V('864').std.base)} and ${h.aud(h.V('864').second!.perApplicant!)} per adult. The 864 is for parents of age pension age in Australia. Dependent children pay a lower second instalment of ${h.aud(h.V('864').second!.perChild!)}. The calculator adds the instalments for each person you enter, so you see the full cost for the household.` },
      { q: "What does an 884 holder pay for the 864?", a: `A first instalment of ${h.aud(h.V('864').variants!.find((x) => x.id === 'from884')!.fee.base)} and a second instalment of {v2:864:from884} per adult. The amounts are set in the 864 item for holders of a Contributory Aged Parent (Temporary) visa, subclass 884, the onshore counterpart of the 173. The 884 is the onshore counterpart of the 173.` },
      { q: "Is there a cheaper second instalment in compassionate cases?", a: `Item 1130A sets a lower second instalment for some former 884 holders in compassionate and compelling circumstances; the Department decides who qualifies. We do not count that rate in the calculator, as it depends on the Department's view of the circumstances. The standard second instalment for an adult is ${h.aud(h.V('864').second!.perApplicant!)}.` },
    ],
    body: (h) => `
<h2>864 visa cost for one or two parents</h2>
${h.scenarios('864')}
<p>For a couple, the bill is ${h.aud(h.cost({ code: '864', adults: 1, children: 0 }).total)}. The temporary 884 spreads it over two applications in the same way the 173 does for the 143.</p>
<h2>Who can apply for the 864</h2>
${h.conditions('864')}
<p>You must be in Australia, of age pension age, with a settled child who sponsors you. Applicants holding or seeking a Sponsored Parent (Temporary) visa cannot apply.</p>
${h.feeTable('864')}
<h2>864 visa processing time</h2>
<p>A 864 visa has no processing time in months: applications wait in the parent queue and are released as the yearly places allow. On ${h.date(PARENT.as_at)} the Department had released applications ${Q864.releasedLabel.replace(/^Lodged\/queued/, 'lodged or queued')}, and it estimates about ${PARENT.newApplicationYears.contributory} years for an application made now: that estimate is the answer the tool above gives, with the other parent queue beside it for comparison; the ${h.a('parent-visa-processing-time', 'parent visa processing time page')} explains the queue.</p>`,
  },
});
