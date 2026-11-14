import { definePage } from '../../lib/guide-types';
import { timesRows, TIMES_HEAD, timesCaption, pair } from '../../lib/times';
const t190 = pair('190'), pt = pair('189', 'Points-Tested'), st = pair('491', 'State/Territory Government Nominated Regional');
export default definePage({
  id: '190-visa-processing-time', group: 'skilled', order: 122,
  tool: { kind: 'mini:times-190' },
  mini: { kind: 'mini:cost-190', props: { title: 'What the 190 costs for your family' } },
  visa: '190',
  related: ['190-visa-cost', '491-visa-processing-time', '191-visa-processing-time', 'skilled-visa-costs-compared'],
  sources: ['ha_processing', 'ha_190', 'regs'],
  en: {
    slug: '190-visa-processing-time', nav: '190 visa processing time', card: 'Skilled Nominated visa: the official 50% and 90% times, as dates, against the 189 and 491.',
    title: '190 Visa Processing Time: Skilled Nominated, as Dates',
    description: '190 visa processing time in November 2026: 8 months for half of the Skilled Nominated files and 16 months for nine in ten. Your dates, and the 189 and 491.',
    h1: '190 visa processing time, as dates',
    intro: () => `The 190 visa processing time is ${t190.p50} for half of the Skilled Nominated applications and ${t190.p90} for nine in ten.`,
    resume: () => `The Skilled Nominated visa, subclass 190, is a permanent points-tested visa for workers nominated by a state or territory government. The processing time counts from the day the visa application is lodged, after the invitation, not from the expression of interest or the state nomination. In the Department of Home Affairs processing times guide updated on 2 November 2026, which we read on 14 November 2026, half of the 190 applications decided in the previous month had been decided within ${t190.p50}, and nine in ten within ${t190.p90}. The independent 189 in its points-tested stream was faster at ${pt.p50} and ${pt.p90}, and the regional 491 with a state nomination slower at ${st.p50} and ${st.p90}. The calculator above gives the two dates that follow from your lodgement day; the second calculator gives the charge for your family. The figures describe last month's decisions and change monthly.`,
    faqs: () => [
      { q: 'How long does the 190 visa take after the invitation?', a: `You have 60 days from the invitation to lodge. From lodgement, half of the files were decided within ${t190.p50} and nine in ten within ${t190.p90} in the update of 2 November 2026. The wait before the invitation, for the state's nomination, depends on each state's program and is not part of these figures.` },
      { q: 'Why is the 190 slower than the 189 right now?', a: `The published figures show ${pt.p50} for half of the 189 points-tested files against ${t190.p50} for the 190. The Department does not give a reason per visa. Processing follows ministerial directions that set priorities between skilled visas, and the number of applications on hand differs between the two.` },
      { q: 'Can I speed up my 190 application?', a: 'There is no fee for faster processing. A complete application, with the skills assessment, English result, health checks and police certificates ready, avoids the delays of a request for information. Answer any request quickly through ImmiAccount, and keep your contact details there up to date.' },
    ],
    body: (h) => `
<h2>190 visa processing time against the other skilled visas</h2>
${h.table(TIMES_HEAD, timesRows(['190', '189', '491', '191']), timesCaption, ['l', 'r', 'r'])}
<p>The 190 and the 491 are both nominated by a state or territory, but the 491 is provisional and regional. Its holders later apply for the permanent ${h.av('191', '191')}, which has its own processing time. The ${h.a('491-visa-processing-time', '491 processing time page')} gives both streams.</p>
<h2>Where the time goes on a 190 application</h2>
<ul><li>Before lodgement: the skills assessment, the English test, the expression of interest in SkillSelect and the state nomination. None of these is in the published time.</li><li>After lodgement: the Department checks the claims behind your points, the health examinations and the police certificates of every applicant.</li><li>At the end: a second instalment of ${h.aud(h.V('190').second!.adultNoEnglish!)} is requested for each adult without functional English, and the visa is granted once it is paid.</li></ul>
<h2>The 190 cost during the wait</h2>
<p>The 190 charge is ${h.aud(h.V('190').std.base)} for the main applicant, ${h.aud(h.V('190').std.add18)} for a partner and ${h.aud(h.V('190').std.addU18)} per child under 18, paid at lodgement. It is not refunded if the visa is refused. The second calculator adds the amounts for your family, and the ${h.a('190-visa-cost', '190 visa cost page')} explains each line.</p>
<h2>Reading the dates</h2>
<p>If the first date has passed, your application is among the slower half of those lodged on the same day; if the second date has passed, it is among the slowest tenth. That is a reason to check ImmiAccount for a request you might have missed, not a sign of refusal. The ${h.a('visa-approval-time', 'visa approval time page')} compares your wait with every visa in the guide. This site is independent of the Department of Home Affairs and gives no migration advice.</p>`,
  },
});
