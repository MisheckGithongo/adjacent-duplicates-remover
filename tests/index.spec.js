/* eslint-disable no-undef */
const answer = require('../answer.js')

describe('Duplicates remover', () => {
    it('Should return a duplicates free string', async () => {
        expect(answer('abbaca')).toBe('ca')
    })
    it('Should return a duplicates free string', async () => {
        expect(answer('xyaaya')).toBe('xa')
    })
})