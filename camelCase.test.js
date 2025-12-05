import camelCase from './camelCase.js';

describe('camelCase', () => {
  it('converts normal spaced words to camelCase', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
  });

  it('handles strings with dashes', () => {
    expect(camelCase('--foo-bar--')).toBe('fooBar');
  });

  it('handles snake_case and uppercase input', () => {
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
  });

  it('returns empty string for empty input', () => {
    expect(camelCase('')).toBe('');
  });

  it('converts a single word to lowercase', () => {
    expect(camelCase('HELLO')).toBe('hello');
  });
});
