const sideMenu = document.querySelector('#sideMenu');

const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
  sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
  sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () => {
  if (scrollY > 50) {
    navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')

    navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50')

  } else {
    navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')

    navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50')
  }
})

// scroll animation

document.addEventListener('DOMContentLoaded', () => {
  const scrollElements = document.querySelectorAll('[data-scroll]');

  const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
  };

  const displayScrollElement = (element) => {
    const delay = element.getAttribute('data-delay') || '0';
    setTimeout(() => {
      element.classList.add('opacity-100', 'animate-fadeInUp');
      element.classList.remove('opacity-0', 'translate-y-12');
    }, parseInt(delay));
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 150)) {
        displayScrollElement(el);
      }
    });
  };

  window.addEventListener('scroll', handleScrollAnimation);
});
