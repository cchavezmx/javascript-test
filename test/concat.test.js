const concatArrayToString = require('../ejercicios/concatArrayToString.js');

test('concatStringArray', () => {
  expect(concatArrayToString(["a", "b", "c"])).toBe('abc');
  expect(concatArrayToString(["xvf"])).toBe('xvf');
  expect(concatArrayToString([])).toBe('');
  expect(concatArrayToString([1, 2, 3])).toBe(false);
  expect(concatArrayToString(["a", false, true])).toBe(false);
});

