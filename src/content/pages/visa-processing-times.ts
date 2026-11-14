import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'visa-processing-times', group: 'guides', order: 620,
  tool: { kind: 'mini:decision' },
  related: ["australian-visa-fees-2026", "second-instalment", "partner-visa-820-cost", "189-visa-cost"],
  sources: ["ha_processing", "regs", "ha_500"],
  en: {
    slug: 'visa-processing-times', nav: "Visa processing times", card: "Turn the official 50% and 90% times into dates from your lodgement day.",
    title: "Visa Processing Times in Australia: Your Decision Date",
    description: "Australian visa processing times turned into dates: enter the 50% and 90% times from the official tool and your lodgement day to see when a decision could come.",
    h1: "Australian visa processing times, as dates",
    intro: (h) => `Australian visa processing times are published as two figures, 50% and 90%; the calculator turns them into dates from your lodgement day.`,
    resume: (h) => `The Department of Home Affairs publishes, for each visa subclass and stream, the time it took to decide 50% and 90% of the applications finalised in the previous month. These two figures are not a promise for your file: they describe decisions already made, and they move from month to month. Read them as a range: half of the recent applications were decided within the first figure, and nine in ten within the second. The calculator above does the date arithmetic: enter the day you lodged and the two figures shown for your visa in the official tool, and it gives the two dates. If the first date has passed, your file is among the slower half; if the second has passed, it is among the slowest tenth, and it is reasonable to check whether the Department is waiting for something from you.`,
    faqs: (h) => [
      { q: "Are Australian visa processing times guaranteed?", a: `No. The Department publishes how long it took to decide 50% and 90% of last month’s applications. Your own file can take less or more time. The times are averages for the visa and stream, not for your country or your situation. Use the dates the calculator gives as a range, not as a promise.` },
      { q: "What does the 90% processing time mean?", a: `Nine in ten of the applications decided last month were decided within that time from lodgement. One in ten took longer. The remaining tenth includes files waiting for health checks, police certificates or more information from the applicant. The second date is therefore a reasonable point to check your ImmiAccount for requests.` },
      { q: "Do I pay more for faster processing?", a: `The visa application charges in Schedule 1 do not include a fee for faster processing, and this site counts none. Priority processing exists for some visas under ministerial directions, but it is not something an applicant can buy with an extra charge in the Regulations we read.` },
    ],
    body: (h) => `
<h2>Australian visa processing times: how to read them</h2>
<p>The official tool asks for the visa type and stream, then shows the two times. They are given in days for fast visas and in months for the others. Enter months in the calculator; for a time in days, divide by thirty. The times are updated monthly, so a date worked out today can move by the time you check again.</p>
<h2>Where to find the times for each visa</h2>
<p>The Department's figures are loaded by a script on its page. We do not copy them automatically: we read them by hand, visa by visa, and date the reading. The ${h.a('visa-application-time', 'visa application time page')} lists every visa and stream, and the ${h.a('visa-approval-time', 'visa approval time page')} compares a wait with them. The calculator above works from the figures you enter, so you can use the ${h.src('ha_processing', 'official processing time tool')}, which is always the current source.</p>
<h2>What slows a file down</h2>
<ul><li>Missing documents, or a request for more information that waits for your reply.</li><li>Health examinations and police certificates that arrive late.</li><li>Priority rules set by ministerial direction for some visas, such as student visas lodged outside Australia, which the Department names on the visa page.</li></ul>
<h2>The charge and the wait</h2>
<p>The first instalment is paid at lodgement, before the wait starts, and is generally not refunded if you withdraw. The second instalment, where there is one, is requested only when the decision is near: the ${h.a('second-instalment', 'second instalment page')} gives the payment deadline once the request arrives.</p>`,
  },
});
