const functionToTest = require('./MyFunction.js');

test('result', () => {
    expect(functionToTest([0,3,2,1])).toBe(true);
  });

test('result', () => {
expect(functionToTest([3,5,5,5,1])).toBe(false);
});

test('result', () => {
    expect(functionToTest([0,2,3,4,5,2,1,0])).toBe(true);
});

test('result', () => {
  expect(functionToTest([5,2,1,0])).toBe(false);
});