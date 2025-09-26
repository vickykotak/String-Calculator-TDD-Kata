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
