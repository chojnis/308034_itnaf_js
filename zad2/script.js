const number = document.getElementById('number');
const incrementBtn = document.getElementById('increment');
const changeColorBtn = document.getElementById('change-color');

onload = () => {
    incrementBtn.addEventListener('click', () =>{
        number.textContent = parseInt(number.textContent)+1;
    });
    
    changeColorBtn.addEventListener('click', () => {
        number.classList.toggle('color-red');
    });
}
