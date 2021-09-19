const Validate = require("../Main_Code")


test('ISBN Null Expected',()=>{
    expect(Validate(null)).toBe('Null Exception')
})

test('ISBN Empty',()=>{
    expect(Validate(" ")).toBe(' ')
})

test('ISBN int imput',()=>{
    expect(Validate(2342356)).toBe(' ')
})

test('ISBN 10 digit Validation',()=>{
    expect(Validate('0-7167-0344-0')).toBe('ISBN Valido para 10 digitos')
})

test('ISBN 13 digit Validation',()=>{
    expect(Validate('978-0-7167-0344-0')).toBe('ISBN Valido para 13 digitos')
})
