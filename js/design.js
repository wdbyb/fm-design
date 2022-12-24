export default function design() {
  gsap
    .timeline()
    .from('.web-design .intro', {
      y: 150,
      opacity: 0,
      duration: 1,
    })
    .from(
      '.grid-cols-3 .card',
      {
        y: 150,
        duration: 1,
        opacity: 0,
        stagger: 0.5,
      },
      0.5
    );

  gsap.from('.our-designs .our-designs__item', {
    y: 150,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.grid-cols-3',
      immediateRender: false,
      start: '70% 50%',
      end: 'bottom center',
      toggleActions: 'play none none reverse',
    },
  });
}
