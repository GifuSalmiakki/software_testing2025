import compact from '../src/compact.js';

describe('compact()', () => {
  test('removes falsey values from array', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
  });

  test('returns empty array when given empty array', () => {
    expect(compact([])).toEqual([]);
  });

  test('keeps truthy values unchanged', () => {
    const input = [true, 'foo', 42, {}, [], () => {}];
    expect(compact(input)).toEqual([true, 'foo', 42, {}, [], () => {}]);
  });

  test('removes null, undefined, NaN', () => {
    expect(compact([null, undefined, NaN, 1, "a"])).toEqual([1, "a"]);
  });

  test('handles array with only falsey values', () => {
    expect(compact([false, 0, "", null, undefined, NaN])).toEqual([]);
  });

  test('does not modify original array', () => {
    const arr = [0, 1, false];
    const result = compact(arr);
    expect(result).not.toBe(arr);
  });

  test('handles arrays with mixed types and nested arrays', () => {
    expect(compact([0, [1], false, [""], "", 3])).toEqual([[1], [""], 3]);
  });

  test('removes only falsey values (false, 0, "", null, undefined, NaN)', () => {
    const allFalsey = [false, 0, '', null, undefined, NaN];
    expect(compact(allFalsey)).toEqual([]);
  });
});