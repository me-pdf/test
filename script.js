document.querySelectorAll('.page').forEach(page => {
  page.addEventListener('click', () => {
    page.style.transform = page.style.transform === 'rotateY(180deg)' ? '' : 'rotateY(180deg)';
  });
});