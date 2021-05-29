const functionToTest = require('./DuplicateEachZero.js');

test('result', () => {
    expect(functionToTest([1,0,2,3,0,4,5,0])).toStrictEqual([1,0,0,2,3,0,0,4]);
  });
  
  test('result', () => {
      expect(functionToTest([8,4,5,0,0,0,0,7])).toStrictEqual([8,4,5,0,0,0,0,0]);
  });