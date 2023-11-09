onload = () => {
    console.log(fibonnaci(9));
}

const fibonnaci = (n) => {
    let result = [];
    for(let i=0; i<9; i++){
        result.push(computeFibonnaci(i));
    }

    return result;
}

const computeFibonnaci = (n) => {
    if(n<2) return n;
    return computeFibonnaci(n-1) + computeFibonnaci(n-2);
}