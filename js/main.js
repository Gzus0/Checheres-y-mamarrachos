AOS.init({ duration: 1000, once: true });

window.addEventListener('scroll', () => {
  const hero = document.querySelector('.bg-hero');
  hero.style.backgroundPositionY = window.pageYOffset * 0.4 + 'px';
});
