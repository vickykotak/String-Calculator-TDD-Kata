const add = require("./index");

test("pass empty string", () => {
  expect(add("")).toBe(0);
});

test("returns number for single number input", () => {
  expect(add("1")).toBe(1);
});
