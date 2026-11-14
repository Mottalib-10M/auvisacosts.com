import { definePage } from '../../lib/guide-types';
import { pair } from '../../lib/times';
const t601 = pair('601');
export default definePage({
  id: 'eta-601-cost', group: 'temporary', order: 440,
  tool: { kind: 'mini:cost-601' },
  mini: { kind: 'mini:times-601', props: { title: 'When a 601 decision could come: the official times' } },
  visa: '601',
  related: ["evisitor-651", "visitor-visa-600-cost", "working-holiday-visa-417-cost", "visa-processing-times"],
  sources: ["regs", "ha_601", "ha_processing"],
  en: {
    slug: 'eta-601-cost', nav: "ETA 601 cost", card: "Electronic Travel Authority: no visa charge, only the app service charge.",
    title: "ETA 601 Cost 2026: The Only Charge Is the App Service Fee",
    description: "ETA 601 cost in 2026: no visa application charge, only the service charge of the official ETA app, per traveller, with who can use it and how long it lasts.",
    h1: "ETA 601 cost: one small service charge",
    intro: (h) => `The ETA 601 cost is ${h.aud(h.C.etaServiceCharge)} per traveller, the service charge of the official app; the visa itself is free.`,
    resume: (h) => `The Electronic Travel Authority, subclass 601, is the short-stay visa for tourists and business visitors who hold a passport from a list of eligible countries and territories. Item 1208A of Schedule 1 sets its application charge at nil, and the second instalment at nil as well. The only payment is the service charge of the Australian ETA app, ${h.aud(h.C.etaServiceCharge)} per application according to the Department's page, read on ${h.read}. A family of four travelling together therefore pays ${h.aud(h.cost({ code: '601', adults: 1, children: 2 }).total)}. The ETA allows stays of up to 3 months at a time. The Department names the Australian ETA app as the way to apply. The calculator above multiplies the service charge by the number of travellers you enter, so that a family sees its total before opening the app. Unofficial websites selling ETAs charge more, and the difference is not a visa charge.`,
    faqs: (h) => [
      { q: "Is the Australian ETA free?", a: `The visa application charge is nil. The official app charges a service fee of ${h.aud(h.C.etaServiceCharge)} per application, which is the only payment. So a family of four pays four service charges. Unofficial websites that sell ETAs at a higher price are not the official app, and the extra paid to them is not a visa charge.` },
      { q: "Do children need their own ETA?", a: `Yes, each traveller needs an ETA, and each application pays the ${h.aud(h.C.etaServiceCharge)} service charge. A family of four therefore pays four service charges through the app. The ETA is linked to the passport, so a new passport means a new ETA. Parents cannot add children to their own ETA.` },
      { q: "How long can I stay on an ETA?", a: `Up to 3 months at a time, according to the Department’s page. The ETA itself carries no charge beyond the ${h.aud(h.C.etaServiceCharge)} app service fee. The ETA can be used for several visits during its validity; the length of each stay is set by the Department when it is granted.` },
    ],
    body: (h) => `
<h2>ETA 601 cost for a family</h2>
${h.scenarios('601')}
<p>Each traveller has a separate ETA, including children, so the service charge applies to each one. Travellers from European countries on the eVisitor list pay nothing at all, and should use the eVisitor instead.</p>
<h2>Who can apply for the 601</h2>
${h.conditions('601')}
<p>You must be outside Australia, hold an eligible passport, and apply on a mobile device with a camera, through the official app.</p>
${h.feeTable('601')}
<h2>ETA processing time</h2>
<p>The Department of Home Affairs published these times for the 601: half of the applications decided last month were decided in ${t601.p50}, and 9 in 10 in ${t601.p90}. The tool above is already filled with them: change the day you applied to see your own dates.</p>`,
  },
});
