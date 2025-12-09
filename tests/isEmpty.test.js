import isEmpty from '../src/isEmpty.js';

describe('isEmpty() - basic robustness', () => {
  test('handles null, undefined, and empty strings without error', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('')).toBe(true);
  });

  test('handles objects with missing optional fields', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ someField: undefined })).toBe(false);
  });

  test('returns false for objects with user data', () => {
    expect(isEmpty({ name: 'Alice', email: 'alice@example.com' })).toBe(false);
  });

  test('handles arrays and collections gracefully', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  test('does not throw on unexpected inputs', () => {
    expect(() => isEmpty(() => {})).not.toThrow();
    expect(() => isEmpty(Symbol())).not.toThrow();
    expect(() => isEmpty(42)).not.toThrow();
  });
});