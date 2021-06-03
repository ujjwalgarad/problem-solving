const functionToTest = require('./MyFunction.js');

test('result', () => {
    expect(functionToTest([1,1,2])).toStrictEqual([1,2]);
  });

test('result', () => {
expect(functionToTest([0,0,1,1,1,2,2,3,3,4])).toStrictEqual([0,1,2,3,4]);
});

test('result', () => {
    expect(functionToTest([0,0,1,1,1,2,2,3,3])).toStrictEqual([0,1,2,3]);
});

// test('result', () => {
//   expect(functionToTest([4,5,6,0,0,0], 3, [1,2,3], 3)).toStrictEqual([1,2,3,4,5,6]);
// });


// test('result', () => {
//   expect(functionToTest([4,5,6,0,0,0], 3, [7,8,9], 3)).toStrictEqual([4,5,6,7,8,9]);
// });

// test('result', () => {
//   expect(functionToTest([2,5,7,0,0,0], 3, [4,6,9], 3)).toStrictEqual([2,4,5,6,7,9]);
// });

// test('result', () => {
//   expect(functionToTest([2,5,7,10,0,0,0], 4, [4,6,9], 3)).toStrictEqual([2,4,5,6,7,9,10]);
// });