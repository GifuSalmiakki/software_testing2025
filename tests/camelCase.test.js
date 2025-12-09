import camelCase from "../src/camelCase.js";

describe("camelCase()", () => {
  it("converts normal strings", () => {
    expect(camelCase("Foo Bar").trim()).toBe("fooBar");
  });

  it("converts dashed input", () => {
    expect(camelCase("--foo-bar--").trim()).toBe("fooBar");
  });

  it("converts snake case", () => {
    expect(camelCase("__FOO_BAR__").trim()).toBe("fooBar");
  });

  it("returns empty string on empty input", () => {
    expect(camelCase("").trim()).toBe("");
  });

  it("handles non-string input per your implementation", () => {
    expect(camelCase(123).trim()).toBe("123");
  });
});
