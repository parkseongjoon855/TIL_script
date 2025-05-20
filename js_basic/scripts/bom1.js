//BOM(browser object model)내장함수
/* const msg1 = window.alert('잠시 기다려 주세요');
const msg2 = window.alert('잘못 접근하셨습니다');
console.log(msg1); */
/* const userAge = window.prompt('나이를 입력하세요');
console.log(userAge); */
/* const userPrint = window.confirm('인쇄하시겠습니까');
console.log(userPrint);  */
//const userInfo = window.open('http://google.com','_blank');
//const userWrite = window.document.write('hello js');
//window.document.write('안녕하세요 자바스크립트');
//실행함수가 변수에 대입하는 값이 없거나 일회성으로 한번 동작하고 끝나는 경우는 변수를 선언할 필요 없이 바로 내장함수를 작성해도 된다.
//변수선언이 필요한 BOM 내장 함수 : prompt(),confirm()
//window.print();
//사용자에 따른 인쇄제한이 있는 사이트라면 인쇄내장함수를 변수에 담아야 한다.
//==============================DOM - HTML Node
const pTag = document.getElementsByTagName('p');
const h1Tag =document.getElementsByTagName('h1');
const h2Tag = document.getElementsByTagName('h2');
const spanTag = document.getElementsByTagName('span');
const ulCls = document.getElementsByClassName('group');
const liCls = document.getElementsByClassName('list');
const activeCls = document.getElementsByClassName('active');
const wrapId = document.getElementById('wrap');
const dlCls = document.getElementsByClassName('define');
const dtId = document.getElementById('title');
const ddCls = document.getElementsByClassName('contents');
const dt = document.getElementsByTagName('dt');
console.log(pTag);
console.log(h1Tag);
console.log(h2Tag);
console.log(spanTag);
console.log(ulCls);
console.log(liCls);
console.log(activeCls);
console.log(wrapId);
console.log(dlCls);
console.log(dtId);
console.log(ddCls);
console.log(dt);
//=======================DOM 객체 속성
//객체.style = 'CSS속성:값';
pTag[0].style = 'background-color:yellow';
pTag[1].style = 'background-color:blue';
ulCls[0].style = 'border:2px solid red';
liCls[0].style = 'border-bottom:1px solid blue';
liCls[1].style = 'border-bottom:1px solid aqua';
liCls[2].style = 'border-bottom:1px solid green';
liCls[3].style = 'border-bottom:1px solid pink';
activeCls[0].style = 'color:red';
activeCls[1].style = 'color:blue';
wrapId.style = 'padding:30px';
func.style = 'color:red';
dlCls[0].style = 'background-color:red';
dtId.style = 'background-color:blue';
ddCls[0].style ='background-color:aqua';
ddCls[1].style = 'background-color:pink';
dt[1].style ='background-color:gray';
//위와 같이 style속성을 이용한 CSS는 일반 CSS선택자와 다르게 가장 우선순위가 높은 개념으로 적용된다. 적용 후 모습은 웹브라우저 F12 개발자도구에서만 확인 가능하다.
//CSS 우선순위 : 자바스크립트 style속성 > ID > class > Tag
console.log('=========================================')
//Es6 querySelector 이용 DOM선택하기
const order01 = document.querySelector('.order');
const orderLi = document.querySelectorAll('.order li');
const orderToday = document.querySelector('#today');
const orderItem = document.querySelector('.order .item');
const gnb = document.querySelector('.gnb');
const lnb = document.querySelector('.lnb');
const nav = document.querySelector('nav');
const aMenu = document.querySelectorAll('nav a');
const gnbLi = document.querySelectorAll('.gnb > li');
const lnbLi = document.querySelectorAll('.lnb > li');
console.log(order01);
console.log(orderLi);
console.log(orderToday);
console.log(orderItem);
console.log(gnb);
console.log(lnb);
console.log(nav);
console.log(aMenu);
console.log(gnbLi);
console.log(lnbLi);
orderLi[0].style = 'font-size:2rem';
orderToday.style = 'font-size:1.8rem';
orderItem.style = 'font-size:1.5rem';
orderLi[3].style = 'font-size:1.25rem';
gnb.style = 'background-color:pink';
lnb.style = 'background-color:gray';
nav.style = 'background-color:lime';
aMenu[0].style = 'color:#000';
aMenu[1].style = 'color:#000';
aMenu[2].style = 'color:#000';
aMenu[3].style = 'color:#000';
gnbLi[0].style = 'border:1px solid red';
gnbLi[1].style = 'border:1px solid pink';
lnbLi[0].style = 'border:2px solid lime';
//lnbLi[1].style = 'border:2px solid blue';
//객체.속성 = '값';
//객체.속성.속성 = '값';
lnb.style.backgroundColor ='lime';
lnb.style.padding = '30px';
lnb.style.borderTop = '2px solid red';
console.log('=========================================');
let a = 10;
let b = '20';
console.log(a , typeof a);//10Number
console.log(b , typeof b);//10String
//let age = prompt('당신의 나이는?');
//alert( typeof age);
//prompt로 사용자가 입력하는 값은 무조건 문자(String)으로 처리된다.(암시적 형변환)
//자동으로 형변환 된 데이터타입이 문자인 경우 숫자로 바꾸고싶다면 명시적형변환 중 숫자로 변환해주는 Number()내장함수를 사용한다.
//Number(숫자로변환하고싶은데이터 또는 함수)
//const age = prompt('당신의 나이는?');
//const age = Number(prompt('당신의 나이는?'));
//(위)프로그래밍 동작 순서
//1.prompt('당신의 나이는?'):사용자가 입력한 값을 문자로 자동변환
//2.number():prompt가 문자로 변환한 값을 대입
//3. age = :변수age에 숫자로 변환한 값을 대입
//console.log(`올해 당신의 나이는 ${age}살입니다.`);
//console.log(`내년 당신의 나이는 ${Number(age)+1}살입니다.`);
//console.log('===============================쇼핑몰 구입 알고리즘');
//상품 1개 가격 기준 15700원
//현재 이벤트중 1+1
//1. 사용자가 구입할 물건 개수 정하기
//2. 개수에 따라 최종 가격 구하기
//결과예) 구입한 물건은 ? 이고 이벤트상품 ?개가 추가됩니다. 총 결제 금액은 ?원입니다.
let price = 15700;
const productQa = Number(prompt('구입할 개수를 입력하세요'));
const eventNum = productQa;//이벤트 증정 개수
const total = price*productQa;//최종 결제 가격
console.log(`구입할 물건은 ${productQa}개이고 이벤트상품은 ${eventNum}개가추가됩니다. 총 결제 금액은 ${total}원입니다.`);