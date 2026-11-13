/** llms.txt (RECETTE §21), generated at build from the page registry: always in sync with the site. */
import { PAGES } from '../lib/guides';
import { SITE_URL, LAST_UPDATED, SITE_NAMES } from '../data/site-config';
import { route } from '../i18n/routes';
import { GROUPS_ORDER, groupLabel } from '../i18n/nav';
import params from '../data/params-2026.json';
import { VISAS } from '../data/visas';

const words = (iso: string) => new Date(iso + 'T12:00:00Z').toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export function GET() {
  const lines = [
    `# ${SITE_NAMES.en}`,
    '',
    `> Australian visa costs for the whole family: the visa application charge of ${VISAS.length} subclasses (189, 190, 491, 186, 494, 482, 500, 485, 600, 820/801, 309/100, 300, 103, 143, 173, 804, 864, 870, 101/802, 417, 462 and more) for the main applicant, adults and children, the second instalment for adults without functional English and for parent visas, Pacific and Timor-Leste rates, and a decision-date tool fed by the official processing times. Amounts read in Schedule 1 of the Migration Regulations 1994 (compilation in force on 1 November 2026). Independent: not the Department of Home Affairs, not a migration agent. Last updated ${words(LAST_UPDATED)}.`,
    '',
    '## Data',
    `- Visa application charges: Migration Regulations 1994, Schedule 1 and regulation 2.12C, read ${words(params.retrieved_at)}.`,
    '- Conditions summarised from the Department of Home Affairs visa pages (CC BY 3.0 AU).',
    '- Processing times: not republished; the decision-date tool uses the times the reader copies from the official tool.',
    '',
    `- [Visa cost calculator](${SITE_URL}${route('home', 'en')}): every subclass, family members, second instalment`,
    '',
    ...GROUPS_ORDER.flatMap((g) => [`## ${groupLabel(g)}`, ...PAGES.filter((p) => p.group === g).map((p) => `- [${p.en.nav}](${SITE_URL}${route(p.id, 'en')}): ${p.en.card}`), '']),
    '## About',
    `- [Method and sources](${SITE_URL}${route('method', 'en')})`,
    `- [About](${SITE_URL}${route('about', 'en')})`,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
