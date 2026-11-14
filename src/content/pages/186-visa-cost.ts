import { definePage } from '../../lib/guide-types';
import { pair } from '../../lib/times';
const t186 = pair('186', 'Direct Entry Pathway');
export default definePage({
  id: '186-visa-cost', group: 'work', order: 210,
  tool: { kind: 'mini:cost-186' },
  mini: { kind: 'mini:times-186', props: { title: 'When a 186 decision could come: the official times' } },
  visa: '186',
  related: ["494-visa-cost", "482-visa-cost", "second-instalment", "visa-cost-for-a-family"],
  sources: ["regs", "ha_186", "regs_downloads", "ha_processing"],
  en: {
    slug: '186-visa-cost', nav: "186 visa cost", card: "Employer Nomination Scheme: applicant charges, the English instalment and the nomination fee.",
    title: "186 Visa Cost 2026: Employer Nomination Scheme Charges",
    description: "186 visa cost in 2026: the applicant charge, family members, the second instalment of up to $9,800 without functional English, and the employer nomination fee.",
    h1: "186 visa cost for the applicant and the employer",
    intro: (h) => `The 186 visa cost is ${h.aud(h.V('186').std.base)} for the main applicant, ${h.aud(h.V('186').std.add18)} for a partner and ${h.aud(h.V('186').std.addU18)} per child.`,
    resume: (h) => `The Employer Nomination Scheme visa gives permanent residence to a worker nominated by an Australian employer, in the Temporary Residence Transition, Direct Entry or Labour Agreement stream. Item 1114B of Schedule 1 charges the applicant ${h.aud(h.V('186').std.base)} at lodgement, plus ${h.aud(h.V('186').std.add18)} for each family member aged 18 or over and ${h.aud(h.V('186').std.addU18)} for each child. The second instalment is the steepest of the skilled visas: ${h.aud(h.V('186').second!.primaryNoEnglish!)} for a main applicant aged 18 or over who is assessed as not having functional English, and ${h.aud(h.V('186').second!.adultNoEnglish!)} for each other adult in that position. Ministers of religion and their families pay no second instalment. The employer pays separately for the nomination: regulation 5.37 sets ${h.aud(h.C.ensNomination)}, with no fee for a regional position in the Transition stream. With a Pacific or Timor-Leste passport the applicant's base charge is ${h.aud(h.V('186').pacific!.base)}.`,
    faqs: (h) => [
      { q: "Who pays the 186 nomination fee?", a: `The employer. Regulation 5.37 sets ${h.aud(h.C.ensNomination)} for a Direct Entry nomination and for a Transition stream position outside regional Australia; a regional Transition stream position has no fee. That fee is paid with the nomination, not with the visa application, and it does not appear in the applicant's ImmiAccount payment. The calculator leaves it out of your total and shows it on this page for information.` },
      { q: "Why is the 186 second instalment so high?", a: `Schedule 1 sets ${h.aud(h.V('186').second!.primaryNoEnglish!)} for a main applicant without functional English and ${h.aud(h.V('186').second!.adultNoEnglish!)} for other adults. A test score or other evidence of functional English avoids it. The amount is paid before grant, by each adult who cannot show functional English. It is one of the largest second instalments outside the parent visas, so an English test is usually the cheaper way.` },
      { q: "Is the 186 charge the same in all three streams?", a: `Yes, item 1114B sets one first instalment for the visa. The streams differ in their criteria and in the employer nomination fee. Whether you come through Direct Entry, Temporary Residence Transition or the Labour Agreement stream, the family pays the same additional applicant charges too.` },
    ],
    body: (h) => `
<h2>186 visa cost for the worker and family</h2>
${h.scenarios('186')}
<p>An employer who offers to pay the visa charges can use the totals above: the nomination fee of ${h.aud(h.C.ensNomination)} is in addition and is the employer’s own charge. When the worker has functional English but the partner does not, budget the ${h.aud(h.V('186').second!.adultNoEnglish!)} instalment for the partner, due before the grant.</p>
<p>The 186 amounts are a few dollars away from the 189: ${h.aud(h.V('186').std.addU18)} per child against ${h.aud(h.V('189').std.addU18)}, and ${h.aud(h.V('186').second!.adultNoEnglish!)} for a partner without functional English against ${h.aud(h.V('189').second!.adultNoEnglish!)}. Each visa has its own line in the official schedule of charges, and we copy each line as written.</p>
<h2>Who can apply for the 186</h2>
${h.conditions('186')}
<p>The application rests on an approved nomination, so lodge it with or after the employer's nomination. If the nomination is refused, the visa cannot be granted, and the first instalment is generally not refunded: coordinate the two before paying.</p>
${h.feeTable('186')}
<h2>186 visa processing time</h2>
<p>The Department of Home Affairs publishes the 186 times by stream. For the Direct Entry Pathway stream, half of the applications decided last month took ${t186.p50} or less, and 9 in 10 took ${t186.p90} or less. The tool above is already filled with these official times: change the day you applied, or the stream, to see your own dates.</p>`,
  },
});
