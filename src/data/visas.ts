/**
 * Visa application charges read on 13 November 2026 in the compilation of the Migration Regulations 1994
 * in force on 1 November 2026 (Schedule 1, item given in `item`). Amounts in Australian dollars.
 * `std` = "any other applicant"; `pacific` = applicant with a passport of a Pacific-regional country
 * (reg. 1.03: Micronesia, Fiji, Kiribati, Nauru, Palau, Papua New Guinea, Marshall Islands, Samoa,
 * Solomon Islands, Timor-Leste, Tonga, Tuvalu, Vanuatu). `add18` and `addU18` = additional applicant
 * charge for a family member aged 18 or more / under 18 who joins the application.
 * Conditions: our summary of the item and of the Home Affairs visa page (CC BY 3.0 AU), never their wording.
 */
export interface Fee { base: number; add18: number; addU18: number }
export interface Variant { id: string; label: string; fee: Fee; pacific?: Fee; note?: string; secondPerAdult?: number }
export type Family = 'visit' | 'study' | 'work' | 'skilled' | 'partner' | 'parent' | 'child' | 'return';
export interface Second {
  /** Each applicant aged 18 or more at application assessed as not having functional English. */
  adultNoEnglish?: number;
  /** Same, for the primary applicant when the amount differs (186, 494). */
  primaryNoEnglish?: number;
  /** Paid by every applicant before grant (parent visas). */
  perApplicant?: number;
  /** Dependent child under 18 at application, when a lower amount applies. */
  perChild?: number;
  /** 870 visa: second instalment for a stay of up to 5 years (item 1239). */
  perApplicantLong?: number;
}
export interface Visa {
  code: string; name: string; short: string; item: string; family: Family;
  std: Fee; pacific?: Fee; variants?: Variant[];
  /** Visitor visa: higher charge when the application is made in Australia. */
  onshore?: { std: number; pacific: number };
  /** Family members cannot join: each person pays the base charge on a separate application. */
  separate?: boolean;
  second?: Second;
  /** Charges outside the Regulations stated by Home Affairs on the visa page. */
  extra?: { label: string; amount: number }[];
  permanent: boolean; stay?: string; where: string;
  conditions: string[];
}
const F = (base: number, add18: number, addU18: number): Fee => ({ base, add18, addU18 });

