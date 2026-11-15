/**
 * Coherence locks after the naive testers of 2026-11-14, tour 2 (auvisacosts.com).
 *  1. Parent queue tool: one main answer, the Department's estimate, and the other queue for comparison,
 *     so the home promise "shorter queue" is visible in the tool; no "gap" figure left beside it.
 *  2. Visa choice in plain words, every visa once, number in brackets.
 *  3. 173 total names the later 143 step and the whole route, from the same engine.
 */
import { describe, it, expect } from 'vitest';
import { getSpec, VISA_OPT } from '../src/lib/mini-specs';
import { VISAS, PLAIN } from '../src/data/visas';
import { PARENT } from '../src/lib/times';
import { visaCost } from '../src/lib/engine/cost';
import { money } from '../src/lib/format-l';

const defaults = (kind: string) => Object.fromEntries(getSpec(kind).inputs.map((i) => [i.id, i.def]));

describe('parent queue tool: one answer', () => {
  for (const q of PARENT.queue) {
    it(`${q.code}: big figure = Department estimate, other queue shown, same default date everywhere`, () => {
      const spec = getSpec(`parentq-${q.code}`);
      const v = defaults(`parentq-${q.code}`);
      expect(`${v.y}-${String(v.m).padStart(2, '0')}`).toBe(PARENT.read_on.slice(0, 7));
      const out = spec.run(v);
      const mine = q.contributory ? PARENT.newApplicationYears.contributory : PARENT.newApplicationYears.nonContributory;
      const other = q.contributory ? PARENT.newApplicationYears.nonContributory : PARENT.newApplicationYears.contributory;
      expect(out.head[0]).toMatch(/^Expected wait/);
      expect(out.head[1]).toBe(`about ${mine} years`);
      expect(out.rows.some(([l, x]) => /for comparison/.test(l) && x === `about ${other} years`)).toBe(true);
      const all = JSON.stringify(out);
      expect(all).not.toMatch(/Gap between|Not released yet/);
      expect(out.note).toMatch(/Source: Department of Home Affairs/);
    });
  }
  it('a released queue date gives no wait figure', () => {
    const out = getSpec('parentq-143').run({ m: 1, y: 2015 });
    expect(out.head[1]).toBe('Your turn has come');
  });
  it('the contributory queue is the shorter one, as the home page says', () => {
    expect(PARENT.newApplicationYears.contributory).toBeLessThan(PARENT.newApplicationYears.nonContributory);
  });
});

describe('visa choice in plain words', () => {
  it('lists each of the 29 visas once, with its number in brackets', () => {
    expect(VISA_OPT.length).toBe(VISAS.length);
    expect(new Set(VISA_OPT.map((o) => o.value)).size).toBe(VISAS.length);
    for (const [code, label] of PLAIN) expect(label, code).toMatch(new RegExp(`\\(.*${code}.*\\)$`));
    const home = getSpec('cost').inputs[0];
    expect(home.label).toBe('What do you want to do?');
  });
});

describe('173: the whole route is shown', () => {
  it('adds the later 143 step from the engine', () => {
    const v = defaults('cost-173');
    const out = getSpec('cost-173').run(v);
    const first = visaCost({ code: '173', adults: v.a ?? 0, children: v.c ?? 0 }).total;
    const later = visaCost({ code: '143', variant: 'from173', adults: v.a ?? 0, children: v.c ?? 0 }).total;
    expect(out.head[1]).toBe(money(first));
    expect(out.rows.find(([l]) => /^Whole route/.test(l))?.[1]).toBe(money(first + later));
    expect(out.alert).toContain(money(later));
  });
});

describe('parent queue tools: no page overrides the default date', () => {
  it('every page with a parent queue tool starts on the current month', async () => {
    const { PAGES } = await import('../src/lib/guides');
    for (const p of PAGES) for (const t of [p.tool, (p as { mini?: typeof p.tool }).mini]) {
      if (t && String(t.kind).includes('parentq')) expect(Object.keys((t as { props?: object }).props ?? {}), p.id).not.toContain('y');
    }
  });
});
