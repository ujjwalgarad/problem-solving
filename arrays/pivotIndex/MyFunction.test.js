const functionToTest = require('./MyFunction.js');

test('result', () => {
    expect(functionToTest([1,7,3,6,5,6])).toBe(3);
  });

  test('result', () => {
    expect(functionToTest([1,2,3])).toBe(-1);
  });

  test('result', () => {
    expect(functionToTest([2,1,-1])).toBe(0);
  });
