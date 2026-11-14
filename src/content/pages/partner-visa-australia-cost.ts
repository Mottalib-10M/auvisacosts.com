import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'partner-visa-australia-cost', group: 'family', order: 305,
  tool: { kind: 'mini:cost-820', props: { c: 1 } },
  mini: { kind: 'mini:partnerroute', props: { title: 'Engaged first, or partner visa now?', c: 0 } },
  visa: '820',
  related: ['partner-visa', 'partner-visa-820-cost', 'partner-visa-309-cost', 'prospective-marriage-visa-300-cost'],
  sources: ['regs', 'ha_pricing', 'ha_820', 'ha_309', 'ha_300'],
  en: {
    slug: 'partner-visa-australia-cost', nav: 'Partner visa Australia cost', card: 'The whole partner visa bill: applicant, children, Pacific rate, and the engaged route added up.',
    title: 'Partner Visa Australia Cost 2026: The Whole Family Bill',
    description: 'Partner visa Australia cost in 2026: the applicant charge, each child, the Pacific rate, and the 300 then 820 route added up. What the sponsor pays: nothing.',
    h1: 'Partner visa Australia cost, the whole bill',
    intro: (h) => `The partner visa Australia cost is ${h.aud(h.V('820').std.base)} for the applicant, plus ${h.aud(h.V('820').std.addU18)} for each child who applies too.`,
    resume: (h) => `An Australian partner visa is paid once, at lodgement, by the applicant. In Schedule 1 of the Migration Regulations 1994, in the compilation in force on 1 November 2026, the charge is ${h.aud(h.V('820').std.base)} for the applicant on the onshore 820 and 801, on the offshore 309 and 100, and on the Prospective Marriage visa 300. Each dependent child under 18 who joins the application adds ${h.aud(h.V('820').std.addU18)}, and each dependent family member aged 18 or over ${h.aud(h.V('820').std.add18)}. The sponsor pays nothing to the Department. With a passport of a Pacific country or Timor-Leste, the applicant pays ${h.aud(h.V('820').pacific!.base)}. The engaged route is the exception to the single payment: after the 300, the wedding and the move, the 820 is a new application, at ${h.aud(h.V('820').variants![0].fee.base)} for the applicant. The first calculator gives the bill for your family; the second compares the engaged route with applying as a married or de facto couple.`,
    faqs: (h) => [
      { q: 'How much does a partner visa cost in Australia in 2026?', a: `${h.aud(h.V('820').std.base)} for the applicant, from 1 July 2026, on the 820, 309 and 300. A child under 18 adds ${h.aud(h.V('820').std.addU18)}. The charge rises on most 1 July dates, and the amount due is the one in force on the day you lodge.` },
      { q: 'Is the partner visa fee refundable if refused?', a: 'Generally not. The charge pays for the assessment. Regulation 2.12F lists the narrow cases where the first instalment can be refunded, and the Department decides on a written request; withdrawing the application does not bring the charge back, so check eligibility before you pay.' },
      { q: 'Can the partner visa fee be paid in instalments?', a: 'No. The partner visa has a single first instalment, due in full at lodgement for every applicant on the form. There is no second instalment on the partner visas. A payment surcharge applies to some cards, which we do not count.' },
    ],
    body: (h) => `
<h2>Partner visa Australia cost for each family</h2>
${h.table(['Who applies', 'Charge at lodgement'], [0, 1, 2, 3].map((c) => [c === 0 ? 'Applicant alone (the usual case)' : `Applicant and ${c} child${c > 1 ? 'ren' : ''} under 18`, h.aud(h.cost({ code: '820', children: c }).total)]), 'Onshore 820 and 801, standard rate, Schedule 1 item 1124B in force on 1 November 2026.', ['l', 'r'])}
<p>The amounts are the same on the 309 and 100, because the offshore item sets the same charges. The sponsor is not an applicant, so a couple without children pays only the applicant charge.</p>
<h2>The engaged route, both charges added</h2>
<p>A couple who use the ${h.av('300', 'Prospective Marriage visa')} pay its charge first, then, after marrying in Australia, the 820 at the lower rate for a 300 holder who married the sponsor. The second calculator adds both for your family and compares them with a single 309 or 820 charge. The extra cost buys the right to travel to Australia and marry there; it is not a cheaper way in.</p>
${h.feeTable('820')}
<h2>What the charge does not include</h2>
<ul><li>Health examinations by a panel physician, and the chest X-ray where it is required.</li><li>Police certificates from the countries the Department lists for the applicant, based on where they have lived.</li><li>Certified translations of documents that are not in English.</li><li>Any fee of a registered migration agent or lawyer.</li></ul>
<p>These are paid to their providers and vary by country. The Department's ${h.src('ha_pricing', 'visa pricing page')} is the place to confirm the charge before you pay in ImmiAccount. This site is independent of the Department of Home Affairs and the Australian Government.</p>`,
  },
});
