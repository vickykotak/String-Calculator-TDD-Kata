const add = require("./index");

test("pass empty string", () => {
  expect(add("")).toBe(0);
});
