if (document.querySelector('.hero-slider'))  {
  // Инициализируем Swiper
  new Swiper('.hero-slider', {
      // Стрелки
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
      },
      // Курсор перетаскивания
      grabCursor: true,
      // Управление клавиатурой
      // Скорость
      speed: 700,
      loop: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
  });  
}