//오늘의 할일 JS
//1.할 일 입력 후
//2.등록 버튼 클릭(클릭 이벤트 내에서 1번 입력값 인식)
//3. "여기에 할 일이 등록됩니다" 기존 li의 다음 형제 위치에 입력한 정보 등록
//위 알고리즘 3번 작업 시 주의사항
//ul태그의 마지막 자식 위치(appendchild)로 li추가("<li>"x, createElement()가능)
const toInput = document.querySelector('.to');
const toBtn = document.querySelector('#to_btn');
const ul = document.querySelector('ul');
console.log(toInput, toBtn, ul);

toBtn.addEventListener('click',()=>{
    if(toInput.value == ''){
        alert('입력 후 등록해야 합니다')
    }else{
            //console.log(toInput.value);
            //ul.appendChild("<li>abc</li>")//문자열삽입에러
        let li = document.createElement('li');
        li.innerHTML = `<span>${toInput.value}</span><button type="button" class="del_btn">x</button>`;
        console.log(li);
        ul.appendChild(li);
        toInput.value = '';

        //등록된 할일 옆 x 클릭 시 부모 li제거
        const close = document.querySelectorAll('.del_btn');
        for(let i of close){
            console.log(i);//배열 형태가 아닌 객체형태로 출력되서 바로 사용가능한 형태인지 확인
            i.addEventListener('click',()=>{
                i.parentNode.remove();
            })
        }
    }
    const span = document.querySelectorAll('li span');
    for(let i of span){
        console.log(i);
        i.addEventListener('click',()=>{
            i.parentNode.style.textDecoration = 'line-through';
        })
    }
})//tobtn 이벤트 종료(블록)위치