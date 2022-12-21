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
