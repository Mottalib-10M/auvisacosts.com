import { definePage } from '../../lib/guide-types';
import { timesRows, TIMES_HEAD, timesCaption, pair } from '../../lib/times';
const t309 = pair('309'), t100 = pair('100'), t300 = pair('300'), t820 = pair('820');
export default definePage({
  id: '309-visa-processing-time', group: 'family', order: 322,
  tool: { kind: 'mini:times-309' },
  mini: { kind: 'mini:cost-309', props: { title: 'What the 309 and 100 cost together' } },
  visa: '309',
  related: ['partner-visa-309-cost', '820-visa-processing-time', 'prospective-marriage-visa-300-cost', 'partner-visa'],
  sources: ['ha_processing', 'ha_309', 'regs'],
  en: {
    slug: '309-visa-processing-time', nav: '309 visa processing time', card: 'Offshore partner visa: the official times for the 309, then the 100, as dates.',
    title: '309 Visa Processing Time: Offshore Partner, Then 100',
    description: '309 visa processing time in November 2026: 21 months for half of the offshore partner files and 35 months for nine in ten, then the permanent 100. Your dates.',
    h1: '309 visa processing time from outside Australia',
    intro: () => `The 309 visa processing time is ${t309.p50} for half of the offshore partner applications and ${t309.p90} for nine in ten.`,
    resume: () => `The offshore partner visa is applied for from outside Australia by the spouse or de facto partner of an Australian citizen, permanent resident or eligible New Zealand citizen. Like the onshore route, it is one application for two visas: the provisional Partner visa, subclass 309, then the permanent Partner (Migrant) visa, subclass 100. In the Department of Home Affairs processing times guide updated on 2 November 2026, read on 14 November 2026, half of the 309 applications decided in the previous month had taken ${t309.p50} or less and nine in ten ${t309.p90}. The permanent 100 stage showed ${t100.p50} and ${t100.p90}. The 90% time is longer than for the onshore 820, at ${t820.p90}. The applicant waits outside Australia, though a visitor visa can be applied for separately to visit during the wait. The calculator gives the two dates that follow from your lodgement day.`,
    faqs: () => [
      { q: 'How long does a 309 visa take in 2026?', a: `In the update of 2 November 2026, half of the 309 applications were decided within ${t309.p50} and nine in ten within ${t309.p90}. You must be outside Australia when the 309 is granted, so plan any visit to Australia around the decision.` },
      { q: 'Is the 309 slower than the 820?', a: `For the slowest files, yes: nine in ten 309 decisions took up to ${t309.p90}, against ${t820.p90} for the 820. Half of the files took ${t309.p50} on both routes. The two routes cost the same, so where the applicant is when applying decides the route, not the price.` },
      { q: 'Can I visit Australia while my 309 is processed?', a: 'You can apply for a visitor visa, which is assessed on its own merits and paid separately. The 309 must be granted while you are outside Australia, so you leave before the decision. The Department can contact you to make sure you are offshore at that time.' },
    ],
    body: (h) => `
<h2>309 visa processing time and the other partner routes</h2>
${h.table(TIMES_HEAD, timesRows(['309', '100', '820', '801', '300']), timesCaption, ['l', 'r', 'r'])}
<p>The Prospective Marriage visa (300) is the route for an engaged couple who will marry in Australia; it took ${t300.p50} for half of its files and ${t300.p90} for nine in ten. After the wedding, the holder applies in Australia for the 820 at a much lower charge.</p>
<h2>The 309 cost, paid once</h2>
<p>The charge covers both the 309 and the 100: ${h.aud(h.V('309').std.base)} for the applicant and ${h.aud(h.V('309').std.addU18)} per dependent child, paid at lodgement. The Australian sponsor pays nothing. With a passport of a Pacific country or Timor-Leste, the applicant pays ${h.aud(h.V('309').pacific!.base)}. The second calculator adds your family; the ${h.a('partner-visa-309-cost', 'partner visa 309 cost page')} has the full table.</p>
<h2>What can lengthen a 309 file</h2>
<ul><li>Evidence of the relationship that is thin or out of date; the Department may ask for more.</li><li>Police certificates from every country where the applicant lived, and health examinations booked late.</li><li>A move to Australia before the grant: the 309 must be granted while you are outside the country.</li></ul>
<h2>Reading your 309 dates</h2>
<p>The big date in the tool is when nine in ten applications lodged on your day would be decided at last month's pace; the smaller “Half decided by” date is when half would be. Past the big date, check ImmiAccount for a request you may have missed. The ${h.a('partner-visa', 'partner visa page')} compares the routes, and the ${h.a('visa-approval-time', 'visa approval time page')} places any wait in the published bands. This site is independent of the Department of Home Affairs.</p>`,
  },
});
