onload = ()=>{

    console.log(`isOdd(1) = ${isOdd(1)}`);
    console.log(`isEven(1) = ${isEven(1)}`);

}

function isOdd(x){
    return !!(x%2);
}

const isEven = x => !(x%2);