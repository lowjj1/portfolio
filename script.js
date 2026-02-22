// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Navbar background on scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(10,10,11,0.9)';
  } else {
    header.style.background = 'rgba(10,10,11,0.6)';
  }
});
