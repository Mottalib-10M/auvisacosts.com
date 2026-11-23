import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'australian-visa-fees-2026', group: 'guides', order: 610,
  tool: { kind: 'mini:cost' },
  related: ["189-visa-cost", "partner-visa-820-cost", "student-visa-500-cost", "visa-cost-for-a-family"],
  sources: ["regs", "regs_downloads", "ha_pricing", "ha_estimator"],
  en: {
    slug: 'australian-visa-fees-2026', nav: "Visa fees 2026, all subclasses", card: "Every visa application charge in force, in one table, with family members.",
    title: "Visa Fees 2026 in Australia: Every Subclass in One Table",
    description: "Australian visa fees 2026 for 29 subclasses in one table: main applicant, adult and child joining, second instalment, from the Migration Regulations in force.",
    h1: "Australian visa fees 2026, all subclasses",
    intro: (h) => `Australian visa fees in 2026 range from nil for an eVisitor to ${h.aud(h.V('820').std.base)} for a partner visa and ${h.aud(h.cost({ code: '143', adults: 0, children: 0 }).total)} for a contributory parent.`,
    resume: (h) => `The visa application charges in force since 1 July 2026 are written in Schedule 1 of the Migration Regulations 1994, one item per visa class. We read the compilation in force on 1 November 2026, which includes every amendment registered up to that day, and copied the amounts for the main applicant, for a family member aged 18 or over, for a child under 18 and for the second instalment. The table below gives the standard rates; lower rates exist for Pacific and Timor-Leste passports, for students from ten ASEAN countries, for holders of certain earlier visas and for classes of applicants named by the Minister. The visas that cost the most are not always the permanent ones: a contributory parent pays ${h.aud(h.V('143').second!.perApplicant!)} per adult before grant, while a permanent 191 costs ${h.aud(h.V('191').std.base)} to the main applicant. Use the calculator above to add the charges for your own family.`,
    faqs: (h) => [
      { q: "When do Australian visa fees go up?", a: `The charges in Schedule 1 are changed by amending regulations, and the yearly increase has taken effect on 1 July. The rates on this page are those in force from 1 July 2026, read in the compilation of 1 November 2026. Check the date of the compilation shown here before you pay.` },
      { q: "What will Australian visa fees be in 2027?", a: `Until 30 June 2027, the same as in this table: the rates in force since 1 July 2026. The rates from 1 July 2027 are not yet published; they will be set by an amending regulation registered on the Federal Register of Legislation, and this page will show them once it is registered.` },
      { q: "Which Australian visa is the most expensive?", a: `The contributory parent visas: ${h.aud(h.cost({ code: '143', adults: 0, children: 0 }).total)} for one parent on the 143 or the 864, most of it in the second instalment. Among other visas, the partner visa at ${h.aud(h.V('820').std.base)} has the highest base charge. For a family, the employer and skilled visas can approach these amounts once each adult is counted.` },
      { q: "Are Australian visa fees paid in Australian dollars?", a: `The amounts are set in Australian dollars. Regulation 5.36 deals with the countries and currencies in which an instalment may be paid. Card payments may attract a surcharge; the calculator counts the charge set in the Regulations only, in Australian dollars, for every applicant on the form.` },
    ],
    body: (h) => `
<h2>Australian visa fees 2026 by subclass</h2>
${h.allFees()}
<p>Read the table by row: a family pays the main applicant charge once, then the adult or child amount for each person who joins the same application. Where the table says the visa applies separately, every traveller lodges and pays their own application. The second instalment is paid only before grant and only by the people the item names.</p>
<h2>What changes the amount you pay</h2>
<ul><li><strong>Where you apply</strong>: a visitor visa lodged in Australia costs ${h.aud(h.V('600').onshore!.std)} instead of ${h.aud(h.V('600').std.base)}.</li><li><strong>Your passport</strong>: Pacific and Timor-Leste passports pay lower charges on most visas since 1 July 2026, see the ${h.a('pacific-visa-rates', 'Pacific rates')}.</li><li><strong>Your previous visa</strong>: some applicants in Australia pay the ${h.a('subsequent-temporary-application-charge', 'subsequent temporary application charge')} of ${h.aud(h.C.subsequentTemporary)}.</li><li><strong>The way you apply</strong>: a paper application where an online one is possible adds ${h.aud(h.C.nonInternet)}.</li><li><strong>English</strong>: on skilled and employer visas, each adult without functional English pays a ${h.a('second-instalment', 'second instalment')}.</li></ul>
<h2>When the fees change</h2>
<p>The charges are increased by amending regulations, usually from 1 July. A change is shown here only once it is registered on the Federal Register of Legislation, with its start date. The amount that applies is the one in force on the day you lodge, not the day you started preparing.</p>
<h2>Australian visa fees in 2027</h2>
<p>Every amount in the table applies until 30 June 2027, so it is also the price of an application lodged between January and June 2027. The fees for the 2027-28 program year are not published yet. They will come in an amending regulation to Schedule 1, registered on the ${h.src('regs', 'Federal Register of Legislation')}, in recent years with effect from 1 July. This table and the calculator will move to the new amounts as soon as the regulation is registered.</p>`,
  },
});
