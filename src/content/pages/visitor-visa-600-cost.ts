import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'visitor-visa-600-cost', group: 'temporary', order: 430,
  tool: { kind: 'mini:cost-600' },
  mini: { kind: 'mini:decision', props: {"title": "When a 600 decision could come"} },
  visa: '600',
  related: ["eta-601-cost", "evisitor-651", "870-visa-cost", "visa-processing-times"],
  sources: ["regs", "ha_600", "ha_processing"],
  en: {
    slug: 'visitor-visa-600-cost', nav: "Visitor visa 600 cost", card: "Tourist and family visitor visa: outside or inside Australia, Frequent Traveller, Pacific rate.",
    title: "Visitor Visa 600 Cost 2026: Tourist Visa Australia Cost",
    description: "Visitor visa 600 cost in 2026: the charge outside Australia, the higher charge inside, the Frequent Traveller stream, and the cost for a family, per person.",
    h1: "Visitor visa 600 cost: tourist visa Australia cost, per traveller",
    intro: (h) => `The visitor visa 600 cost is ${h.aud(h.V('600').std.base)} per person applying outside Australia, and ${h.aud(h.V('600').onshore!.std)} inside.`,
    resume: (h) => `The Visitor visa, subclass 600, covers tourism, visits to family and business visitor activities for stays of 3, 6 or 12 months. Item 1236 of Schedule 1 charges per person: there is no family application, so a couple with two children lodging from overseas pays four times the base charge, ${h.aud(h.cost({ code: '600', adults: 1, children: 2 }).total)}. In the compilation in force on 1 November 2026, the charge is ${h.aud(h.V('600').std.base)} for an application made outside Australia and ${h.aud(h.V('600').onshore!.std)} for one made inside, for instance to extend a stay. The Frequent Traveller stream has its own, higher charge, given in the conditions below. Holders of a Pacific or Timor-Leste passport pay ${h.aud(h.V('600').pacific!.base)} outside Australia. Representatives of a foreign government applying in that role, and classes of applicants named by the Minister, pay nothing. There is no second instalment.`,
    faqs: (h) => [
      { q: "Why does the 600 cost more when I apply in Australia?", a: `Item 1236 sets ${h.aud(h.V('600').onshore!.std)} for an application made in Australia, against ${h.aud(h.V('600').std.base)} from outside. The difference applies to the Tourist stream, the one that can be applied for onshore. Applying from outside Australia is the cheaper option when your plans allow it. Each traveller pays separately, so the onshore premium is counted once per person.` },
      { q: "Do children pay the full visitor visa charge?", a: `Yes. The 600 has no additional applicant charge: each child applies and pays the same base charge as an adult. A family of four therefore pays four times the base charge, ${h.aud(h.cost({ code: '600', adults: 1, children: 2 }).total)} in total from outside Australia. The calculator multiplies the charge by the number of travellers.` },
      { q: "Is a visitor visa free for some passports?", a: `Holders of passports eligible for the eVisitor pay nothing, and ETA holders pay only the ${h.aud(h.C.etaServiceCharge)} app service charge. Others apply for the 600. Which option you have depends on your passport. The Department's pages list the passports that can use the eVisitor and the ETA.` },
    ],
    body: (h) => `
<h2>Visitor visa 600 cost for a family</h2>
${h.scenarios('600')}
<p>Because each traveller pays, the cost grows with the family. Applying for an extension while in Australia costs about two and a half times the overseas charge; if the trip may run long, ask for the longer stay in the first application.</p>
<h2>Who can apply for the 600</h2>
${h.conditions('600')}
<p>The Tourist stream can be applied for in or outside Australia; the Sponsored Family and Business Visitor streams only outside. Some passport holders can use a free eVisitor or an ETA instead, which costs much less than a 600.</p>
${h.feeTable('600')}
<h2>Visitor visa 600 processing time</h2>
<p>Visitor applications are listed by stream and by place of lodgement in the official tool. Copy the 50% and 90% times for your stream and enter them below with the day you applied.</p>`,
  },
});
