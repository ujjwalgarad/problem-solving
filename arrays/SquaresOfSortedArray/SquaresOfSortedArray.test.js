const functionToTest = require('./SquaresOfSortedArray.js');

test('result', () => {
  expect(functionToTest([-4,-1,0,3,10])).toStrictEqual([0,1,9,16,100]);
});

test('result', () => {
    expect(functionToTest([-7,-3,2,3,11])).toStrictEqual([4,9,9,49,121]);
});