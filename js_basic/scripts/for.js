//for(초기변수; 조건문; 증감식){조건문이 참일때 반복실행결과}
//"자바스크립트" 문자열 10번 반복
for(let i=1; i<11; i++){
    console.log('자바스크립트'+i);
}
//"1월~12월" 12번 반복
//개발자가 화면에 출력하고 싶은 첫번째 번호가 for문의 초기변수에 값이 된다.
for(let i=1; i<=12; i++){
    console.log(i+'월')
}
console.log('--------------------');
//6월~12월 반복 출력
for(let i=6; i<13; i++){
    console.log(i+'월')
}
console.log('----------------------');
const coffee = ['아메리카노','카페라떼','에스프레소','녹차라떼','돌체라떼','차이라떼','프라푸치노'];
console.log(coffee);
for (let i=0; i<coffee.length; i++){
    console.log(coffee[i]);
}
//1번 메뉴 아메리카노
//2번 메뉴 카페라떼...반복
for(let i=0; i<coffee.length; i++){
    console.log((i+1)+'번 메뉴 ' +coffee[i]);
}
//역순 카페 메뉴 출력
for(let i=coffee.length-1; i>=0; i--){
    console.log(coffee[i]);
}
//구구단 2단~ 9단출력
//2단 2x1=2 형태로 출력하기
for(let i=1; i<10; i++){
    console.log(`2x${i}=${2*i}`);
}
//for 반복 + if 조건
//1~20까지 출력 반복문
for(let i=1; i<21; i++){
    //조건문 if 활용 1~20까지 반복숫자 중 홀수만 출력
    //숫자%2 == 1
    if(i%2==1){console.log(i)};
}
console.log('------------')
//10~20까지 역순으로 짝수만 출력 반복문
for(let i=20; i>=10; i--){
    if(i%2==0){console.log(i)};
}
console.log('---------------');
const navA = document.querySelectorAll('nav a');
console.log(navA);
for(let i=0; i<navA.length;i++){
    //console.log(navA[i]);
    //모든 a 글자색 빨강
    //navA[i].style.color = '#f00';
    //홀수 a 빨강,짝수 a 파랑
    if(i%2==1){
        navA[i].classList.add('odd');
        //navA[i].style.color = 'red';
        //navA[i].style.backgroundColor = '#ff0';
    }else{
        navA[i].classList.add('even');
        //navA[i].style.color = 'blue';
        //navA[i].style.backgroundColor = '#eee';
    }
}
const listS = document.querySelectorAll('.list li');
console.log(listS);
for(let i=0; i<listS.length;i++){
    listS[i].style.background = '#ff0';
}