const Validate = require("../Main_Code");

test('ISBN null Exception ', () => {
    expect(Validate(null)).toBe('Null Exception');
});

test('ISBN Empty', () => {
    expect(Validate(" ")).toBe(' ');
});

test('ISBN Int To Empty', () => {
    expect(Validate(9347856234)).toBe(' ');
});

test('ISBN 10 digit validation', () => {
    expect(Validate('0-7167-0344-0')).toBe('ISBN is Valid For 10 digits');
});

test('ISBN 13 digit validation', () => {
    expect(Validate('978-0-7167-0344-0')).toBe('ISBN is Valid For 13 digits');
});