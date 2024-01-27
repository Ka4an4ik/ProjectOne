const header = document.querySelector('.header');
window.addEventListener('scroll', function() {
  if (window.scrollY >= 50) {
    header.classList.add('_scrolling');
  } else {
    header.classList.remove('_scrolling');
  }
});