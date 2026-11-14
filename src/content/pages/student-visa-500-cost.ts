import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'student-visa-500-cost', group: 'temporary', order: 420,
  tool: { kind: 'mini:cost-500' },
  mini: { kind: 'mini:decision', props: {"title": "When a 500 decision could come"} },
  visa: '500',
  related: ["485-visa-cost", "subsequent-temporary-application-charge", "pacific-visa-rates", "visitor-visa-600-cost"],
  sources: ["regs", "ha_500", "ha_processing"],
  en: {
    slug: 'student-visa-500-cost', nav: "Student visa 500 cost", card: "Student visa: standard, ASEAN and ELICOS rate, Pacific rate, partner and children.",
    title: "Student Visa 500 Cost 2026: Australia Student Visa Fee",
    description: "Student visa 500 cost in 2026: standard charge, the lower ASEAN and English-course rate, Pacific rate, partner and children, and the onshore surcharge.",
    h1: "Student visa 500 cost: the Australia student visa fee, by course",
    intro: (h) => `The student visa 500 cost is ${h.aud(h.V('500').std.base)} in most cases, plus ${h.aud(h.V('500').std.add18)} for a partner and ${h.aud(h.V('500').std.addU18)} per child.`,
    resume: (h) => `The Student visa lets you study full time in a registered course in Australia. Item 1222 of Schedule 1 sets three main rates in the compilation in force on 1 November 2026. Most applicants pay ${h.aud(h.V('500').std.base)}, with ${h.aud(h.V('500').std.add18)} for each family member aged 18 or over and ${h.aud(h.V('500').std.addU18)} for each child. Holders of a passport of Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, the Philippines, Singapore, Thailand or Vietnam, and students enrolled in an English-language (ELICOS) or non-award course, pay ${h.aud(h.V('500').variants!.find((x) => x.id === 'reduced')!.fee.base)}. Holders of a Pacific or Timor-Leste passport pay ${h.aud(h.V('500').pacific!.base)}. There is no second instalment. Applicants in Australia who move from certain temporary visas may also owe the subsequent temporary application charge of ${h.aud(h.C.subsequentTemporary)}, which this calculator adds only on its own page. Overseas Student Health Cover and tuition are separate costs.`,
    faqs: (h) => [
      { q: "Which students pay the lower 500 charge?", a: `Holders of a passport of one of ten ASEAN countries named in item 1222, and students in an English-language or non-award course, pay ${h.aud(h.V('500').variants!.find((x) => x.id === 'reduced')!.fee.base)} instead of ${h.aud(h.V('500').std.base)}. Pacific and Timor-Leste passports pay ${h.aud(h.V('500').pacific!.base)}. The lower rates apply to the main applicant; family members joining the application follow the rate of the item. Enter your passport in the advanced fields of the calculator.` },
      { q: "Do I pay the subsequent temporary application charge on a student visa?", a: `Only when you apply in Australia while holding, or last holding, a temporary visa named in the Minister's instrument. The page on the subsequent temporary application charge explains the conditions. When it applies, it adds ${h.aud(h.C.subsequentTemporary)} for each applicant, on top of the ${h.aud(h.V('500').std.base)} base charge, and the calculator includes it once you answer yes to both questions.` },
      { q: "Is health cover included in the student visa cost?", a: `No. Overseas Student Health Cover is bought from an insurer and is a condition of the visa, not part of the charge. Its price depends on the insurer, the length of the course and whether family members come with you, which is why it is not in the totals above.` },
    ],
    body: (h) => `
<h2>Student visa 500 cost for a student and family</h2>
${h.scenarios('500')}
<p>A student who brings a partner and a child pays ${h.aud(h.cost({ code: '500', adults: 1, children: 1 }).total)} at the standard rate. The same family pays less if the main student holds one of the ten ASEAN passports listed in the item or studies English first. The partner's work rights and the child's schooling costs are outside the visa charge.</p>
<h2>Who can apply for the 500</h2>
${h.conditions('500')}
<p>Apply from outside Australia unless you hold a visa that lets you apply inside. Each family member must be on the application at lodgement, or apply later as a subsequent entrant with a charge of their own.</p>
${h.feeTable('500')}
<h2>Student visa 500 processing time</h2>
<p>Applications lodged outside Australia are processed under Ministerial Direction 115, as the Department's visa page states. Copy the 50% and 90% times for the subclass 500 on the official tool to see the dates that follow from your lodgement day.</p>`,
  },
});
