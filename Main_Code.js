const ISBN10DigitsValidation =(ISBN) =>{
    const Digit = Array.from(ISBN);
    Digit.reverse();
    let sum = 0;
    let counter= 1;
        for (let i = 0; i < Digit.length; i++) {
            let Position = Digit[i] * counter;
            sum += Position;
            counter++;
        }
        let DivisionResult = sum % 11;
        if (DivisionResult === 0) {
            return "ISBN is Valid For 10 digits";
        }else{
            return "Invalid ISBN";
        }
}

const ISBN13DigitsValidation = (ISBN) =>{
    const Digit = Array.from(ISBN);
        let sumAlt = 0;
        sumAlt = Digit[0] * 1 + Digit[1] * 3 + Digit[2] * 1 + Digit[3] * 3 
                + Digit[4] * 1 + Digit[5] * 3 + Digit[6] * 1 + Digit[7] * 3 
                + Digit[8] * 1 + Digit[9] * 3 + Digit[10] * 1 + Digit[11] * 3
                + Digit[12] * 1;
        let DivisionResult = sumAlt % 10;
        if (DivisionResult === 0) 
        {
            return("ISBN is Valid For 13 digits");
        }else
        {
            return('Invalid ISBN')
        }
}

function Validate(ISBN){
    if (ISBN == null || !ISBN){
        return 'Null Exception';
    }else if (ISBN == " " || !isNaN(ISBN)) {
        return " ";
    }

    const LineEliminator = ISBN.replace(/-/g, '');
    const DigitCounter = LineEliminator.length;
    if (DigitCounter == 10) {
        return(ISBN10DigitsValidation(LineEliminator));
    }else if (DigitCounter == 13) {
    return (ISBN13DigitsValidation(LineEliminator));
    }
}

module.exports = Validate;