const ValidateAnISBN = (ISBN) => {
    const Value = ISBN.replace(/-/g, '');
    
   
    const Digit = Array.from(Value);
        Digit.reverse();
        let sum = 0;
        let Counter = 1;
            for (let i = 0; i < Digit.length; i++) {
                let Position = Digit[i] * Counter;
                sum += Position;
                Counter++;
            }
            let DivisionResult = sum % 11;
            if (DivisionResult === 0) {
                return("ISBN Valido para 10 digitos");
            }else{
                return('ISBN Invalido')
            }
    //console.log("Quocient" +DivisionResult);
}
// console.log(ValidateAnISBN('817525766-0'));
module.exports = ValidateAnISBN;