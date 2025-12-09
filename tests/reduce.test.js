import reduce from '../src/reduce.js';

describe('reduce() - calculating total price', () => {
  test('sums array of product prices with initial accumulator', () => {
    const prices = [19.99, 5.0, 3.5];
    const total = reduce(prices, (sum, price) => sum + price, 0);
    expect(total).toBeCloseTo(28.49);
  });

  test('sums array of product prices without initial accumulator', () => {
    const prices = [19.99, 5.0, 3.5];
    // First element used as initial accumulator, sum starts from second element
    const total = reduce(prices, (sum, price) => sum + price);
    expect(total).toBeCloseTo(28.49);
  });

  test('returns 0 when reducing empty price array with initial accumulator 0', () => {
    const total = reduce([], (sum, price) => sum + price, 0);
    expect(total).toBe(0);
  });

  test('calculates total price from object with prices as values', () => {
    const cart = {
      apple: 1.25,
      banana: 0.75,
      orange: 1.5,
    };
    const total = reduce(cart, (sum, price) => sum + price, 0);
    expect(total).toBeCloseTo(3.5);
  });

  test('calculates total price from object without initial accumulator', () => {
    const cart = {
      apple: 1.25,
      banana: 0.75,
      orange: 1.5,
    };
    const total = reduce(cart, (sum, price) => sum + price);
    expect(total).toBeCloseTo(3.5);
  });

  test('returns initial value if object is empty', () => {
    const cart = {};
    const total = reduce(cart, (sum, price) => sum + price, 100);
    expect(total).toBe(100);
  });

  test('handles array-like strings by summing char codes as prices', () => {
    // Treat each character code as a "price" just for this contrived test
    const total = reduce('ABC', (sum, ch) => sum + ch.charCodeAt(0), 0);
    expect(total).toBe(65 + 66 + 67);
  });
});