export const VISAS: Visa[] = [
  { code: '600', name: 'Visitor visa (subclass 600)', short: '600 visitor visa', item: '1236', family: 'visit', std: F(250, 0, 0), pacific: F(205, 0, 0), onshore: { std: 630, pacific: 515 }, separate: true, permanent: false,
    stay: '3, 6 or 12 months', where: 'In or outside Australia (Tourist stream); outside for the Sponsored Family and Business Visitor streams',
    conditions: ['A genuine visit for tourism, family or business meetings, not work', 'Enough money for the stay and the trip home', 'The Frequent Traveller stream costs more: $1,845 ($1,515 with a Pacific passport)'] },
  { code: '601', name: 'Electronic Travel Authority (subclass 601)', short: 'ETA 601', item: '1208A', family: 'visit', std: F(0, 0, 0), separate: true, extra: [{ label: 'Service charge of the Australian ETA app', amount: 20 }], permanent: false,
    stay: 'Up to 3 months at a time', where: 'Outside Australia, through the Australian ETA app',
    conditions: ['A passport from one of the eligible countries and territories', 'Apply on a phone with a camera through the official app', 'The visa itself is free; only the app service charge is paid'] },
  { code: '651', name: 'eVisitor (subclass 651)', short: 'eVisitor 651', item: '1236 (Class FA, eVisitor)', family: 'visit', std: F(0, 0, 0), separate: true, permanent: false,
    stay: 'Up to 3 months at a time', where: 'Outside Australia',
    conditions: ['A passport of a European country on the eligible list', 'No charge to apply', 'Tourism or business visits, no work'] },
  { code: '500', name: 'Student visa (subclass 500)', short: '500 student visa', item: '1222', family: 'study', std: F(2500, 1530, 500), pacific: F(745, 555, 185),
    variants: [{ id: 'reduced', label: 'Passport of an ASEAN country listed in item 1222, or an English-language (ELICOS) or non-award course', fee: F(2050, 1255, 410) }],
    permanent: false, stay: 'Up to 6 years, in line with the enrolment', where: 'Outside Australia, unless an exemption lets you apply inside',
    conditions: ['A Confirmation of Enrolment (CoE) in a registered course', 'Overseas Student Health Cover for the whole stay', 'School students must be at least 6 years old'] },
  { code: '485', name: 'Temporary Graduate visa (subclass 485)', short: '485 visa', item: '1229', family: 'study', std: F(5750, 2875, 1450), pacific: F(2360, 1180, 595),
    variants: [{ id: 'phe', label: 'Second application in the Post-Higher Education Work stream by a current PHE visa holder', fee: F(2265, 1140, 575), pacific: F(930, 465, 235) }],
    permanent: false, where: 'In or outside Australia, depending on the student visa held',
    conditions: ['Hold, or have recently held, an eligible student visa', 'Aged 35 or younger (under 50 with a research master’s, a doctorate, or a Hong Kong or BN(O) passport)', 'Nominate one stream only'] },
  { code: '482', name: 'Skills in Demand visa (subclass 482)', short: '482 visa', item: '1240', family: 'work', std: F(4015, 4015, 1005), pacific: F(3290, 3290, 825),
    permanent: false, where: 'In or outside Australia, not in immigration clearance',
    conditions: ['A nomination by an approved employer sponsor', 'Adult family members pay the same amount as the main applicant', 'Employer charges (nomination fee, training levy) are paid by the employer and are not counted here'] },
  { code: '186', name: 'Employer Nomination Scheme visa (subclass 186)', short: '186 visa', item: '1114B', family: 'work', std: F(6140, 3070, 1535), pacific: F(5035, 2515, 1260),
    second: { primaryNoEnglish: 9800, adultNoEnglish: 4890 }, extra: [{ label: 'Employer nomination fee, Direct Entry stream (paid by the employer, reg. 5.37)', amount: 540 }],
    permanent: true, where: 'In or outside Australia, not in immigration clearance',
    conditions: ['A position nominated by an approved employer', 'Temporary Residence Transition, Direct Entry or Labour Agreement stream', 'Nomination fee of $540, nil for a regional position in the Transition stream'] },
  { code: '494', name: 'Skilled Employer Sponsored Regional visa (subclass 494)', short: '494 visa', item: '1242', family: 'work', std: F(6140, 3070, 1535), pacific: F(5035, 2515, 1260),
    second: { primaryNoEnglish: 9800, adultNoEnglish: 4890 }, permanent: false, where: 'In or outside Australia, not in immigration clearance',
    conditions: ['An occupation nominated by an employer in regional Australia', 'The application must be in the stream the occupation was nominated for', 'Provisional visa, with a later path to the 191'] },
  { code: '189', name: 'Skilled Independent visa (subclass 189)', short: '189 visa', item: '1137', family: 'skilled', std: F(6135, 3070, 1540), pacific: F(5030, 2515, 1260),
    second: { adultNoEnglish: 4885 }, permanent: true, where: 'In or outside Australia, not in immigration clearance',
    conditions: ['A written invitation, then an application within the period it states', 'Under 45 on the day of the invitation', 'A skills assessment for an occupation on the skilled list'] },
  { code: '190', name: 'Skilled Nominated visa (subclass 190)', short: '190 visa', item: '1138', family: 'skilled', std: F(6140, 3070, 1535), pacific: F(5035, 2515, 1260),
    second: { adultNoEnglish: 4885 }, permanent: true, where: 'In or outside Australia, not in immigration clearance',
    conditions: ['A nomination by a state or territory government agency', 'A written invitation; under 45 on the day of the invitation', 'A skills assessment for the nominated occupation'] },
  { code: '491', name: 'Skilled Work Regional visa (subclass 491)', short: '491 visa', item: '1241', family: 'skilled', std: F(6140, 3070, 1535), pacific: F(5035, 2515, 1260),
    second: { adultNoEnglish: 4890 }, permanent: false, where: 'In or outside Australia, not in immigration clearance',
    conditions: ['Nominated by a state or territory agency, or sponsored by an eligible relative in a designated regional area', 'A written invitation; under 45 on the day of the invitation', 'Provisional visa, with a later path to the 191'] },
  { code: '191', name: 'Permanent Residence (Skilled Regional) visa (subclass 191)', short: '191 visa', item: '1139', family: 'skilled', std: F(630, 315, 160), pacific: F(515, 260, 135),
    permanent: true, where: 'In Australia, as a 491 or 494 holder',
    conditions: ['Held a 491 or 494 visa (Regional Provisional stream)', 'The charge is far lower than for the first regional visa', 'The Hong Kong (Regional) stream has its own, higher charge'] },
  { code: '858', name: 'National Innovation visa (subclass 858)', short: '858 visa', item: '1113', family: 'skilled', std: F(6235, 3120, 1560), pacific: F(5110, 2560, 1280),
    second: { adultNoEnglish: 4890 }, permanent: true, where: 'In or outside Australia, not in immigration clearance',
    conditions: ['A written invitation from the Minister before you can apply', 'Apply within the period stated in the invitation', 'Family members can join the application'] },
  { code: '820', name: 'Partner visa onshore (subclasses 820 and 801)', short: '820 partner visa', item: '1124B (Class BS)', family: 'partner', std: F(11710, 5860, 2935), pacific: F(9600, 4805, 2405),
    variants: [{ id: 'pmv', label: 'Holder of a Prospective Marriage (300) visa who has married the sponsor', fee: F(1955, 980, 485), pacific: F(1600, 805, 400) }],
    permanent: true, where: 'In Australia, not in immigration clearance',
    conditions: ['Married to, or in a de facto relationship with, an Australian citizen, permanent resident or eligible New Zealand citizen', 'One charge covers both stages: the temporary 820 and the permanent 801', 'Dependent children can be included in the same application'] },
  { code: '309', name: 'Partner visa offshore (subclasses 309 and 100)', short: '309 partner visa', item: '1129 (Class BC)', family: 'partner', std: F(11710, 5860, 2935), pacific: F(9600, 4805, 2405),
    permanent: true, where: 'Outside Australia',
    conditions: ['Married to, or in a de facto relationship with, an Australian citizen, permanent resident or eligible New Zealand citizen', 'One charge covers the provisional 309 and the permanent 100', 'Apply from outside Australia'] },
  { code: '300', name: 'Prospective Marriage visa (subclass 300)', short: '300 visa', item: '1215', family: 'partner', std: F(11710, 5860, 2935), pacific: F(9600, 4805, 2405),
    permanent: false, stay: '9 to 15 months from the grant', where: 'Outside Australia',
    conditions: ['Aged 18 or over, with a sponsor who is an Australian citizen, permanent resident or eligible New Zealand citizen', 'Have met the future spouse in person as adults', 'Marry before the visa ends, then apply for the partner visa at a much lower charge'] },
  { code: '103', name: 'Parent visa (subclass 103)', short: '103 parent visa', item: '1124 (Class AX)', family: 'parent', std: F(6600, 3300, 1655), pacific: F(5410, 2705, 1355),
    second: { perApplicant: 2065 }, permanent: true, where: 'Outside Australia',
    conditions: ['A child who is a settled Australian citizen, permanent resident or eligible New Zealand citizen', 'Not already applied for or holding a Sponsored Parent (Temporary) 870 visa', 'The second instalment is due from every applicant before grant'] },
  { code: '804', name: 'Aged Parent visa (subclass 804)', short: '804 visa', item: '1124A (Class BP)', family: 'parent', std: F(6600, 3300, 1655), pacific: F(5410, 2705, 1355),
    second: { perApplicant: 2065 }, permanent: true, where: 'In Australia',
    conditions: ['A settled child in Australia', 'Old enough to receive the Australian age pension', 'The second instalment is due from every applicant before grant'] },
  { code: '143', name: 'Contributory Parent visa (subclass 143)', short: '143 visa', item: '1130 (Class CA)', family: 'parent', std: F(6300, 2125, 1065), pacific: F(5170, 1740, 875),
    variants: [{ id: 'from173', label: 'Holder of a Contributory Parent (Temporary) 173 visa', fee: F(555, 280, 135), pacific: F(455, 230, 110), note: 'Second instalment $19,420 for each adult', secondPerAdult: 19420 }],
    second: { perApplicant: 43600, perChild: 2095 }, permanent: true, where: 'Outside Australia',
    conditions: ['A settled child in Australia who sponsors you', 'The second instalment is the largest charge of any Australian visa', 'A cheaper first charge for holders of a 173 visa'] },
  { code: '173', name: 'Contributory Parent (Temporary) visa (subclass 173)', short: '173 visa', item: '1221 (Class UT)', family: 'parent', std: F(4245, 2125, 1065), pacific: F(3480, 1740, 875),
    second: { perApplicant: 29130, perChild: 2095 }, permanent: false, stay: '2 years', where: 'Outside Australia',
    conditions: ['A settled child in Australia who sponsors you', 'You apply from outside Australia', 'A temporary stay of 2 years, during which you can apply for the permanent 143'] },
  { code: '864', name: 'Contributory Aged Parent visa (subclass 864)', short: '864 visa', item: '1130A (Class DG)', family: 'parent', std: F(6300, 3145, 1580), pacific: F(5170, 2580, 1295),
    variants: [{ id: 'from884', label: 'Holder of a Contributory Aged Parent (Temporary) 884 visa', fee: F(555, 280, 135), pacific: F(455, 230, 110), note: 'Second instalment $19,420 for each adult', secondPerAdult: 19420 }],
    second: { perApplicant: 43600, perChild: 2095 }, permanent: true, where: 'In Australia',
    conditions: ['A settled child in Australia', 'Old enough to receive the Australian age pension', 'Same second instalment as the 143'] },
  { code: '870', name: 'Sponsored Parent (Temporary) visa (subclass 870)', short: '870 visa', item: '1239 (Class GH)', family: 'parent', std: F(1515, 0, 0), pacific: F(1245, 0, 0), separate: true,
    second: { perApplicant: 4855, perApplicantLong: 10925 }, permanent: false, stay: 'Up to 3 or 5 years', where: 'Outside Australia in most cases',
    conditions: ['A child approved as a parent sponsor', 'Second instalment $4,855 for a stay of up to 3 years, $10,925 for up to 5 years', 'Each parent applies and pays separately'] },
  { code: '101', name: 'Child visa (subclasses 101 and 802)', short: '101 child visa', item: '1108 and 1108A', family: 'child', std: F(4040, 2020, 1015), pacific: F(3315, 1655, 830),
    variants: [{ id: 'orphan', label: 'Orphan relative applying under the Child (Migrant) class', fee: F(2475, 1235, 625), pacific: F(2030, 1015, 510) }],
    permanent: true, where: '101 outside Australia, 802 in Australia',
    conditions: ['A dependent child of an Australian citizen, permanent resident or eligible New Zealand citizen', 'Under 18, or 18 to 24 and a full-time student who depends on the parent', 'Same charge for the 101 (outside) and the 802 (inside)'] },
  { code: '417', name: 'Working Holiday visa (subclass 417)', short: '417 visa', item: '1225', family: 'work', std: F(840, 0, 0), separate: true,
    variants: [{ id: 'repeat', label: 'Second or third 417 visa', fee: F(1000, 0, 0) }],
    permanent: false, where: 'Outside Australia for the first visa',
    conditions: ['Aged 18 to 35 (younger for some passports)', 'A passport of a country with a working holiday arrangement', 'Specified work of at least 6 months for a third visa'] },
  { code: '462', name: 'Work and Holiday visa (subclass 462)', short: '462 visa', item: '1224A', family: 'work', std: F(840, 0, 0), pacific: F(690, 0, 0), separate: true,
    variants: [{ id: 'repeat', label: 'Second or third 462 visa', fee: F(1000, 0, 0) }],
    permanent: false, where: 'Outside Australia for the first visa',
    conditions: ['A passport of a partner country of the Work and Holiday program', 'Eligible passports and their conditions are set country by country by ministerial instrument', 'The first visa costs less than a second or third one'] },
  { code: '408', name: 'Temporary Activity visa (subclass 408)', short: '408 visa', item: '1237', family: 'work', std: F(535, 535, 135),
    permanent: false, where: 'In or outside Australia',
    conditions: ['A sponsor or a supporter for the activity, depending on the stream', 'Lower or nil charges apply to classes of applicants named by the Minister', 'Adult family members pay the same amount as the main applicant'] },
  { code: '400', name: 'Temporary Work (Short Stay Specialist) visa (subclass 400)', short: '400 visa', item: '1231', family: 'work', std: F(535, 535, 135), pacific: F(440, 440, 110),
    permanent: false, stay: 'Up to 6 months', where: 'Outside Australia in most cases',
    conditions: ['Highly specialised skills that cannot reasonably be found in Australia', 'Short, non-ongoing work', 'A strong business case for a stay longer than 3 months'] },
  { code: '155', name: 'Resident Return visa (subclass 155)', short: '155 visa', item: '1128 (Class BB)', family: 'return', std: F(1475, 0, 0), pacific: F(505, 0, 0), separate: true,
    permanent: true, where: 'In or outside Australia',
    conditions: ['A current or former permanent resident, or a former citizen', 'Restores the right to travel back to Australia as a permanent resident', 'Each person applies and pays separately'] },
  { code: '020', name: 'Bridging visa B (subclass 020)', short: 'bridging visa B', item: '1302', family: 'return', std: F(575, 0, 0), pacific: F(195, 0, 0),
    permanent: false, where: 'In Australia',
    conditions: ['Hold a bridging visa A or B', 'An application for a substantive visa or a judicial review in progress', 'Family members included in the application pay nothing more'] },
];
export const visaByCode = (c: string) => VISAS.find((v) => v.code === c)!;
/** What the reader wants to do, in plain words, with the number in brackets, in the order of the home page
 *  "Which visa?" cards (test-naif 2026-11-14, tour 2: "to choose my visa I must know its number"). Each wording
 *  restates the home card or the visa's own conditions above; it adds no fact. */
