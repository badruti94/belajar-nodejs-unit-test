test('string not', () => {
    const name = 'Eko Kurniawan Khannedy'

    expect(name).not.toBe('Joko')
    expect(name).not.toEqual('Joko')
})

test('numbers.not', () => {
    const value = 2 + 2

    expect(value).not.toBeGreaterThan(6)
    expect(value).not.toBeLessThan(2)
    expect(value).not.toBe(10)
})