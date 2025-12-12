import add from '../src/add.js';

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
    expect(add(6, 7)).toBe(13);
  });

  it('adds negative numbers', () => {
    expect(add(-3, -7)).toBe(-10);
    expect(add(-6, -7)).toBe(-13);
  });

  it('adds a positive and a negative number', () => {
    expect(add(10, -3)).toBe(7);
  });

  it('handles decimal numbers correctly', () => {
    expect(add(0.6, 7.7)).toBe(8.3)
  });

  it('adds zero correctly', () => {
    expect(add(6, 0)).toBe(6);
    expect(add(0, 6)).toBe(6);
  });

  it('treats undefined as the default (0)', () => {
    expect(add(5, undefined)).toBe(5);
    expect(add(undefined, 5)).toBe(5);
    expect(add(undefined, undefined)).toBe(0);
  });

  it('treats null as the default (0)', () => {
    expect(add(null, 7)).toBe(7);
    expect(add(7, null)).toBe(7);
    expect(add(null, null)).toBe(0);
  });

    it('incorrect inputs return NaN', () => {
    expect(add(6, 'b')).toBe(NaN);
    expect(add(NaN, 7)).toBe(NaN);
  });
});
