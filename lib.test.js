const { test, expect } = require("@jest/globals");
const lib = require("./lib");
test("avg([3, 5, 7]) should be 5", () => {
  expect(lib.avg([3, 5, 7])).toBe(5);
});
test("avg([-5, 5]) should be 0", () => {
  expect(lib.avg([-5, 5])).toBe(0);
});
test("prime[4] should be false", () => {
  expect(lib.prime(4)).toBe(false);
});
test("prime[31] should be true", () => {
  expect(lib.prime(31)).toBe(true);
});
test("flactorial[3] should be 6", () => {
  expect(lib.factorial(3)).toBe(6);
});
test("flactorial[15] should be 1,307,674,368,000", () => {
  expect(lib.factorial(15)).toBe(1307674368000);
});
test("flactorial[0] should be 1", () => {
  expect(lib.factorial(0)).toBe(1);
});
