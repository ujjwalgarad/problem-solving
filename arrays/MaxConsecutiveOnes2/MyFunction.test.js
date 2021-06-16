const functionToTest = require('./MyFunction.js');

test('result', () => {
    expect(functionToTest([1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1])).toBe(9);
  });

  test('result', () => {
    expect(functionToTest([1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1])).toBe(13);
  });

  test('result', () => {
    expect(functionToTest([1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1])).toBe(14);
  });

  test('result', () => {
    expect(functionToTest([1,0,1,1,0])).toBe(4);
  });

  test('result', () => {
    expect(functionToTest([1,0,1,1,0,1])).toBe(4);
  });

  test('result', () => {
    expect(functionToTest([0,1,1,1])).toBe(4);
  });