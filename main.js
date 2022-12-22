import './styles/main.scss';

const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  document.body.classList.toggle('overflow-hidden');
});

function createMap({ id, coords }) {
  const map = L.map(id, {
    center: coords,
    zoom: 16,
  });

  L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 30,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  }).addTo(map);
}

const maps = [
  {
    id: 'map-canada',
    coords: [43.64414050035226, -79.39457158840445],
  },
  {
    id: 'map-australia',
    coords: [-30.32388305775135, 149.7855395538651],
  },
  {
    id: 'map-uk',
    coords: [51.73270879965942, -3.8619428402317872],
  },
];

if (document.querySelector('.location')) {
  for (let i = 0; i < maps.length; i++) {
    createMap(maps[i]);
  }
}

gsap.registerPlugin(ScrollTrigger);

const heroInfo = document.querySelector('.hero__info');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.nav__link');
const logo = document.querySelector('.logo');

// gsap.to('.nav__link', {
//   x: -50,
//   duration: 1,
//   stagger: 0.5,
// });

// gsap.from(logo, {
//   x: -100,
//   opacity: 0,
//   duration: 1,
// });

const tl = gsap
  .timeline()
  .from(links, {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  })
  .from(
    logo,
    {
      x: -100,
      opacity: 0,
      duration: 1,
    },
    '<'
  )
  .from(
    heroInfo,
    {
      y: 100,
      opacity: 0,
      duration: 2,
    },
    '-=3'
  )
  .from(
    '.hero__image',
    {
      x: 150,
      opacity: 0,
      duration: 1.5,
    },
    '-=3'
  );

const moo = gsap.fromTo(
  '.our-designs .our-designs__item',
  {
    opacity: 0,
    y: 250,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.hero',
      immediateRender: false,
      start: 'bottom 60%',
      end: 'bottom center',
      // markers: true,
      toggleActions: 'play none none reverse',
    },
  }
);

moo.play();

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
