onload = () => {
    console.log(range(1,5));
    console.log(range(5, 1));
}

const range = (a, b) => {
    let result = [];
    if(b>a){
        do{
            result.push(a);
            a++;
        } while(a <= b)
    }

    return result;
}