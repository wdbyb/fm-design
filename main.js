import './styles/main.scss';

const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  document.body.classList.toggle('overflow-hidden');
});

const mapCanada = L.map('map-canada', {
  center: [43.64414050035226, -79.39457158840445],
  zoom: 16,
});

L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
  maxZoom: 30,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
}).addTo(mapCanada);

const mapAustralia = L.map('map-australia', {
  center: [-30.32388305775135, 149.7855395538651],
  zoom: 16,
});

L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
  maxZoom: 30,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
}).addTo(mapAustralia);

const mapUK = L.map('map-uk', {
  center: [51.73270879965942, -3.8619428402317872],
  zoom: 16,
});

L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
  maxZoom: 30,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
}).addTo(mapUK);
