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

export default function location() {
  for (let i = 0, length = maps.length; i < length; i++) {
    createMap(maps[i]);
  }

  gsap
    .timeline()
    .from('.address .address__details', {
      y: 150,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    })
    .from(
      '.address .map',
      {
        y: 150,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
      },
      0.25
    );
}
