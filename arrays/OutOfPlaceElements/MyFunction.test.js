const functionToTest = require('./MyFunction.js');

test('result', () => {
    expect(functionToTest([1,1,4,2,1,3])).toBe(3);
  });

  test('result', () => {
    expect(functionToTest([5,1,2,3,4])).toBe(5);
  });

  test('result', () => {
    expect(functionToTest([1,2,3,4,5])).toBe(0);
  });
