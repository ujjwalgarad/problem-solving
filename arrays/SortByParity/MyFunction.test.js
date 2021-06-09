const functionToTest = require('./MyFunction.js');

test('result', () => {
    expect(functionToTest([3,1,2,4,5,6,3,9])).toStrictEqual([ 6, 4, 2, 1, 5, 3, 3, 9 ]);
  });

  test('result', () => {
    expect(functionToTest([3,1,2,4])).toStrictEqual([4,2,1,3]);
  });