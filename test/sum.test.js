const { sum } = require('../src/sum')

test('should 3', () => {
    const result = sum(1, 2)

    expect(result).toBe(3)
})

test.skip('should 4', () => {
    const result = sum(2, 2)
    expect(result).toBe(4)
})