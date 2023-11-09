onload = () => {
    console.log(isHappyNumber(19));
}

const isHappyNumber = (number) => {
    do{
        const numberLength = number.toString().length;
        let sum = 0;
        for(let i=1; i<=numberLength; i++){
            sum+=parseInt(number%10);
            number/=10;
        }
        if(sum === 1) return true;
        number = sum;
    }while(parseInt(number/10) !== 0)

    return false;
}