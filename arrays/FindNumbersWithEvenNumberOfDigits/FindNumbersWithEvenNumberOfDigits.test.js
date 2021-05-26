const functionToTest = require('./FindNumbersWithEvenNumberOfDigits.js');

test('result', () => {
  expect(functionToTest([12,3454,3,6,7896])).toBe(3);
});

test('result', () => {
    expect(functionToTest([555,901,482,1771])).toBe(1);
  });