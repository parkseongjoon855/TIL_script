//데스크탑 메뉴 복제 -> 모바일 메뉴 붙여넣기
const mNavOpen = document.querySelector('.m_nav_open');
const gnb = document.querySelector('.gnb');
const gnbClone = gnb.cloneNode(true);
console.log(mNavOpen,gnb,gnbClone);
mNavOpen.appendChild(gnbClone);
//데스크탑 nav-lnb 숨기기
//모바일 m_nav_wrap 숨기기
const navLnb = document.querySelectorAll('nav .lnb');
const mNavWrap = document.querySelector('.m_nav_wrap');
console.log(navLnb, mNavWrap);
for(let i=0; i<5; i++){
    navLnb[i].style.display = 'none';
}
mNavWrap.style.display = 'none';

//nav 마우스 올렸을 때 lnb(navLnb),lnb_bg 보이기
const nav = document.querySelector('nav');
const lnbBg = document.querySelector('.lnb_bg');
console.log(nav, lnbBg);
//lnbBg.style.display = 'none';//마우스 이벤트 전 숨기기
lnbBg.style.overflow = 'hidden';
nav.addEventListener('mouseover',()=>{
    lnbBg.style.display = 'block';
    //navLnb.style.display = 'block';
    for(let i=0; i<navLnb.length; i++){
        navLnb[i].style.display = 'block';
    }
})
nav.addEventListener('mouseout',()=>{
    lnbBg.style.display = 'none';
    for(let i=0; i<navLnb.length; i++){
        navLnb[i].style.display = 'none';
    }
})
//모바일 메뉴 클릭 시 m_nav_wrap 보이기
const mNav = document.querySelector('.m_nav');
const mNavClose = document.querySelector('.m_nav_wrap .close');
console.log(mNav, mNavClose);
mNav.addEventListener('click',()=>{
    //mNavWrap.style.display = 'block';
    mNavWrap.style.height = '500px'
})
mNavClose.addEventListener('click',()=>{
    //mNavWrap.style.display = 'none';
    mNavWrap.style.height = '0'
})
//x 클릭 시 m_nav_wrap 숨기기