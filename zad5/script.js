onload = () => {
    console.log(fibonnaci(9));
    console.log(fibonnaci2(9));
}

const fibonnaci = (n) => {
    let result = [];
    for(let i=0; i<n; i++){
        result.push(computeFibonnaci(i));
    }

    return result;
}

const computeFibonnaci = (n) => {
    if(n<2) return n;
    return computeFibonnaci(n-1) + computeFibonnaci(n-2);
}

// less operations
var fibonacciR = [];
const fibonnaci2 = (n) => {
    if(fibonacciR.at(n) === undefined){
        if(n<2) fibonacciR[n] = n;
        else fibonacciR[n] = fibonnaci2(n-1)[n-1] + fibonnaci2(n-2)[n-2];
    }

    return fibonacciR;
}