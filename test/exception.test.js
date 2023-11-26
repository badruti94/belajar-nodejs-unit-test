const {callMe, MyException} = require('../src/exception')

test('exception', () => {
    expect(() => callMe('Eko')).toThrow()
})