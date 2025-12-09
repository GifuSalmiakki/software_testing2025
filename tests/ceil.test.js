import ceil from '../src/ceil.js';

describe('ceil()', () => {

  test('rounds up a basic number', () => {
    expect(ceil(4.006)).toBe(5);
  });

  test('rounds up with positive precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
    expect(ceil(1.2345, 3)).toBe(1.235);
  });

  test('rounds up with negative precision', () => {
    expect(ceil(6040, -2)).toBe(6100);
    expect(ceil(149, -1)).toBe(150);
  });

  test('zero precision behaves like Math.ceil', () => {
    expect(ceil(2.1, 0)).toBe(3);
    expect(ceil(2.1)).toBe(3);
  });

  test('null precision defaults to 0', () => {
    expect(ceil(7.2, null)).toBe(8);
  });

  test('handles negative numbers correctly', () => {
    expect(ceil(-4.2)).toBe(-4);
    expect(ceil(-4.9)).toBe(-4);
    expect(ceil(-4.9, 1)).toBe(-4.9); // smallest integer ≥ -4.9 is -4.9
  });

  test('precision clamps to +292', () => {
    expect(ceil(1.2345, 500)).toBe(ceil(1.2345, 292));
  });

  test('precision clamps to -292', () => {
    expect(ceil(12345, -500)).toBe(ceil(12345, -292));
  });

  test('returns NaN for non-numeric input', () => {
    expect(ceil('abc')).toBeNaN();
    expect(ceil(undefined)).toBeNaN();
    expect(ceil(NaN)).toBeNaN();
  });

});