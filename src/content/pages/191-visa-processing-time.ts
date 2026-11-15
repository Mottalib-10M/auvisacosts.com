import { definePage } from '../../lib/guide-types';
import { timesRows, TIMES_HEAD, timesCaption, pair } from '../../lib/times';
const t191 = pair('191'), st = pair('491', 'State/Territory Government Nominated Regional'), emp = pair('494', 'Employer Sponsored');
export default definePage({
  id: '191-visa-processing-time', group: 'skilled', order: 142,
  tool: { kind: 'mini:times-191' },
  mini: { kind: 'mini:cost-191', props: { title: 'What the 191 costs for your family' } },
  visa: '191',
  related: ['191-visa-cost', '491-visa-processing-time', '494-visa-cost', 'visa-application-time'],
  sources: ['ha_processing', 'ha_191', 'regs'],
  en: {
    slug: '191-visa-processing-time', nav: '191 visa processing time', card: 'Permanent visa after the 491 or 494: the official 50% and 90% times, as dates.',
    title: '191 Visa Processing Time: After Your 491 or 494 Visa',
    description: '191 visa processing time in November 2026: 7 months for half of the files and 11 months for nine in ten. Your decision dates, and the regional route end to end.',
    h1: '191 visa processing time after a regional visa',
    intro: () => `The 191 visa processing time is ${t191.p50} for half of the applications and ${t191.p90} for nine in ten.`,
    resume: (h) => `The Permanent Residence (Skilled Regional) visa, subclass 191, is the last step of the regional route. It is open to holders of a 491 or 494 visa who have lived and worked in a designated regional area for at least three years and met its taxable income requirement. In the Department of Home Affairs processing times guide updated on 2 November 2026, read on 14 November 2026, the single stream listed for the 191, Regional Provisional Visa, showed ${t191.p50} for half of the applications decided in the previous month and ${t191.p90} for nine in ten. That is shorter than the first step: the state nominated 491 took ${st.p50} and ${st.p90}, and the employer sponsored 494 ${emp.p50} and ${emp.p90}. The 191 is also much cheaper: ${h.aud(h.V('191').std.base)} for the main applicant. The calculator turns the 191 times into dates from the day you lodged; the second one adds the charge for your family.`,
    faqs: () => [
      { q: 'How long does a 191 visa take to be granted?', a: `In the update of 2 November 2026, half of the 191 applications were decided within ${t191.p50} and nine in ten within ${t191.p90}. The times count from lodgement. You can apply only after three years on the 491 or 494 meeting the income requirement, so plan the lodgement date with your tax returns in hand.` },
      { q: 'Can I stay in Australia while my 191 is processed?', a: 'Yes. The 191 is applied for in Australia, and if your 491 or 494 ends during the wait, a bridging visa granted with the application keeps you lawful, generally with the same work conditions. Check the conditions of the bridging visa in ImmiAccount before travelling.' },
      { q: 'How long is the whole regional route to permanent residence?', a: `Add the wait for the first visa, at least three years on it, and the 191 wait. With the November 2026 figures, a state nominated 491 lodged today would, for nine in ten files, be decided within ${st.p90}; the 191 then took ${t191.p90} for nine in ten. Figures move every month.` },
    ],
    body: (h) => `
<h2>191 visa processing time and the regional route</h2>
${h.table(TIMES_HEAD, timesRows(['491', '494', '191']), timesCaption, ['l', 'r', 'r'])}
<p>The first two lines are the provisional visas that lead to the 191. The ${h.a('491-visa-processing-time', '491 processing time page')} details both 491 streams, and the 494 is on the ${h.av('494', '494 cost page')} with its charge.</p>
<h2>What the Department checks for a 191</h2>
${h.conditions('191')}
<p>The income requirement is assessed from your tax records for three income years; a missing notice of assessment is a common reason for a request for information. The health and character checks are repeated for every applicant, including children who joined the family since the first visa.</p>
<h2>191 cost for the family</h2>
<p>The 191 charge is ${h.aud(h.V('191').std.base)} for the main applicant, ${h.aud(h.V('191').std.add18)} per adult family member and ${h.aud(h.V('191').std.addU18)} per child under 18. With a passport of a Pacific country or Timor-Leste, the main applicant pays ${h.aud(h.V('191').pacific!.base)}. There is no second instalment. The second calculator gives your total; the ${h.a('191-visa-cost', '191 visa cost page')} has the full table.</p>
<h2>Reading your dates</h2>
<p>The big date in the tool is when nine in ten applications lodged on your day would be decided at last month's pace; the smaller “Half decided by” date is when half would be. Past the big date, your application is among the slowest tenth, which is a reason to check ImmiAccount rather than a sign of a problem. The ${h.a('visa-approval-time', 'visa approval time page')} compares any wait with the published bands. This site is independent of the Department of Home Affairs.</p>`,
  },
});
