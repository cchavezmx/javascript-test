const findMax = require('../ejercicios/findMax.js');

test('find Max functions', () => {
  expect(findMax([1, 2, 3])).toBe(3);
  expect(findMax([12, 120, 132])).toBe(132);
  expect(findMax(["10", 100, 110])).toBe(110);
  expect(findMax("queso")).toBe(0);
})
