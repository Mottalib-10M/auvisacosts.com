import { definePage } from '../../lib/guide-types';
import { pair } from '../../lib/times';
const t485 = pair('485', 'Post-Higher Education Work');
export default definePage({
  id: '485-visa-cost', group: 'temporary', order: 410,
  tool: { kind: 'mini:cost-485' },
  mini: { kind: 'mini:times-485', props: { title: 'When a 485 decision could come: the official times' } },
  visa: '485',
  related: ["student-visa-500-cost", "visa-cost-for-a-family", "pacific-visa-rates", "subsequent-temporary-application-charge"],
  sources: ["regs", "ha_485", "ha_processing"],
  en: {
    slug: '485-visa-cost', nav: "485 visa cost", card: "Temporary Graduate visa: first application, second Post-Higher Education application, family.",
    title: "485 Visa Cost 2026: Temporary Graduate Visa Charges",
    description: "485 visa cost in 2026 for the Temporary Graduate visa: first visa, the lower second Post-Higher Education charge, partner, children and the Pacific rate.",
    h1: "485 visa cost after your studies",
    intro: (h) => `The 485 visa cost is ${h.aud(h.V('485').std.base)} for a first application, with ${h.aud(h.V('485').std.add18)} for a partner and ${h.aud(h.V('485').std.addU18)} per child.`,
    resume: (h) => `The Temporary Graduate visa lets international students stay and work after completing an Australian qualification. Item 1229 of Schedule 1 sets its charge, and the compilation in force on 1 November 2026 has four rates. A first application costs ${h.aud(h.V('485').std.base)} for the main applicant, ${h.aud(h.V('485').std.add18)} for each adult family member and ${h.aud(h.V('485').std.addU18)} for each child. A holder of a Post-Higher Education Work visa who applies again in that stream pays far less, ${h.aud(h.V('485').variants!.find((x) => x.id === 'phe')!.fee.base)} for the main applicant. With a Pacific or Timor-Leste passport, the first application costs ${h.aud(h.V('485').pacific!.base)}. There is no second instalment. The age limit is part of the same item: 35 or younger for most applicants, under 50 for holders of a research master's or a doctorate and for holders of a Hong Kong or British National (Overseas) passport.`,
    faqs: (h) => [
      { q: "Why is the second 485 cheaper than the first?", a: `Item 1229 sets a separate, lower charge of ${h.aud(h.V('485').variants!.find((x) => x.id === 'phe')!.fee.base)} for a holder of a Post-Higher Education Work visa applying again in that stream, against ${h.aud(h.V('485').std.base)} for a first application. The lower charge applies to the second Post-Higher Education Work visa only; a first application in any stream pays the standard charge. The calculator has the second visa as an option.` },
      { q: "Is there an age limit for the 485?", a: `Yes: 35 or younger in general, and under 50 for holders of a research master's degree or a doctorate and for Hong Kong or British National (Overseas) passport holders. Applying above the age limit means the application is invalid, and the charge paid for an invalid application is generally not refunded. Check the age rule for your stream before you pay.` },
      { q: "Do family members pay the full 485 charge?", a: `No. A family member aged 18 or over pays ${h.aud(h.V('485').std.add18)} and a child ${h.aud(h.V('485').std.addU18)}, half and about a quarter of the main charge. So a couple with one child pays roughly 1.75 times the main charge. The Pacific rates are lower for each of the three amounts.` },
    ],
    body: (h) => `
<h2>485 visa cost for a graduate and family</h2>
${h.scenarios('485')}
<p>The 485 now costs more than the student visa that came before it. A graduate who lodges with a partner and a child pays ${h.aud(h.cost({ code: '485', adults: 1, children: 1 }).total)}; check that every family member is on the application, since a partner who applies later on a separate visa pays a full charge of their own.</p>
<h2>Who can apply for the 485</h2>
${h.conditions('485')}
<p>Most applicants lodge in Australia, while still holding the student visa or within the period the item allows. Nominate one stream only: the charge is paid for that stream.</p>
${h.feeTable('485')}
<h2>485 visa processing time</h2>
<p>The Department of Home Affairs publishes the 485 times by stream. For the Post-Higher Education Work stream, half of the applications decided last month took ${t485.p50} or less, and 9 in 10 took ${t485.p90} or less. The tool above is already filled with these official times: change the day you applied, or the stream, to see your own dates. Use the dates to plan the end of your student visa and the start of work rights.</p>`,
  },
});
