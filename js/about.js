export default function about() {
  gsap
    .timeline({})
    .from('.caption__wrapper', {
      y: 150,
      opacity: 0,
      duration: 1.5,
    })
    .from(
      '.caption__bg-circle',
      {
        x: -300,
        opacity: 1,
        rotate: 360,
        duration: 2,
      },
      '<'
    )
    .from(
      '.caption--hero .caption__info',
      {
        y: 150,
        opacity: 0,
        duration: 2,
      },
      0.5
    )
    .from(
      '.caption--hero .caption__image',
      {
        x: 150,
        opacity: 0,
        duration: 1.5,
      },
      0.65
    )
    .from(
      '.caption--img-left .caption__info',
      {
        y: 150,
        opacity: 0,
        duration: 2,
      },
      0.65
    )
    .from(
      '.caption--img-left .caption__image',
      {
        x: -150,
        opacity: 0,
        duration: 1.5,
      },
      0.75
    );

  gsap.from('.offices .advantages__item', {
    opacity: 0,
    y: 250,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.caption--img-left',
      immediateRender: false,
      start: '60% center',
      end: 'bottom center',
      toggleActions: 'play none none reverse',
    },
  });
}
