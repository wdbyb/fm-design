import './styles/main.scss';
import location from './js/location';
import home from './js/home';
import about from './js/about';
import contact from './js/contact';
import design from './js/design';

const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  document.body.classList.toggle('overflow-hidden');
});

gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    defaults: {
      opacity: 0,
      duration: 1,
    },
  })
  .from('.header .nav__link', {
    x: 100,
    stagger: 0.5,
  })
  .from(
    '.header .logo',
    {
      x: -100,
    },
    '<'
  );

if (document.querySelector('.location')) {
  location();
}

if (document.querySelector('.home')) {
  home();
}

if (document.querySelector('.about')) {
  about();
}

if (document.querySelector('.contact')) {
  contact();
}

if (document.querySelector('.web-design')) {
  design();
}

// const containers = gsap.utils.toArray('.grid-cols-2');

// containers.forEach(function (container) {
//   gsap.fromTo(
//     container.querySelectorAll('.box'),
//     { y: -250 },
//     {
//       y: 0,
//       stagger: 0.3,
//       scrollTrigger: {
//         trigger: container,
//         scrub: true,
//         start: 'top bottom',
//         end: 'top 20%',
//         immediateRender: false,
//         markers: true,
//       },
//     }
//   );
// });
