const functionToTest = require('./MyFunction.js');

test('result', () => {
    expect(functionToTest([17,18,5,4,6,1])).toStrictEqual([18,6,6,6,1,-1]);
  });

test('result', () => {
expect(functionToTest([400])).toStrictEqual([-1]);
});

test('result', () => {
  expect(functionToTest([97,99,54,12,95,2,54,47,89,12])).toStrictEqual([99,95,95,95,89,89,89,89,12,-1]);
});