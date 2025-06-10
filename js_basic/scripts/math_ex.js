const birthDate = document.querySelector('#birthdate');
const birthBtn = document.querySelector('#birth_btn');
const resultDate = document.querySelector('.date em');
const resultTime = document.querySelector('.time em');
console.log(birthDate,birthBtn,resultDate,resultTime);
birthBtn.addEventListener('click',birthFunc);
function birthFunc(){
    const birth = new Date(birthDate.value);
    const today = new Date();
    console.log(birth, today);
    const birthToday = today.getTime() - birth.getTime();
    console.log(birthToday);
    const dateFlow = Math.floor(birthToday/ (1000*60*60*24));
    const timeFlow = Math.floor(birthToday/ (1000*60*60));
    resultDate.textContent = dateFlow;
    resultTime.textContent = timeFlow;
}