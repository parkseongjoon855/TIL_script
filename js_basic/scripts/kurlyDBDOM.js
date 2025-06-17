// ul id="container">DB 무한스크롤 삽입
const container = document.querySelector('#container');
let isLoding = false //로딩완료 true, 로딩미완료false
console.log(container);
    //무한 스크롤로 인해서 불러오는 DB값이 매번 다르므로 필요한 변수 생성
    //한번에 출력되는 개수는 4
    const itemLoad = 4;
    //스크롤내릴때 인식하는 반복문의 초기값
    const startIndex = 0;
    let endIndex = startIndex + itemLoad;
    //스크롤내릴때 인식하는 반복문의 종료값(조건)
loadMoreContent()//처음보이는 제품나열을 위한 함수 호출
function loadMoreContent(){
    //할인가 계산식
    //(원가 * (1- 할인율 / 100)).toLocaleString
    //math.round
    //초기값 + 출력개수
    console.log(itemLoad, startIndex, endIndex);
    //변수를 활용한 반복문
    for(let i=startIndex; i<endIndex; i++){
        const newLi = document.createElement('li');
        newLi.innerHTML = `<img src="${kurlyDB[i].src}" alt="${kurlyDB[i].name}">`
        newLi.innerHTML += `<p class="name">${kurlyDB[i].name}</p>`;
        newLi.innerHTML += `<p class="summary">${kurlyDB[i].summary}</p>`;
        newLi.innerHTML += `<p class="price_original"><del>${(kurlyDB[i].price).toLocaleString('ko-kr')}원</del></p>`;
        newLi.innerHTML += `<p class="price">${Math.round((kurlyDB[i].price) * (1 - kurlyDB[i].sale / 100)).toLocaleString('ko-kr')}원</p>`;
        newLi.innerHTML += `<p class="sale">${kurlyDB[i].sale}%</p>`;
        newLi.innerHTML += `<p class="review">${kurlyDB[i].review}+</p>`;
        container.appendChild(newLi);
    }
    endIndex += itemLoad;
    isLoding = false;
}
//위 for문 한번 출력 후 스크롤이벤트로 인해 재출력 시 endIndex값이 다음출력되는 DB 개수만큼 증가되게 수정

//광고 뷰포트 영역에서 등장하는 자바스크립트
const ad = document.querySelectorAll('.ad p');
console.log(ad);
//스크롤 이벤트
window.addEventListener('scroll',()=>{

    //1. 요소가 뷰포트와의 거리가 어떻게되는지 확인 변수
    /*  const adTop = ad[0].getBoundingClientRect().top;
    console.log(adTop); */
    //현재 뷰포트 하단 위치 window.scrollY + window.innerHeight
   /*  if(adTop < window.innerHeight * 0.8){
        ad[0].classList.add('active');
    }else{
        ad[0].classList.remove('active');
    }
    //ad[1] 복습
    if(adTop < window.innerHeight * 0.8){
        ad[1].classList.add('active');
    }else{
        ad[1].classList.remove('active');
    }
    if(adTop < window.innerHeight * 0.8){
        ad[2].classList.add('active');
    }else{
        ad[2].classList.remove('active');
    } */
    //반복문 활용
    for(let i of ad){
        const adTop = i.getBoundingClientRect().top;
        
        if( adTop < window.innerHeight * 0.8 ){
            i.classList.add('active');
        }else{
            i.classList.remove('active');
        }
    }
    //문서 전체 높이 document.documentElement.scrollHeight
    const currentScroll = window.scrollY + window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    const ScrollValue = 0.9 //0~1 기준으로 사용자의 스크롤 위치 파악값
    //console.log(`현재 뷰포트값 ${currentScroll}, 전체높이 ${totalHeight}`);
    //현재 스크롤 위치가 전체 스크롤 위치대비 80% 뷰포트 위치에 왔는지 + DB로드안된 상태인지
    //현재 뷰포트>= 전체스크롤값 * 사용자위치값
    if(currentScroll>= totalHeight * ScrollValue && !isLoding){
        //로드된 종료인덱스가 DB 전체 개수와 같으면 종료
        if(endIndex >= kurlyDB.length){return}
        console.log('새로운 컨텐츠 로드 중...')
        isLoding = true
        loadMoreContent()
    }
    
})//스크롤 이벤트 종료위치