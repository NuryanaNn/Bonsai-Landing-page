var swiper = new Swiper(".mySwiper", {
    loop:true,
    centeredSlides: true,
    autoplay:{
        delay :2500,
        disabledonInteraction :false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  var swiper = new Swiper(".product-swipper", {
    loop:true,
    centeredSlides: true,
    autoplay:{
        delay :2500,
        disabledonInteraction :false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
  });