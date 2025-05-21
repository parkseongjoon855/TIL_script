//DOM EVENT
//HTML태그에서 JS로 동적제어하고 싶은 대상만 변수로 만든다.
//회원만 주문되는 주문하기 버튼 알고리즘
//(비회원인 경우) 주문하기 버튼을 클릭했을 때 '회원만 주문할 수 있습니다' 메세지 출력
//주문하기 버튼 DOM객체변수
//클릭 == 이벤트(HTML,Javascript)
// 회원만 메세지 출력 == 함수
//이벤트리스너 -> 리스너(Listener)란? 특정 이벤트가 발생했을때 실행할 함수를 의미한다.
const buyBtn = document.querySelector('#buyBtn');
const payBtn = document.querySelector('#payBtn');
const idBtn = document.querySelector('#idBtn');
console.log(buyBtn);//변수정상확인
console.log(payBtn);
console.log(idBtn);
//버튼 onclick 이벤트리스너로 호출할 함수 생성
function userOrderMsg(){
    return console.log('회원만 주문가능합니다 로그인해주세요');
}
//결제하기 클릭 시 '결제 완료되었습니다' 출력 알고리즘
function payMsg(){
    return console.log('결제 완료되었습니다');
}
//아이디중복확인 클릭 시 '아이디가 중복되지 않습니다. 사용하셔도 좋습니다' 출력 알고리즘
function userIdChkMsg(){
    return console.log('아이디가 중복되지 않습니다. 사용하셔도 좋습니다');
}
//키보드 이벤트
//리뷰입력창에 키보드를 눌렀을때 '50자 이상 입력하세요' 출력 알고리즘
const userReview = document.querySelector('input[name*=review]');
console.log(userReview);
function review50Msg(){
    return console.log('50자 이상 입력하세요');
}
//id 입력창 객체 준비 후 키보드를 아무거나 입력했을 때 '아이디는 영어로 시작해야합니다' 출력 알고리즘
const userIdInput = document.querySelector('input[name*=Id]');
console.log(userIdInput);
function userId(){
    return console.log('아이디는 영어로 시작해야합니다')
}
//pw 입력창 객체 준비 후 키보드를 아무거나 입력했을 때 '비밀번호는 특수문자 포함 12글자 이상 입력하세요' 출력 알고리즘
const userPasswardInput = document.querySelector('input[name*=Passward]');
console.log(userPasswardInput);
function userPassward(){
    return console.log('비밀번호는 특수문자 포함 12글자 이상 입력하세요');
}
//기타 이벤트
//focus 특정 요소에 포커스(커서 활성화)됐을 경우
//userId.style.border = '3px solid green';//즉시실행 테스트
function focusGreen(){
    return userIdInput.style.border = '3px solid green';
}
userIdInput.style.outline = 'none';
function blurGray(){
    return userIdInput.style.border = '1px solid gray';
}
//쇼핑몰 상품 수량 입력 알고리즘
const itemNum =document.querySelector('input[name*=item]');
console.log(itemNum);
function focusBgYellow(){
    return itemNum.style.backgroundColor ='yellow';
}
function blurBgWhite(){
    return itemNum.style.backgroundColor ='white';
}
//기본 수량 1
//사용자가 숫자 입력을 위해서 커서를 두면 배경색 노랑변경
//커서를 빼면 배경색 흰색
//문서가 로딩되었을 때 실행함수
function loadMsg(){
    return alert('문서 로딩 완료')
}
console.log('-------------------------------------이벤트와 콜백함수');
//객->이->함
const googleJoin = document.querySelector('.google_join');
console.log(googleJoin);
//자바스크립트에 작성하는 객체 이벤트 문법
//객체.addEventListener('이벤트',콜백함수);
//addEventListener이벤트 작성 시 'on' 없이 이벤트만 작성한다.
googleJoin.addEventListener('click', googleGo);
function googleGo(){
    return window.open('https://accounts.google.com','_blank');
}
const naverJoin = document.querySelector('.naver_join');
console.log(naverJoin);
naverJoin.addEventListener('click', naverGo)
function naverGo(){
    return window.open('https://nid.naver.com/nidlogin.login?mode=form&url','blank');
}
const kakaoJoin = document.querySelector('.kakao_join');
console.log(kakaoJoin);
kakaoJoin.addEventListener('click', kakaoGo)
function kakaoGo(){
    return window.open('https://accounts.kakao.com','blank');
}
//현재 페이지 변경방법
//1.객체
const fileLink = document.querySelector('.file_link');
console.log(fileLink);
//2.이벤트
fileLink.addEventListener('click', link0520)
//3.함수
//JS에서 상대경로 연결 시 js파일 기준이 아닌 js가 연결된 html파일이 저장된 위치를 기준으로 상대경로를 작성한다.
function link0520(){
    return window.location.href = 'bom1.html';
}
const indexFile = document.querySelector('.index_file');
console.log(indexFile);
indexFile.addEventListener('click', indexFe)
function indexFe(){
    return window.location.href = 'index.html'
}
const readFile = document.querySelector('.readme_file');
console.log(readFile);
readFile.addEventListener('click', readFileFFun)
function readFileFFun(){
    return window.location.href = '../README.md';
}
/* 상품 수량 증가 알고리즘 */
//1.수량 초기값 1
//2.+버튼 클릭 시 수량 1씩 증가해야 한다
const numInput = document.querySelector('input[name=num]');
const numBtn = document.querySelector('#num_btn');
const numBtnMinus = document.querySelector('#num_btn_minus');
console.log(numInput);
console.log(numBtn);
console.log(numBtnMinus);
numInput.value = 1;//초기값이므로 이벤트 없이 바로 작성
numBtn.addEventListener('click',numPlus)
function numPlus(){
    //1. 증간연산자 활용법
    //return numInput.value = ++numInput.value;
    //2. 더하기연산자와 형변환메서드 활용법
    console.log(typeof numInput.value);
    return numInput.value = Number(numInput.value)+1;
}
numBtnMinus.addEventListener('click',numBtnMinusFun)
function numBtnMinusFun(){
    return numInput.value = Number(numInput.value)-1;
}