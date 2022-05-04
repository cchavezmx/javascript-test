const sum = require('../ejercicios/suma.js')
const testing = [
  {
    input: [1, 2, 3],
  },
  {
    input: [12, 120, 132],
  },
  {
    input: ["10", 100, 110],
  },
  {
    input: ["10", "100", 110],
  },
  {
    input: [-75, 100, 175],
  },
  {
    input: [true, 100, 0],
  }
]

test('Suma de dos numeros', () => {
  testing.forEach(test => {
    expect(sum(test.input[0], test.input[1])).toBe(test.input[2])
  })
})