import { definePage } from '../../lib/guide-types';
import { pair } from '../../lib/times';
const t462 = pair('462');
export default definePage({
  id: '462-visa-cost', group: 'work', order: 250,
  tool: { kind: 'mini:cost-462' },
  mini: { kind: 'mini:times-462', props: { title: 'When a 462 decision could come: the official times' } },
  visa: '462',
  related: ["working-holiday-visa-417-cost", "pacific-visa-rates", "eta-601-cost", "visa-processing-times"],
  sources: ["regs", "ha_462", "ha_processing"],
  en: {
    slug: '462-visa-cost', nav: "462 visa cost", card: "Work and Holiday visa: first visa, repeat visas, Pacific rate.",
    title: "462 Visa Cost 2026: Work and Holiday Visa, First and Repeat",
    description: "462 visa cost in 2026 for the Work and Holiday visa: the first visa, the higher charge for a second or third, the Pacific rate, and the 417 compared to it.",
    h1: "462 visa cost: Work and Holiday",
    intro: (h) => `The 462 visa cost is ${h.aud(h.V('462').std.base)} for a first visa, ${h.aud(h.V('462').variants!.find((x) => x.id === 'repeat')!.fee.base)} for a repeat visa, and ${h.aud(h.V('462').pacific!.base)} with a Pacific passport.`,
    resume: (h) => `The Work and Holiday visa, subclass 462, is the working holiday visa for passports of countries in the Work and Holiday program, with eligibility set country by country. Item 1224A of Schedule 1 sets three charges in the compilation in force on 1 November 2026: ${h.aud(h.V('462').pacific!.base)} for holders of a Pacific or Timor-Leste passport, ${h.aud(h.V('462').std.base)} for other applicants who have never held a 462 in Australia, and ${h.aud(h.V('462').variants!.find((x) => x.id === 'repeat')!.fee.base)} for anyone else, that is for a second or third visa. There is no family application and no second instalment. Classes of applicants named by the Minister pay nothing. Compared with the 417, the first visa costs the same and the repeat visas cost the same; the 462 adds the Pacific rate.`,
    faqs: (h) => [
      { q: "Is the 462 cheaper than the 417?", a: `For a first visa they cost the same, ${h.aud(h.V('462').std.base)}. Holders of a Pacific or Timor-Leste passport pay less for the 462: ${h.aud(h.V('462').pacific!.base)}. For second and third visas, the repeat rate applies to both. The country of your passport decides which of the two visas you can apply for.` },
      { q: "How much is a second 462 visa?", a: `A second or third 462 costs ${h.aud(h.V('462').variants!.find((x) => x.id === 'repeat')!.fee.base)}, the same as a repeat 417. Pacific and Timor-Leste passport holders pay less for a repeat 462 as well. The calculator offers both the first and the repeat visa. The repeat visa also needs the specified work done on the earlier visa.` },
      { q: "Can I bring my child on a 462?", a: `No. The 462 has no family application and is for the applicant alone. A parent with children usually needs a different visa, such as a visitor visa for a holiday or a work visa for employment. Children cannot be included on a working holiday application at all.` },
    ],
    body: (h) => `
<h2>462 visa cost for each visa</h2>
${h.scenarios('462')}
<p>Two friends or partners travelling together each pay a full charge. The conditions that change from one country to another do not change the charge.</p>
<h2>Who can apply for the 462</h2>
${h.conditions('462')}
<p>Holders of an eligible passport apply for the first visa from outside Australia. Read the conditions for your country on the Department's page before paying, since a refused application is generally not refunded.</p>
${h.feeTable('462')}
<h2>Work and Holiday visa processing time</h2>
<p>The Department of Home Affairs published these times for the 462: half of the applications decided last month took ${t462.p50} or less, and 9 in 10 took ${t462.p90} or less. The tool above is already filled with them: change the day you applied to see your own dates.</p>`,
  },
});
