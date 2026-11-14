import { definePage } from '../../lib/guide-types';
import { TIMES, months, said, rowLabel, rowIdx, pair } from '../../lib/times';
const band = (lo: number, hi: number) => TIMES.filter((r) => !['Nomination', 'Sponsorship'].includes(r.stream) && months(r.p90) >= lo && months(r.p90) < hi)
  .sort((a, b) => months(a.p90) - months(b.p90)).map((r) => `<li>${rowLabel(r)}: ${said(r.p90)}</li>`).join('');
const p820 = pair('820'), tour = pair('600', 'Tourist');
export default definePage({
  id: 'visa-approval-time', group: 'guides', order: 617,
  tool: { kind: 'mini:waited', props: { r: rowIdx('820'), w: 12 } },
  mini: { kind: 'mini:deadline', props: { title: 'Paying the second instalment before approval' } },
  related: ['visa-application-time', 'visa-processing-times', 'second-instalment', '820-visa-processing-time'],
  sources: ['ha_processing', 'regs'],
  en: {
    slug: 'visa-approval-time', nav: 'Visa approval time', card: 'Is your wait still usual? Your months against the official 50% and 90% approval times.',
    title: 'Visa Approval Time in Australia: Is Your Wait Usual?',
    description: 'Visa approval time in Australia: check your wait against the official 50% and 90% times of 50 visas and streams, each approved in days, months or years.',
    h1: 'Visa approval time: is your wait still usual?',
    intro: () => `Visa approval time in Australia ranges from under a day to years; enter your visa and your months of waiting to see where you stand.`,
    resume: () => `A visa approval, or grant, comes at the end of the processing time, and the Department of Home Affairs publishes that time as two figures per visa and stream: within how long 50% and 90% of the applications decided in the previous month were decided. We read them all in its processing times guide, updated on 2 November 2026, on 14 November 2026. The calculator compares your wait with them. Below the 50% time, your wait is usual. Between the two, your file is among the slower half but still within the time of nine in ten. Past the 90% time, it is among the slowest tenth: still not a sign of refusal, but a reason to check ImmiAccount for a request for information, to make sure health and police checks are done, and to keep your contact details current. As examples, nine in ten tourist visas were approved within ${tour.p90} and nine in ten onshore partner visas within ${p820.p90}.`,
    faqs: () => [
      { q: 'How do I know my visa is approved?', a: 'The Department sends a grant letter to the email address in ImmiAccount, and the application status changes to Finalised. The visa details, with its conditions and dates, can then be checked at any time in VEVO, the Department’s online visa verification service.' },
      { q: 'My visa is taking longer than the 90% time. What can I do?', a: 'Check ImmiAccount for a request for information or for health examinations still pending, and answer any request quickly. The Department says it contacts applicants when it needs something. A complaint or enquiry form exists on its website; it does not move a file ahead of others.' },
      { q: 'Is a visa approved faster if I pay more?', a: 'No. The application charges in Schedule 1 have no fee for faster approval. Some visas are processed in a priority order set by ministerial directions, which the Department publishes; an applicant cannot buy a place in it, whatever an intermediary claims.' },
    ],
    body: (h) => `
<h2>Visa approval time in days: nine in ten within a month</h2>
<ul>${band(0, 1)}</ul>
<p>These are the visas a traveller can apply for close to the trip, though the Department advises applying well ahead. The times are for nine in ten files; most are approved faster.</p>
<h2>Approval within a year</h2>
<ul>${band(1, 12)}</ul>
<h2>Approval after a year or more</h2>
<ul>${band(12, 1000)}</ul>
<p>The partner, child and employer permanent visas are in this group. Parent visas are not listed: they are queued, with estimates of years for new applications, on the ${h.a('parent-visa-processing-time', 'parent visa processing time page')}.</p>
<h2>What happens just before approval</h2>
<p>For visas with a second instalment, the Department sends a payment request when the decision is near, and the visa is granted only once it is paid: within ${h.C.secondInstalmentNoticeDaysInAustralia} days for a notice sent in Australia, ${h.C.secondInstalmentNoticeDaysOther} days otherwise. The second calculator gives the last day to pay. The ${h.a('second-instalment', 'second instalment page')} lists the visas concerned.</p>
<p>The bands on this page compare a wait with the times published for last month's decisions. They say nothing about the merits of an application. To see dates from your lodgement day rather than months, use the ${h.a('visa-application-time', 'visa application time page')}. This site is independent of the Department of Home Affairs.</p>`,
  },
});
