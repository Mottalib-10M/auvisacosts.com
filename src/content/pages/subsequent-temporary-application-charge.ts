import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'subsequent-temporary-application-charge', group: 'guides', order: 680,
  tool: { kind: 'mini:stac' },
  mini: { kind: 'mini:cost-500' },
  related: ["student-visa-500-cost", "485-visa-cost", "australian-visa-fees-2026", "visa-cost-for-a-family"],
  sources: ["regs", "ha_estimator", "ha_500"],
  en: {
    slug: 'subsequent-temporary-application-charge', nav: "Subsequent temporary application charge", card: "The $700 per applicant charged on some applications made in Australia.",
    title: "Subsequent Temporary Application Charge: When $700 Applies",
    description: "Subsequent temporary application charge in 2026: when the $700 per applicant is added to a temporary visa lodged in Australia, and the conditions of 2.12C.",
    h1: "Subsequent temporary application charge",
    intro: (h) => `The subsequent temporary application charge is ${h.aud(h.C.subsequentTemporary)} per applicant, added to some temporary visas lodged in Australia.`,
    resume: (h) => `The subsequent temporary application charge is a component of the first instalment set by regulation 2.12C of the Migration Regulations 1994, at ${h.aud(h.C.subsequentTemporary)}. It is payable by an applicant only when every one of these conditions is met: the visa applied for is one specified by the Minister in an instrument; the applicant is in Australia when applying; the applicant holds, or last held, a substantive visa that is also specified in an instrument; and the applicant was in Australia when applying for that previous visa. Visas granted without an application, by operation of law or by a ministerial intervention do not count as the previous visa. The charge is per applicant, so each family member who meets the conditions pays it in addition to the base or additional applicant charge. It is not payable when the base charge of the application is nil.`,
    faqs: (h) => [
      { q: "How much is the subsequent temporary application charge?", a: `${h.aud(h.C.subsequentTemporary)} per applicant, under regulation 2.12C(6) of the Migration Regulations 1994. It is paid with the first instalment at lodgement, together with the base charge and the family charges. It does not depend on the visa amount: whether the base charge is high or low, the component is the same for each applicant who meets the conditions set in regulation 2.12C.` },
      { q: "Do children pay the subsequent temporary application charge?", a: `The charge is per applicant who meets the conditions, children included, in addition to their own additional applicant charge. A family of four who all meet the conditions pays it four times. Each child counted at the child rate also pays it in full, so the charge adds up quickly for a large family extending a temporary stay.` },
      { q: "Is the subsequent temporary application charge payable on a first visa in Australia?", a: `Not when the previous visa was applied for outside Australia: the charge needs both the current and the previous application to have been made in Australia. It is meant for people who keep extending their stay in Australia from one temporary visa to the next. The calculator asks you both questions before adding it.` },
    ],
    body: (h) => `
<h2>Subsequent temporary application charge: the four conditions</h2>
<ol><li>The new visa is a temporary visa named in the Minister's instrument.</li><li>You are in Australia on the day you apply.</li><li>Your current or last substantive visa is a visa named in the instrument.</li><li>You applied for that previous visa while in Australia.</li></ol>
<p>The calculator checks the second and fourth conditions with you; the list of visas belongs to the instrument, and the Department's ${h.src('ha_estimator', 'Visa Pricing Estimator')} applies it to your case.</p>
<h2>An example with a student visa</h2>
<p>A student who arrived on a student visa granted offshore and applies for a new student visa in Australia does not meet the fourth condition: the previous visa was applied for outside Australia. A student who already extended once in Australia and applies again in Australia meets it, and pays ${h.aud(h.C.subsequentTemporary)} on top of the ${h.aud(h.V('500').std.base)} base charge if both visas are on the list. The second calculator gives the student visa total; add the charge to it when it applies.</p>
<h2>What the charge is not</h2>
<p>It is not the non-internet charge of ${h.aud(h.C.nonInternet)}, which applies to paper applications where an online one is possible, and it is not a penalty: it is a component of the first instalment, paid at lodgement.</p>`,
  },
});
