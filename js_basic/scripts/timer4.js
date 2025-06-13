//회원가입 버튼 클릭 시 join_msg에 '가입축하합니다' 메세지 출력되고
const joinBtn = document.querySelector('#join');
const joinMsg = document.querySelector('.join_msg');
console.log(joinMsg,joinBtn);
joinMsg.classList.remove('hide');//초기상태(숨기기)
joinBtn.addEventListener('click',()=>{
    joinMsg.textContent = '가입축하합니다';
    //(메세지출력 후) 3초 후 메세지 자동 사라지기
    const hideMsg = setTimeout(()=>{
        joinMsg.classList.add('hide');
    },3000)
})
const payBtn = document.querySelector('#pay');
const payMsg = document.querySelector('.pay_msg');
const payResetBtn = document.querySelector('#pay_reset');
console.log(payBtn,payMsg,payResetBtn);
let payMsgOut;
payMsg.classList.add('hide');//초기 숨기기
payResetBtn.classList.add('hide');
payBtn.addEventListener('click',()=>{
    payMsg.classList.remove('hide'); //숨기는 클래서 제거로 보이게 하기
    payResetBtn.classList.remove('hide');
    payMsg.textContent = '결제완료되었습니다. 5초 후 광고사이트로 이동합니다.';
    const payMsgOut = setTimeout(()=>{
        window.location.href = './timer3.html'
    },5000)
})

payResetBtn.addEventListener('click',()=>{
    clearTimeout(payMsgOut);
    console.log('setTimeout 이동삭제완료')
})