const negativeNumbers = require('../ejercicios/negativeNumbers.js')

test('negativeNumbers', () => {
  expect(negativeNumbers([1, 2, 3])).toStrictEqual([1, 2, 3]);
  expect([12, 120, 132]).toStrictEqual(negativeNumbers([12, -120, 132]));
  expect([10, 132]).toStrictEqual(negativeNumbers([-10, " ", 132]));
})