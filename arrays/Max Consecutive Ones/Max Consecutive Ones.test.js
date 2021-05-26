const functionToTest = require('./Max Consecutive Ones.js');

test('result', () => {
  expect(functionToTest([0,0,1,1,1,0,0])).toBe(3);
});

test('result', () => {
    expect(functionToTest([0,1,0,1,1,1,1])).toBe(4);
  });