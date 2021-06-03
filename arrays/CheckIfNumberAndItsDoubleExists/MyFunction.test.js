const functionToTest = require('./MyFunction.js');

test('result', () => {
    expect(functionToTest([10,2,5,3])).toBe(true);
  });

test('result', () => {
expect(functionToTest([3,1,7,11])).toBe(false);
});

test('result', () => {
    expect(functionToTest([7,1,14,11])).toBe(true);
});