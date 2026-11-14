import { definePage } from '../../lib/guide-types';
import { timesRows, TIMES_HEAD, pair } from '../../lib/times';
const tour = pair('600', 'Tourist'), he = pair('500', 'Higher Education Sector'), pt = pair('189', 'Points-Tested'), p820 = pair('820');
export default definePage({
  id: 'visa-application-time', group: 'guides', order: 615,
  tool: { kind: 'mini:times', props: { r: 35 } },
  related: ['visa-approval-time', 'visa-processing-times', 'australian-visa-fees-2026', '186-visa-processing-time'],
  sources: ['ha_processing', 'ha_parent_queue', 'regs'],
  en: {
    slug: 'visa-application-time', nav: 'Visa application time', card: 'How long each Australian visa application takes, from a day to years, with your dates.',
    title: 'Visa Application Time in Australia: Every Visa, as Dates',
    description: 'Visa application time for every Australian visa: the official 50% and 90% times for 50 visas and streams, from under a day to years, turned into your dates.',
    h1: 'Visa application time for every Australian visa',
    intro: () => `Visa application time in Australia runs from under a day for an eVisitor to ${tour.p90} for nine in ten tourist visas and ${p820.p90} for a partner visa.`,
    resume: () => `How long a visa application takes in Australia depends first on the visa, then on the stream. The Department of Home Affairs publishes two times for each: the time within which 50% of the applications decided in the previous month were decided, and the time for 90%. We read every visa and stream in its processing times guide, updated on 2 November 2026, on 14 November 2026. The spread is wide. An eVisitor or an ETA was decided in less than a day for nine in ten applicants. A tourist visa took ${tour.p50} for half of the files and ${tour.p90} for nine in ten; a higher education student visa ${he.p50} and ${he.p90}; a points-tested 189 ${pt.p50} and ${pt.p90}; a partner visa 820 ${p820.p50} and ${p820.p90}. Parent visas are queued and take years. Choose your visa and stream in the calculator, enter the day you lodge, and it gives the two dates.`,
    faqs: () => [
      { q: 'How long does an Australian visa application take?', a: `From under a day to several years. In the November 2026 guide, nine in ten tourist visas were decided within ${tour.p90}, student visas in the higher education sector within ${he.p90}, skilled 189 visas within ${pt.p90} and onshore partner visas within ${p820.p90}. The table on this page lists every visa and stream.` },
      { q: 'Does the application time start when I pay?', a: 'The published times count from the day a valid application is lodged, which for most visas is the day it is submitted and paid in ImmiAccount. Time spent preparing documents, booking health checks or waiting for an invitation comes before and is not counted.' },
      { q: 'Why does my visa application take longer than the published time?', a: 'The times describe last month’s decisions, so they move. A single file can also wait for health results, police certificates, a request for information or, for some visas, a place in the yearly program. Check ImmiAccount for requests first, then the conditions on your visa page.' },
    ],
    body: (h) => `
<h2>Visa application time for visitors, students and workers</h2>
${h.table(TIMES_HEAD, timesRows(['651', '601', '600', '417', '462', '500', '485', '400', '408', '155']), 'Department of Home Affairs processing times guide, update of 2 November 2026, read on 14 November 2026.', ['l', 'r', 'r'])}
<p>The short-stay visas are decided in days or weeks. Within the student visa, the sector matters: half of the vocational education and training files took months, against weeks for university courses. The ${h.av('600', 'visitor visa page')} and the ${h.av('500', 'student visa page')} give the charge for each.</p>
<h2>Skilled and employer visas</h2>
${h.table(TIMES_HEAD, timesRows(['189', '190', '491', '191', '482', '186', '494', '858']), 'Same source and date.', ['l', 'r', 'r'])}
<p>The skilled and employer visas count from lodgement, after the invitation or the nomination. The ${h.a('186-visa-processing-time', '186 page')}, the ${h.a('482-visa-processing-time', '482 page')} and the ${h.a('190-visa-processing-time', '190 page')} turn each stream into dates.</p>
<h2>Partner, child and parent visas</h2>
${h.table(TIMES_HEAD, timesRows(['820', '801', '309', '100', '300', '101', '802', '870']), 'Same source and date. Permanent parent visas are queued: see below.', ['l', 'r', 'r'])}
<p>The permanent parent visas have no monthly time: the Department estimates years for a new application and publishes the queue dates it has released. The ${h.a('parent-visa-processing-time', 'parent visa processing time page')} gives them.</p>
<h2>What the application time does not include</h2>
<ul><li>Preparation: skills assessments, English tests, relationship evidence and translations, often the longest part.</li><li>Invitations and nominations for skilled and employer visas, which come before lodgement.</li><li>Your own delays: each day the Department waits for a document is part of the published time for your file.</li></ul>
<p>To check whether a wait is still usual, use the ${h.a('visa-approval-time', 'visa approval time page')}. To price the application, the ${h.a('home', 'visa cost calculator')} adds the charge for each person. This site is independent of the Department of Home Affairs and copies its figures on the date shown.</p>`,
  },
});
