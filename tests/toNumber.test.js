import toNumber from '../src/toNumber.js';

describe('toNumber()', () => {
  test('returns numbers unchanged', () => {
    expect(toNumber(3.14)).toBe(3.14);
    expect(toNumber(-42)).toBe(-42);
    expect(toNumber(0)).toBe(0);
  });

  test('converts numeric strings, trimming whitespace', () => {
    expect(toNumber('  3.14  ')).toBe(3.14);
    expect(toNumber('0')).toBe(0);
    expect(toNumber('1e2')).toBe(100);
  });

  test('parses binary and octal strings correctly', () => {
    expect(toNumber('0b101')).toBe(5);
    expect(toNumber('0o17')).toBe(15);
  });

  test('returns NaN for symbols and bad hex strings', () => {
    expect(Number.isNaN(toNumber(Symbol('sym')))).toBe(true);
    expect(Number.isNaN(toNumber('-0x1f'))).toBe(true);
  });

  test('handles objects with valueOf correctly', () => {
    expect(toNumber({ valueOf() { return '42'; } })).toBe(42);
  });

test('returns correct values for null, undefined, and boolean false', () => {
  expect(toNumber(null)).toBe(0);
  expect(Number.isNaN(toNumber(undefined))).toBe(true);
  expect(toNumber(false)).toBe(0);
});

  test('handles arrays per JS coercion rules', () => {
    expect(toNumber([])).toBe(0);
    expect(toNumber([42])).toBe(42);
  });
});