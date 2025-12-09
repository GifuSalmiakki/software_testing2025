import filter from '../src/filter.js';

describe('filter()', () => {
  test('filters array of objects by a boolean property', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'wilma', active: true },
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([
      { user: 'barney', active: true },
      { user: 'wilma', active: true },
    ]);
  });

  test('filters numbers greater than 10', () => {
    const numbers = [5, 12, 8, 130, 44];
    const result = filter(numbers, (n) => n > 10);
    expect(result).toEqual([12, 130, 44]);
  });

  test('returns empty array when no elements match predicate', () => {
    const numbers = [1, 2, 3];
    const result = filter(numbers, () => false);
    expect(result).toEqual([]);
  });

  test('returns empty array when input is null or undefined', () => {
    expect(filter(null, () => true)).toEqual([]);
    expect(filter(undefined, () => true)).toEqual([]);
  });

  test('filters strings that include a search substring', () => {
    const items = ['apple', 'banana', 'apricot', 'orange'];
    const query = 'ap';
    const result = filter(items, (item) => item.includes(query));
    expect(result).toEqual(['apple', 'apricot']);
  });

  test('predicate receives value, index, and array arguments', () => {
    const arr = ['a', 'b', 'c'];
    const indices = [];
    const values = [];

    filter(arr, (value, index, array) => {
      values.push(value);
      indices.push(index);
      expect(array).toBe(arr);
      return true;
    });

    expect(values).toEqual(arr);
    expect(indices).toEqual([0, 1, 2]);
  });
});