import { describe, it, expect } from 'vitest';
import { visaCost, secondInstalmentDeadline, addMonths } from '../src/lib/engine/cost';
import { VISAS, visaByCode } from '../src/data/visas';
import P from '../src/data/params-2026.json';

const V = (c: string) => visaByCode(c)!;

describe('visa data (Schedule 1, compilation of 1 November 2026)', () => {
  it('has 29 visas, unique codes, each with a source key', () => {
    expect(VISAS.length).toBe(29);
    expect(new Set(VISAS.map((v) => v.code)).size).toBe(VISAS.length);
    for (const v of VISAS) expect((P.sources as Record<string, unknown>)['ha_' + v.code], v.code).toBeTruthy();
  });
  it('keeps child rates at or below adult rates, adult at or below base', () => {
    for (const v of VISAS) {
      expect(v.std.addU18, v.code).toBeLessThanOrEqual(v.std.add18);
      expect(v.std.add18, v.code).toBeLessThanOrEqual(v.std.base);
      if (v.pacific) expect(v.pacific.base, v.code).toBeLessThanOrEqual(v.std.base);
    }
  });
  it('reads the 189 charge of Schedule 1', () => {
    expect(V('189').std).toMatchObject({ base: 6135, add18: 3070, addU18: 1540 });
  });
});

describe('visaCost', () => {
  it('adds partner and children on a 189', () => {
    const r = visaCost({ code: '189', adults: 1, children: 2 });
    expect(r.firstInstalment).toBe(6135 + 3070 + 2 * 1540);
    expect(r.secondInstalment).toBe(0);
  });
  it('charges every traveller on a separate visa', () => {
    const r = visaCost({ code: '600', adults: 1, children: 2 });
    expect(r.total).toBe(4 * V('600').std.base);
  });
  it('charges an adult family member in full on a 482', () => {
    const r = visaCost({ code: '482', adults: 1, children: 0 });
    expect(r.total).toBe(2 * V('482').std.base);
  });
  it('adds the contributory second instalment on a 143', () => {
    const r = visaCost({ code: '143', adults: 1, children: 0 });
    expect(r.secondInstalment).toBe(2 * V('143').second!.perApplicant!);
  });
  it('adds the non-internet charge on paper', () => {
    const a = visaCost({ code: '189', adults: 0, children: 0 });
    const b = visaCost({ code: '189', adults: 0, children: 0, paper: true });
    expect(b.total - a.total).toBe(P.charges.nonInternet);
  });
});

describe('dates', () => {
  it('adds months', () => { expect(addMonths('2026-01-31', 1)).toMatch(/^2026-0[23]-/); });
  it('gives 28 days in Australia and 70 outside', () => {
    expect(secondInstalmentDeadline('2026-11-01', true)).toBe('2026-11-29');
    expect(secondInstalmentDeadline('2026-11-01', false)).toBe('2027-01-10');
  });
});
