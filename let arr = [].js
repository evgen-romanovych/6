function factorial (a){
    if (a <= 1){

        return 1
    }
    return a * factorial (a-1)
}
const factorialresult1 = factorial(6)
console.log ({factorialresult1})


function fibonaci (a)
{
    if (a <=1)
    { 
        return a
    }
    
    return fibonaci (a-1) + fibonaci(a-2)
}
const fibonaciresult = fibonaci(20)
console.log ({fibonaciresult})