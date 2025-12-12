import isEmpty from '../src/isEmpty.js';

describe('isEmpty()', () => {

  test('returns true for numbers', () => {
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(67)).toBe(true);
    expect(isEmpty(-1)).toBe(true);
  });

  test('returns true for booleans', () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
  });

  test('returns true for null or undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('returns true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('returns false for non-empty string', () => {
    expect(isEmpty('hello world')).toBe(false);
  });

  test('returns true for empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('returns false for non-empty array', () => {
    expect(isEmpty([6, 7, 8])).toBe(false);
  });

  test('returns true for empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('returns false for object with properties', () => {
    expect(isEmpty({ key: 'value' })).toBe(false);
  });

  test('returns true for empty Map and Set', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  test('returns false for non-empty Map and Set', () => {
    const map = new Map();
    map.set('a', 1);

    const set = new Set();
    set.add(1);

    expect(isEmpty(map)).toBe(false);
    expect(isEmpty(set)).toBe(false);
  });
});