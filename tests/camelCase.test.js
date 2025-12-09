import camelCase from "../src/camelCase.js";

describe("camelCase()", () => {
  it("converts normal strings", () => {
    expect(camelCase("Foo Bar")).toBe("fooBar");
  });

  it("converts dashed input", () => {
    expect(camelCase("--foo-bar--")).toBe("fooBar");
  });

  it("converts snake case", () => {
    expect(camelCase("__FOO_BAR__")).toBe("fooBar");
  });

  it("returns empty string on empty input", () => {
    expect(camelCase("")).toBe("");
  });

  it("handles non-string input per your implementation", () => {
    expect(camelCase(123)).toBe("123");
  });
});
