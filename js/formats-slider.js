const swiper = new Swiper('.swiper-container', {
    loop: true,  
    slidesPerView: 1,
    spaceBetween: 16,
     breakpoints: {   
        768: {
          slidesPerView: 2,
          },
        1280: {
         slidesPerView: 3,      
         }
  },
    pagination: {
        el: '.swiper-pagination',
        bulletClass: 'swiper-pagination__bullet',
        bulletActiveClass: 'swiper-pagination__bullet--active',
    },
    navigation: {
        nextEl: '.carusel-button.next',
        prevEl: '.carusel-button.prev',
    },    
});