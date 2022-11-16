
let number1=365;
let number2=500;

// function decleration:

function addNo(){
    let result=number1+number2;
    console.log(result);
}
addNo();

// function expression:

let add=function(){
    let result=number1+number2;
    console.log(result);
}
add();

// arrow function:

let total=()=>{
    let result=number1+number2;
    console.log(result);
}
total();
