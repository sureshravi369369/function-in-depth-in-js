function sum(tiffen,lunch,petrol){
   return tiffen+lunch+petrol
}

let result=sum(100,150,100)
console.log(result);



function sumExpense(){
    let total=0;
    for(let value of arguments){
       total += value;
    }
    return total    
}

let finalSum=sumExpense(12,10,50,45,78,113);
console.log(finalSum);