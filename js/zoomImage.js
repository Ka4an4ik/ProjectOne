const zoomableImage = document.getElementById('zoomable-image');
let currentScaleFactor = 1.3

zoomableImage.addEventListener('mousemove', (e) => {
  const { left, top, width, height } = zoomableImage.getBoundingClientRect();
  const x = (e.clientX - left) / width;
  const y = (e.clientY - top) / height;
  zoomableImage.style.transformOrigin = `${x * 100}% ${y * 100}%`;
});

document.addEventListener('wheel', (e) => {
  const delta = Math.sign(e.deltaY); // Положительное значение при прокрутке вперед, отрицательное - назад
  if (delta === 1) {
    if (currentScaleFactor - 0.2 >= 1) {
      currentScaleFactor -= 0.2; // Уменьшение масштаба при прокрутке вперед
    }
  } else {
    if (currentScaleFactor < 4) {
      currentScaleFactor += 0.2;
    } // Увеличение масштаба при прокрутке назад
  }

  zoomableImage.style.transform = `scale(${currentScaleFactor})`; // Добавлены скобки
});

zoomableImage.addEventListener('mouseout', () => {
  zoomableImage.style.transform = 'scale(1)';
});

zoomableImage.addEventListener('mouseenter', () => {
  currentScaleFactor = 1.3
  zoomableImage.style.transform = `scale(${currentScaleFactor})`;
});
