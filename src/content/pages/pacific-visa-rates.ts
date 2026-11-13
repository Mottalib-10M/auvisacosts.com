import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'pacific-visa-rates', group: 'guides', order: 670,
  tool: { kind: 'mini:pacific' },
  related: ["student-visa-500-cost", "462-visa-cost", "resident-return-visa-155-cost", "australian-visa-fees-2026"],
  sources: ["regs", "ha_870", "ha_155"],
  en: {
    slug: 'pacific-visa-rates', nav: "Pacific and Timor-Leste rates", card: "The lower visa charges for Pacific and Timor-Leste passports since 1 July 2026.",
    title: "Pacific Visa Rates 2026: Lower Charges for Pacific Passports",
    description: "Pacific visa rates since 1 July 2026: lower Australian visa charges for passports of 13 Pacific countries and Timor-Leste, visa by visa, and the saving.",
    h1: "Pacific visa rates and Timor-Leste rates",
    intro: (h) => `Pacific visa rates lower the student visa from ${h.aud(h.V('500').std.base)} to ${h.aud(h.V('500').pacific!.base)} and the 189 from ${h.aud(h.V('189').std.base)} to ${h.aud(h.V('189').pacific!.base)}.`,
    resume: (h) => `Since 1 July 2026, Schedule 1 of the Migration Regulations 1994 sets lower visa application charges for applicants who hold a passport of a Pacific-regional country. Regulation 1.03 lists thirteen: the Federated States of Micronesia, Fiji, Kiribati, Nauru, Palau, Papua New Guinea, the Marshall Islands, Samoa, Solomon Islands, Timor-Leste, Tonga, Tuvalu and Vanuatu. The Department's visa pages describe the change as a lower visa cost for eligible Pacific Island and Timor-Leste citizens. The discount is about a fifth on most skilled and family visas, and much larger on some: the student visa falls from ${h.aud(h.V('500').std.base)} to ${h.aud(h.V('500').pacific!.base)}, the resident return visa from ${h.aud(h.V('155').std.base)} to ${h.aud(h.V('155').pacific!.base)}, the bridging visa B from ${h.aud(h.V('020').std.base)} to ${h.aud(h.V('020').pacific!.base)}. On most visas, family members who join the application of a Pacific passport holder pay the lower family rates too.`,
    faqs: (h) => [
      { q: "Which countries get the lower Pacific visa rate?", a: `The thirteen Pacific-regional countries of regulation 1.03: Micronesia, Fiji, Kiribati, Nauru, Palau, Papua New Guinea, the Marshall Islands, Samoa, Solomon Islands, Timor-Leste, Tonga, Tuvalu and Vanuatu. The list is set by regulation and can change; check it again in the version of the Regulations in force when you apply.` },
      { q: "Since when do Pacific passports pay less for Australian visas?", a: `Since 1 July 2026, according to the Department’s visa pages; the rates are in Schedule 1 of the Regulations in force. Earlier applications were charged at the standard rate. The lower rates apply to applications made on or after that date. Pacific and Timor-Leste passport holders benefit on most visas.` },
      { q: "Does my family pay the Pacific rate too?", a: `On most visas, yes: applicants whose application is combined with that of a Pacific passport holder pay the lower additional applicant charges. The calculator applies the Pacific rate to every applicant on the form once you tick the option. A family member on a separate application follows their own passport.` },
    ],
    body: (h) => `
<h2>Pacific visa rates by visa</h2>
${h.pacificTable()}
<p>The calculator above shows the saving for a family on any visa that has a Pacific rate. On the visa pages, the lower rate is in the last column of the charge table and in the advanced fields of each calculator.</p>
<h2>Who qualifies</h2>
<ul><li>The applicant whose passport decides the rate is usually the main applicant; family members combined with that application follow the same rate.</li><li>The passport must be valid. A citizen of one of the thirteen countries who travels on another passport should read the item of the visa before applying.</li><li>Visas without a Pacific rate in the table charge the standard amount.</li></ul>
<h2>Other lower rates</h2>
<p>The student visa has a second reduced rate for holders of passports of ten ASEAN countries and for English-language or non-award courses: ${h.aud(h.V('500').variants!.find((x) => x.id === 'reduced')!.fee.base)}. Some visas charge nothing to classes of applicants named by the Minister; those classes are set in instruments we do not reproduce.</p>`,
  },
});
