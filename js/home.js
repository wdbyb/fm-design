export default function home() {
  gsap
    .timeline({
      defaults: {
        opacity: 0,
      },
    })
    .from('.hero__wrapper', {
      y: 150,
      opacity: 0,
      duration: 1.5,
    })
    .from(
      '.hero__bg-circle',
      {
        x: -300,
        opacity: 1,
        rotate: 360,
        duration: 2,
      },
      '<'
    )
    .from(
      '.hero__info',
      {
        y: 100,
        duration: 2,
      },
      0.35
    )
    .from(
      '.hero__image',
      {
        y: 150,
        duration: 1.5,
      },
      0.5
    );

  const designs = gsap.from('.our-designs .our-designs__item', {
    opacity: 0,
    y: 250,
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
  });

  designs.play();

  gsap.from('.advantages__item', {
    opacity: 0,
    y: 250,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.our-designs',
      immediateRender: false,
      start: '60% center',
      end: 'bottom center',
      // markers: true,
      toggleActions: 'play none none reverse',
    },
  });
}
