// rest operator:

function total(...arguments){
     let result=arguments.reduce((accumuletor,currentValue)=>{
            return accumuletor+currentValue
     })
     return result;
}
let result=total(12,10,55,77,33,55)

console.log(result);


function sum(num1,...arguments){
    let total=arguments.reduce((a,b)=>{
         return a+b
    })

    let result=total-num1
    return result

}

let final=sum(50,13,55,66,24,90);

console.log(final);