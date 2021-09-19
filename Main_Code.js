    const ISBN10DigitValidation = (ISBN) =>{
    const Digit = Array.from(ISBN);
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
        }

    const Isbn13DigitValidation = (ISBN) => {
        const Digit = Array.from(ISBN);
        let sumAlt = 0;
        sumAlt = Digit[0] * 1 + Digit[1] * 3 + Digit[2] * 1 + Digit[3] * 3 
            + Digit[4] * 1 + Digit[5] * 3 + Digit[6] * 1 + Digit[7] * 3 
            + Digit[8] * 1 + Digit[9] * 3 + Digit[10] * 1 + Digit[11] * 3
            + Digit[12] * 1;
        let DivisionResult = sumAlt % 10;
        if (DivisionResult === 0) 
        {
            return("ISBN Valido para 13 digitos");
        }else
        {
            return('ISBN Invalido para 13 digitos')
        }
    }

function Validate (ISBN)  {
    if( ISBN == null || !ISBN ){
        return("Null Exception");
    }else if(ISBN == " " || !isNaN(ISBN)){
        return(" ");
    }
        const LineEliminator = ISBN.replace(/-/g, '');
        const DigitCounter = LineEliminator.length;
        if(DigitCounter == 10){
        return(ISBN10DigitValidation(LineEliminator));
    }else if(DigitCounter == 13){
        return(Isbn13DigitValidation(LineEliminator));
    }
}
module.exports = Validate;
