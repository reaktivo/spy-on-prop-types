import isPlainObject from "./isPlainObject";

describe("isPlainObject", () => {
  it("should be a function", () => {
    expect(typeof isPlainObject).toBe("function");
  });

  it("should detect if an object is a plain object", () => {
    expect(isPlainObject({})).toBe(true);
  });

  it("should detect if an object is not a plain object", () => {
    expect(isPlainObject("a")).toBe(false);
  });
});
