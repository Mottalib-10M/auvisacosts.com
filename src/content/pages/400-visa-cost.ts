import { definePage } from '../../lib/guide-types';
import { pair } from '../../lib/times';
const t400 = pair('400');
export default definePage({
  id: '400-visa-cost', group: 'work', order: 270,
  tool: { kind: 'mini:cost-400' },
  mini: { kind: 'mini:times-400', props: { title: 'When a 400 decision could come: the official times' } },
  visa: '400',
  related: ["482-visa-cost", "408-visa-cost", "pacific-visa-rates", "visa-processing-times"],
  sources: ["regs", "ha_400", "ha_processing"],
  en: {
    slug: '400-visa-cost', nav: "400 visa cost", card: "Short stay specialist work visa: charge, adults, children, Pacific rate.",
    title: "400 Visa Cost 2026: Short Stay Specialist Work Visa Charges",
    description: "400 visa cost in 2026 for the Temporary Work (Short Stay Specialist) visa: the specialist, adults and children joining, and the Pacific rate, added up.",
    h1: "400 visa cost for short specialist work",
    intro: (h) => `The 400 visa cost is ${h.aud(h.V('400').std.base)} for the specialist, with ${h.aud(h.V('400').std.add18)} for each adult and ${h.aud(h.V('400').std.addU18)} for each child who joins.`,
    resume: (h) => `The Temporary Work (Short Stay Specialist) visa, subclass 400, is for short, non-ongoing work that needs highly specialised skills, knowledge or experience that cannot reasonably be found in Australia. Item 1231 of Schedule 1 charges ${h.aud(h.V('400').std.base)} for the main applicant, ${h.aud(h.V('400').std.add18)} for each family member aged 18 or over and ${h.aud(h.V('400').std.addU18)} for each child, in the compilation in force on 1 November 2026, with no second instalment. With a Pacific or Timor-Leste passport, every amount is lower, starting at ${h.aud(h.V('400').pacific!.base)}. Some applicants named in the item pay nothing. The visa is granted for up to 6 months; the Department's page says a stay of more than 3 months generally needs a strong business case with the application. For a specialist travelling alone, the visa cost is the base charge only.`,
    faqs: (h) => [
      { q: "Is the 400 cheaper than the 482?", a: `Yes: ${h.aud(h.V('400').std.base)} against ${h.aud(h.V('482').std.base)} for the main applicant. The 400 is for short, non-ongoing work only. For a short assignment of a few weeks, the 400 is therefore the cheaper option. Longer work usually needs a 482 sponsored by an employer. Family members are counted in the same way.` },
      { q: "Does an adult family member pay the full 400 charge?", a: `Yes. The additional applicant charge for an adult is ${h.aud(h.V('400').std.add18)}, the same as the base charge. A child under 18 pays a lower ${h.aud(h.V('400').std.addU18)}. Family members who travel separately would each need their own visa instead. The calculator counts each person you enter.` },
      { q: "How long does the 400 last?", a: `Up to 6 months, depending on the circumstances; beyond 3 months a strong business case is expected. The length of stay is set when the visa is granted. The charge does not change with the length you ask for. Family members who join the application receive the same period.` },
    ],
    body: (h) => `
<h2>400 visa cost when family travels too</h2>
${h.scenarios('400')}
<p>Family members joining a short assignment pay the adult or child charge on the same application. For a stay of a few weeks, the cost per day of the visa is low; for a longer project, the ${h.av('482', '482 visa')} may fit better, at a higher charge.</p>
<h2>Who can apply for the 400</h2>
${h.conditions('400')}
<p>Apply outside Australia in most cases, with evidence of the work and the specialist skills. The work must be short-term and must not be ongoing.</p>
${h.feeTable('400')}
<h2>400 visa processing time</h2>
<p>The Department of Home Affairs published these times for the 400: half of the applications decided last month took ${t400.p50} or less, and 9 in 10 took ${t400.p90} or less. The tool above is already filled with them: change the day you applied to see your own dates. For a project with a fixed start date, compare the 9 in 10 date with the day you need to arrive.</p>`,
  },
});
