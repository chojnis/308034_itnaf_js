onload = () => {
    console.log(sum([1, 2]));
    console.log(sum([3, 7, 5]));
}

const sum = (array) => {
    let result = 0;
    array.forEach(number => result+=number);
    return result;
}