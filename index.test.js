const add = require("./index");

test("pass empty string", () => {
  expect(add("")).toBe(0);
});

test("returns number for single number input", () => {
  expect(add("1")).toBe(1);
});

test("returns sum for two numbers", () => {
  expect(add("1,5")).toBe(6);
});

test("handles multiple numbers", () => {
  expect(add("1,2,3,4")).toBe(10);
});

test("handles newlines as delimiters", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("support fr custom delimiter", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("throws error for negative number", () => {
  expect(() => add("1,-2")).toThrow("negative numbers not allowed -2");
});
