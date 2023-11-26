test('Test Outer', () => {
    expect(1).toBe(1)
})

describe('Inner scope', () => {
    test('Test Inner 1', () => {
        expect(1).toBe(1)
    })
    test('Test Inner 2', () => {
        expect(1).toBe(1)
    })
})