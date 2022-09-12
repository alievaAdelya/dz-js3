let number1 = [1,2,3,];
let number2 = [1,2,3,4,5,6];

function twoMass (number1,number2) {
    if (number1.length < number2.length){
        console.log(number2.length);
    }else if(number1.length > number2.length){
        console.log(number2.length);
    }
}

twoMass(number1,number2);