const { expect } = require("@jest/globals");
const ValidateAnISBN = require("../main.js")

test('ISBN of 10 Digit'), () => {
    expect(ValidateAnISBN('817525766-0')).toBe('ISBN Valido para 10 digitos')
}

test('ISBN of 13 Digit'), () => {
    expect(ValidateAnISBN('978-987-988-0909')).toBe('ISBN of 13 Digit')
}