onload = () => {
    console.log(palindrom('kajsak'));
    console.log(palindrom('kokok'));
}

const palindrom = (word) => {
    let x = 0;
    let y = parseInt(word.length-1);
    while(x < y){
        if(word[x] !== word[y]) return false;
        x++;
        y--;
    }
    return true;
}