/* 25/05/15 배열공부 */
//const yoil = ['월' ,'화', '수'];
const yoil = new Array('월', '화', '수','목','금','토','일');
//console.log(yoil[0]);
//console.log(yoil[1]);
//console.log(yoil[2]);
//============색상배열
const colorArray = ['빨강' ,'주황', '노랑', '파랑' , '보라', '검정', '초록'];
console.log(colorArray[0]+colorArray[2]+colorArray[4]+colorArray[6]);
console.log(`제가 좋아하는 색상은 ${colorArray[1]},${colorArray[3]},${colorArray[4]}색입니다.`)
//과일 역순으로 출력하기
const furitArray = ['바나나','딸기','망고','사과','귤'];
console.log(furitArray[4],furitArray[3],furitArray[2],furitArray[1],furitArray[0]);
//(위)요일배열과 새로운 날씨카드배열 활용 문자출력하기
const weatherCard = ['비','눈','맑음','흐림'];
//목요일 날씨 :비
//금요일 날씨 :맑음
console.log()
//===================객체와 배열
const movieInfo = {
    name:'미션임파서블',
    director:'크리스토퍼 맥쿼리',
    genre:'액션',
    rating:169,
    actor:['톰크루즈','헤일릿 앳웰','빙 라메스'],
    releaseDate:'2025.05.17',
    age:15,
    story:'전 세계 국가와 조직의 기능이 마비되고...',
}
const movieInfo_v2 = {
    name:'하얼빈',
    director:'우민호',
    genre:'드라마',
    rating:113,
    actor:['현빈','박정민','조우진','박훈'],
    releaseDate:'2024/12/24',
    age:15,
    story:'1908년 함경북도 신아산에서 안중근이 이끄는 독립군들은 일본군과의 전투에서 큰 승리를 거둔다',
}
//동일한 분류의 객체가 많을 경우 묶는 방법
const movieAll = [
    {
        name:'미션임파서블',
        director:'크리스토퍼 맥쿼리',
        genre:'액션',
        rating:169,
        actor:['톰크루즈','헤일릿 앳웰','빙 라메스'],
        releaseDate:'2025.05.17',
        age:15,
        story:'전 세계 국가와 조직의 기능이 마비되고...',
    },{
        name:'하얼빈',
        director:'우민호',
        genre:'드라마',
        rating:113,
        actor:['현빈','박정민','조우진','박훈'],
        releaseDate:'2024/12/24',
        age:15,
        story:'1908년 함경북도 신아산에서 안중근이 이끄는 독립군들은 일본군과의 전투에서 큰 승리를 거둔다',
    }
]
console.log(movieAll[1]);
//감독 :크리스토퍼 맥쿼리
//장르 :액션 /169분
//등급 : 15세 이상 관람가
console.log(`감독:${movieAll[0].director}`);
console.log(`장르:${movieAll[0].genre} /${movieAll[0].rating}분`);
console.log(`등급:${movieAll[0].age}세 이상 관람가`);
//=====================산술 연산자
const greeting = 'hello';
const lang = ['figma','html','css'];
//hello figma
console.log(greeting+lang[0]);
console.log(greeting+lang[1]);
console.log(greeting+lang[2]);
const num1 = 1;
const num7 = 7;
const global = 'world';
console.log(num1+num7);
console.log((num1+num7)+global);
//===================빼기,곱하기,나누기 등 연산은 숫자가 문자로 따옴표가 묶여 있을 시 자동으로 숫자로 형변환 시킨다.
const data1 = 1;
const data7 ='7';
console.log(data1+data7);//17
console.log(data1-data7);//-6
console.log(data1*data7);//7
console.log(data1/data7);//7
console.log(data1%data7);//1
console.log(data1**data7);//1
console.log(typeof (data1-data7));