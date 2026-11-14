import { definePage } from '../../lib/guide-types';
import { pair } from '../../lib/times';
const t651 = pair('651');
export default definePage({
  id: 'evisitor-651', group: 'temporary', order: 450,
  tool: { kind: 'mini:cost-651' },
  mini: { kind: 'mini:times-651', props: { title: 'When a 651 decision could come: the official times' } },
  visa: '651',
  related: ["eta-601-cost", "visitor-visa-600-cost", "working-holiday-visa-417-cost", "visa-processing-times"],
  sources: ["regs", "ha_651", "ha_processing"],
  en: {
    slug: 'evisitor-651', nav: "eVisitor 651", card: "eVisitor: a free visitor visa for passports of European countries.",
    title: "eVisitor 651 Cost 2026: The Free Visitor Visa for Europeans",
    description: "eVisitor 651 cost in 2026: free for passport holders of eligible European countries, stays of up to 3 months, and what the alternatives cost for others.",
    h1: "eVisitor 651: a free visitor visa",
    intro: (h) => `The eVisitor 651 costs nothing to apply for; other visitors pay ${h.aud(h.V('600').std.base)} for a 600 or ${h.aud(h.C.etaServiceCharge)} for an ETA.`,
    resume: (h) => `The eVisitor, subclass 651, is the visitor visa for citizens of European countries on the eligible list, from Andorra, Austria and Belgium onwards. The Department's page states the cost in one word: free. There is no application charge, no second instalment and no service charge, read on ${h.read}. The visa allows stays of up to 3 months at a time for tourism or business visitor activities, with no work. A family of four pays nothing, against ${h.aud(h.cost({ code: '600', adults: 1, children: 2 }).total)} for four Visitor visas lodged from outside Australia. Travellers who are not eligible use the ETA or the 600. Applications are made online in ImmiAccount, and each traveller needs their own grant linked to their passport. Websites that ask for a fee to obtain an eVisitor are not the Department. The calculator above shows the nil total for any family size you enter.`,
    faqs: (h) => [
      { q: "Is the eVisitor really free?", a: `Yes. The Department’s page gives the cost as free, and there is no app or service charge. Applications are made online through ImmiAccount. Websites that charge for an eVisitor are not the Department and add a fee of their own. The eVisitor is linked to the passport used to apply.` },
      { q: "Can I work on an eVisitor?", a: `No. It is for tourism and business visitor activities; work needs a different visa, such as a working holiday visa. Short business visitor activities, such as attending a conference or negotiating a contract, are allowed. Paid work for an Australian employer is not.` },
      { q: "How long can I stay on an eVisitor?", a: `Up to 3 months at a time, according to the Department’s page. The eVisitor can be used for several visits during its validity. A longer stay needs another visa, such as a visitor visa 600, which carries a charge. The length of each stay is set when the eVisitor is granted.` },
    ],
    body: (h) => `
<h2>eVisitor 651 cost compared with other visitor visas</h2>
${h.scenarios('651')}
<p>Because the eVisitor is free, it is worth checking eligibility before paying for any other visitor visa.</p>
<h2>Who can apply for the 651</h2>
${h.conditions('651')}
<p>Apply from outside Australia with a passport of an eligible country. The Department asks you to check every detail before you submit, including your name as it is spelt in the passport.</p>
${h.feeTable('651')}
<h2>eVisitor processing time</h2>
<p>The Department of Home Affairs published these times for the 651: half of the applications decided last month were decided in ${t651.p50}, and 9 in 10 in ${t651.p90}. The tool above is already filled with them: change the day you applied to see your own dates.</p>`,
  },
});
