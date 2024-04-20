function fibonacciGenerator(number){
    let numbers = [];
    let arrayNumber = 0;
    let fib = 0;
    let soma = 0;
    let arrayNumber2 = 1;
    if(number === 0){
        arrayNumber=0;
        numbers.push(arrayNumber);
    } else if(number === 1){
        numbers.push(arrayNumber);
        
    } else {
        numbers.push(arrayNumber);
        numbers.push(arrayNumber2);
        for(let i = 2; i < number; i++){
            soma = arrayNumber + arrayNumber2;
            numbers.push(soma);
            arrayNumber = arrayNumber2;
            arrayNumber2 = soma;
            
            
        }
        
    }
    return numbers;
    
}

let outPut = fibonacciGenerator(7);
console.log(outPut);