export const PLAIN: Array<[string, string]> = [
  ['820', 'Join my partner, already in Australia (820 and 801)'],
  ['309', 'Bring my partner from outside Australia (309 and 100)'],
  ['300', 'Come to Australia to marry my fiancé(e) (300)'],
  ['143', 'Bring my parents: higher cost, shorter queue (143)'],
  ['173', 'Bring my parents in two steps, temporary first (173)'],
  ['103', 'Bring my parents: lower cost, far longer queue (103)'],
  ['804', 'Parents of pension age, in Australia (804)'],
  ['864', 'Parents of pension age, in Australia: higher cost, shorter queue (864)'],
  ['870', 'My parents stay up to 3 or 5 years, not permanent (870)'],
  ['101', 'Bring my child (101 and 802)'],
  ['600', 'Visit Australia: visitor visa (600)'],
  ['601', 'Visit Australia: ETA, some passports (601)'],
  ['651', 'Visit Australia: eVisitor, some passports (651)'],
  ['417', 'Working holiday, ages 18 to 35 (417)'],
  ['462', 'Work and holiday, partner countries (462)'],
  ['500', 'Study in Australia (500)'],
  ['485', 'Stay and work after my studies (485)'],
  ['482', 'Work for an Australian employer, temporary (482)'],
  ['186', 'Work for an Australian employer, permanent (186)'],
  ['494', 'Work for an employer in regional Australia (494)'],
  ['400', 'Short specialist work, up to 6 months (400)'],
  ['408', 'A specific temporary activity (408)'],
  ['189', 'Skilled worker, no sponsor (189)'],
  ['190', 'Skilled worker, state nominated (190)'],
  ['491', 'Skilled worker, regional (491)'],
  ['191', 'Permanent visa after the regional 491 (191)'],
  ['858', 'National Innovation, on invitation (858)'],
  ['155', 'Travel back as a permanent resident (155)'],
  ['020', 'Leave and come back while a visa is decided (bridging visa B, 020)'],
];
export const plainOf = (c: string) => PLAIN.find(([k]) => k === c)?.[1];
