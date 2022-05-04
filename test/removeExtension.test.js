const removeExtension = require('../ejercicios/removeExtension.js')

test('removeExtension', () => {
    expect(removeExtension('hola.txt')).toBe('hola')
});