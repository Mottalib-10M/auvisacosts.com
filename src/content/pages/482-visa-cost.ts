import { definePage } from '../../lib/guide-types';
import { pair } from '../../lib/times';
const t482 = pair('482', 'Core Skills');
export default definePage({
  id: '482-visa-cost', group: 'work', order: 230,
  tool: { kind: 'mini:cost-482' },
  mini: { kind: 'mini:times-482', props: { title: 'When a 482 decision could come: the official times' } },
  visa: '482',
  related: ["186-visa-cost", "494-visa-cost", "visa-cost-for-a-family", "pacific-visa-rates"],
  sources: ["regs", "ha_482", "ha_processing"],
  en: {
    slug: '482-visa-cost', nav: "482 visa cost", card: "Skills in Demand: the applicant charge, adult family members at full price, children.",
    title: "482 Visa Cost 2026: Skills in Demand Visa for a Family",
    description: "482 visa cost in 2026 for the Skills in Demand visa: main applicant, adult family members at the same price, children and the Pacific rate, all totalled.",
    h1: "482 visa cost: every adult pays the full charge",
    intro: (h) => `The 482 visa cost is ${h.aud(h.V('482').std.base)} for the main applicant and the same ${h.aud(h.V('482').std.add18)} for each adult who joins.`,
    resume: (h) => `The Skills in Demand visa is the temporary employer-sponsored work visa that replaced the Temporary Skill Shortage visa. Its charge, set by item 1240 of Schedule 1, has a feature that changes the family budget: an adult family member pays exactly what the worker pays. In the compilation in force on 1 November 2026, the main applicant pays ${h.aud(h.V('482').std.base)}, each family member aged 18 or over ${h.aud(h.V('482').std.add18)} and each child under 18 ${h.aud(h.V('482').std.addU18)}. There is no second instalment. A couple therefore pays ${h.aud(h.cost({ code: '482', adults: 1, children: 0 }).total)}, and a couple with two children ${h.aud(h.cost({ code: '482', adults: 1, children: 2 }).total)}. With a Pacific or Timor-Leste passport, every amount is lower, starting at ${h.aud(h.V('482').pacific!.base)} for the main applicant. The employer pays its own charges, the nomination fee and the nomination training contribution charge; they are set outside Schedule 1 and are not added here.`,
    faqs: (h) => [
      { q: "Does my partner really pay the same 482 charge as me?", a: `Yes. Item 1240 sets the additional applicant charge for a person aged 18 or over at ${h.aud(h.V('482').std.add18)}, the same as the base charge of ${h.aud(h.V('482').std.base)}. That makes the 482 one of the few visas where adding a partner doubles the cost. A child under 18 pays a lower ${h.aud(h.V('482').std.addU18)}.` },
      { q: "Is there a second instalment on the 482?", a: `No. The second instalment of the Skills in Demand visa is nil. The whole visa application charge is paid at lodgement, so the total shown by the calculator is what leaves your account when you apply, with no further payment requested before the decision.` },
      { q: "Who pays the employer charges for a 482?", a: `The employer: the nomination fee and the nomination training contribution charge are the sponsor's costs and are separate from the visa application charge paid by the worker. Under Australian law the employer may not pass those nomination costs on to the worker. Neither is counted in the calculator above, which totals only the charge that the worker pays.` },
    ],
    body: (h) => `
<h2>482 visa cost for a worker and family</h2>
${h.scenarios('482')}
<p>Because adults pay full price, a worker who brings a partner and an adult child doubles or triples the bill. Some employers pay the family charges as part of the offer; ask before you accept, since nothing in the Regulations requires it for family members.</p>
<h2>Who can apply for the 482</h2>
${h.conditions('482')}
<p>The worker applies after, or together with, the employer's nomination of the position. If the nomination is refused, the visa cannot be granted and the charge is generally not refunded.</p>
${h.feeTable('482')}
<h2>482 visa processing time</h2>
<p>The Department of Home Affairs publishes the 482 times by stream. For the Core Skills stream, half of the applications decided last month took ${t482.p50} or less, and 9 in 10 took ${t482.p90} or less. The tool above is already filled with these official times: change the day you applied, or the stream, to see your own dates.</p>`,
  },
});
