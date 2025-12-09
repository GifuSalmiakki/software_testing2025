import add from '../src/add.js';

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  it('adds negative numbers', () => {
    expect(add(-3, -7)).toBe(-10);
  });

  it('adds a positive and a negative number', () => {
    expect(add(10, -3)).toBe(7);
  });

  it('adds zero correctly', () => {
    expect(add(5, 0)).toBe(5);
    expect(add(0, 5)).toBe(5);
  });

  it('treats undefined as the default (0)', () => {
    expect(add(5, undefined)).toBe(5);
    expect(add(undefined, 5)).toBe(5);
  });

  it('returns 0 when both values are undefined', () => {
    expect(add(undefined, undefined)).toBe(0);
  });
});
