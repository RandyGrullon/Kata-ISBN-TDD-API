const ValidateAnISBN = require("../main")
const ISBNValidate = require("../Code")

test('ISBN of 10 Digit',()=>{
    expect(ValidateAnISBN('817525766-0')).toBe('ISBN Valido para 10 digitos')
})

test('ISBN of 13 Digit',()=>{
    expect(ISBNValidate('978-0-7167-0344-0')).toBe('ISBN Valido para 13 digitos')
})