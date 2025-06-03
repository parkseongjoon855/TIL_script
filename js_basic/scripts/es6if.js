//삼항조건연산자기본문법
//조건 ?조건이참일때결과 : 조건이거짓일때결과;
let x = 5;
let y = x+10;
//삼항조건의 결과가 콘솔로그에 출력되는 형태
console.log(y==15 ? 'o':'x');
let total = x>10 ? '0' :'x';
console.log(total);

//연습2. 성인/미성년자 구분하기
//18살 이상이면 '성인입니다' 아니면 '미성년자입니다'
/* const useAge = prompt('당신의 나이는?')
total = useAge>=18 ?'성인입니다' : '미성년자입니다' 
console.log(total); */
//봄 500점, 여름 600점
const game_score = [{
    name:'봄',
    score:500,
},{
    name:'여름',
    score:600,
}]
console.log(game_score);
//오늘의 1등은 00이고 점수는 000입니다!
total = game_score[0].score>game_score[1].score ? game_score[0] : game_score[1];
console.log(`오늘의 1등은 ${total.name}이고 점수는 ${total.score}입니다!`);
//------------------------삼항조건 + 리뷰 JS
const re = document.querySelector('textarea[name=re');
const reBtn = document.querySelector('#re_btn');
console.log(re, reBtn);
reBtn.addEventListener('click',()=>{
    //콘솔테스트: 리뷰내용 실시간 출력
    console.log(re.value);
    //콘솔테스트: 리뷰글자 수 출력
    console.log(re.value.length);
    result = re.value.length >= 100 ? '등록완료': '100자 이상 입력하세요.'
    alert(result);
})
//쇼핑 수량과 가격 알고리즘
//1개 가격 기준 12500원
//쇼핑몰 상품 데이터베이스
const productDB = [{
    name:'떡닭도리탕',
    price:12500,
    stock:10,//재고수량(최대구매개수)
},{
    name:'꼬막비빔장',//productDB[1].name
    price:5800,//productDB[1].price
    stock:20,//productDB[1].stock
}]
console.log(productDB);
//DOM 변수
const numInput = document.querySelector('input[name=num]');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const priceP = document.querySelector('.price');
let num =1;//주문수량
let result = '';//결과출력담을변수
console.log(numInput,minusBtn,plusBtn,priceP)
//초기 주문수량 표시
numInput.value = num;
//증가 버튼 클릭 시 재고수량만큼 증가하고 재고수량 오버 시 '최대구매수량입니다' 경고창 출력
plusBtn.addEventListener('click',()=>{
    result = num >= productDB[0].stock  ? '최대구매수량입니다':++num;
    numOperatorFunc(0)
})
//감소 버튼 클릭 시 현재 수량이 1보다 작으면 '최소구매수량입니다' 아니면 수량감소
minusBtn.addEventListener('click',()=>{
    result = num <= 1 ? '최소구매수량입니다':--num;
    numOperatorFunc(0)
})
//증가,감소 버튼 시 반복 실행하는 함수(0,1로 매번 다른 인덱스만 매개변수처리)
function numOperatorFunc(index){
    numInput.value = num;
    priceP.textContent =(num* productDB[index].price).toLocaleString('ko-kr')+'원';
    console.log(result);
}