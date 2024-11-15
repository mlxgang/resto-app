const closeBtn = document.getElementById('banner-button');
const banner = document.querySelector('.banner');

closeBtn.addEventListener('click', () => {
  banner.style.display = 'none';
})