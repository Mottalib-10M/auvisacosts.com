import { definePage } from '../../lib/guide-types';
import { pair } from '../../lib/times';
const t189 = pair('189', 'Points-Tested');
export default definePage({
  id: '189-visa-cost', group: 'skilled', order: 110,
  tool: { kind: 'mini:cost-189' },
  mini: { kind: 'mini:times-189', props: { title: 'When a 189 decision could come: the official times' } },
  visa: '189',
  related: ["190-visa-cost", "491-visa-cost", "skilled-visa-costs-compared", "second-instalment"],
  sources: ["regs", "ha_189", "ha_processing"],
  en: {
    slug: '189-visa-cost', nav: "189 visa cost", card: "Skilled Independent: base charge, partner and children, and the second instalment for English.",
    title: "189 Visa Cost 2026: Total for You, a Partner and Children",
    description: "189 visa cost in 2026: the charge for the main applicant, each adult and child, the second instalment without functional English and the Pacific rate, totalled.",
    h1: "189 visa cost: the whole family, added up",
    intro: (h) => `The 189 visa cost starts at ${h.aud(h.V('189').std.base)} for the main applicant; a partner adds ${h.aud(h.V('189').std.add18)} and each child ${h.aud(h.V('189').std.addU18)}.`,
    resume: (h) => `The Skilled Independent visa is the points-tested permanent visa that needs no sponsor and no state nomination. Its charge is set by item 1137 of Schedule 1 of the Migration Regulations 1994. In the compilation in force on 1 November 2026, the main applicant pays ${h.aud(h.V('189').std.base)} when lodging, a partner or any other family member aged 18 or over adds ${h.aud(h.V('189').std.add18)}, and each child under 18 adds ${h.aud(h.V('189').std.addU18)}. A couple with two children therefore pays ${h.aud(h.cost({ code: '189', adults: 1, children: 2 }).firstInstalment)} up front. A second instalment of ${h.aud(h.V('189').second!.adultNoEnglish!)} is due before grant for every adult on the application who is assessed as not having functional English, usually the partner, since the main applicant normally meets an English requirement of their own. With a passport of a Pacific country or Timor-Leste, the main charge falls to ${h.aud(h.V('189').pacific!.base)}. The New Zealand and Hong Kong streams of the same subclass have their own amounts.`,
    faqs: (h) => [
      { q: "Do I pay the 189 charge when I submit my expression of interest?", a: `No. An expression of interest in SkillSelect is free. The ${h.aud(h.V('189').std.base)} base charge and the family charges are paid when you lodge the visa application, within the period stated in the invitation. If you are invited, plan the full amount for every family member before the deadline, because the application cannot be lodged without the first instalment.` },
      { q: "Is the 189 charge refunded if the visa is refused?", a: `As a rule, no: the first instalment pays for the assessment, not for the grant. Regulation 2.12F lists the narrow cases where it is refunded. The second instalment is only requested before grant, so a refused applicant never pays it. Withdrawing an application does not bring the money back either.` },
      { q: "Does my child turning 18 change the 189 charge?", a: `The age that counts is the age on the day you lodge. A child who is 17 on that day pays the under-18 charge of ${h.aud(h.V('189').std.addU18)}, even if the visa is granted after the eighteenth birthday. Count each child at the rate that applies on the day you press submit in ImmiAccount.` },
    ],
    body: (h) => `
<h2>189 visa cost for a single applicant, a couple and a family</h2>
${h.scenarios('189')}
<p>Within the skilled visas, the size of the family changes the total more than the choice of visa: on the 189 the partner pays half of the main charge and each child about a quarter. Across visa types the rules change completely: on a 482 the partner pays the full main charge. If your partner cannot show functional English with a test score or a passport from an English-speaking country, set aside the second instalment as well; it is requested only when the case officer is ready to grant, but it must be paid before the visa is issued.</p>
<p>The 190, 491 and 186 differ from the 189 by a few dollars only, line by line as the official schedule writes them; the ${h.a('skilled-visa-costs-compared', 'skilled visas compared')} page sets them side by side.</p>
<h2>Who can apply for the 189</h2>
${h.conditions('189')}
<p>An invitation comes only after an expression of interest in SkillSelect and a points score of your own; the ${h.a('home', 'calculator on the home page')} shows the charge, and the points themselves are worked out on a separate site, immigrationpoints.com. You pay nothing to lodge an expression of interest: the charge falls due on the day you apply after the invitation.</p>
${h.feeTable('189')}
<h2>189 visa processing time</h2>
<p>The Department of Home Affairs publishes the 189 times by stream. For the Points-Tested stream, half of the applications decided last month took ${t189.p50} or less, and 9 in 10 took ${t189.p90} or less. The tool above is already filled with these official times: change the day you applied, or the stream, to see your own dates.</p>`,
  },
});
