import toFinite from '../src/toFinite.js';

describe('toFinite()', () => {
  test('returns 0 for falsey non-zero values', () => {
    expect(toFinite(null)).toBe(0);
    expect(toFinite(undefined)).toBe(0);
    expect(toFinite(false)).toBe(0);
    expect(toFinite('')).toBe(0);
  });

  test('returns zero for 0 and -0', () => {
    expect(toFinite(0)).toBe(0);
    expect(toFinite(-0)).toBe(-0);
  });

  test('returns finite numbers unchanged', () => {
    expect(toFinite(3.2)).toBe(3.2);
    expect(toFinite(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
  });

  test('converts numeric strings to finite numbers', () => {
    expect(toFinite('3.2')).toBe(3.2);
  });

  test('converts Infinity and -Infinity to MAX_INTEGER and -MAX_INTEGER', () => {
    const MAX_INTEGER = 1.7976931348623157e+308;
    expect(toFinite(Infinity)).toBe(MAX_INTEGER);
    expect(toFinite(-Infinity)).toBe(-MAX_INTEGER);
  });

  test('returns 0 for NaN input', () => {
    expect(toFinite(NaN)).toBe(0);
  });

  test('handles objects and arrays gracefully', () => {
    expect(toFinite({})).toBe(0);
    expect(toFinite([])).toBe(0);
    expect(toFinite([42])).toBe(42);
  });
});