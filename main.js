new Swiper('.slidesection .swiper', {
    slidesPerView:1, //한번에 보여줄 슬라이드 개수
    centeredSlides: true,
    loop: true, // 반복 재생 여부
    autoplay: {
        delay: 3000
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
        prevEl: '.slidesection .swiper-prev', // 이전 버튼 선택자
        nextEl: '.slidesection .swiper-next' // 다음 버튼 선택자
      }
});

function showSidebar() {
    const mobileMenu = document.getElementById('mobileMenu');
    const sideBar = document.getElementById('sideBar');
    const sideBarBackground = document.getElementById('sideBarBackground');
    sideBar.classList.toggle('showsidebar',);
    sideBarBackground.classList.toggle('showSideBarBackground',);
  }
  
  function removeSidebar() {
    const sideBar = document.getElementById('sideBar');
    const sideBarBackground = document.getElementById('sideBarBackground');
    const closeBtn = document.getElementById('closeBtn');
    sideBar.classList.remove('showsidebar');
    sideBarBackground.classList.remove('showSideBarBackground');
  }