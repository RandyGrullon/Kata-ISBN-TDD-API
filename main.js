const ISBNValidate = (ISBN) => {
    const Value = ISBN.replace(/-/g, '');
    const Digit = Array.from(Value);
        Digit.reverse();
        let sum = 0;
        
        for (let i = 0; i < Digit.length; i++) {
        sum = Digit[0] * 1 + Digit[1] * 3 + Digit[2] * 1 + Digit[3] * 3 
            + Digit[4] * 1 + Digit[5] * 3 + Digit[6] * 1 + Digit[7] * 3 
            + Digit[8] * 1 + Digit[9] * 3 + Digit[10] * 1 + Digit[11] * 3
            + Digit[12] * 1;
            }
            console.log(sum)

            let DivisionResult = sum % 10;
            if (DivisionResult === 0) {
                console.log("ISBN Valido para 13 digitos");
            }else{
                console.log('ISBN Invalido')
            }
    console.log("Quocient " + DivisionResult);
}
console.log(ISBNValidate('978-0-7167-0344-0'));
module.exports = ISBNValidate;