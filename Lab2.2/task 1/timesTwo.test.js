const { default: TestRunner } = require("jest-runner");
const timesTwo = require('./timesTwo');

test("повертає число, помножене на 2", () => {
    expect(timesTwo(10)).toBe(20);
});