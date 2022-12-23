export default function contact() {
  gsap
    .timeline()
    .from(
      '.hero-contact__bg',
      {
        x: -300,
        opacity: 1,
        rotate: 360,
        duration: 2,
      },
      '<'
    )
    .from(
      '.hero-contact__wrapper',
      {
        y: 150,
        opacity: 0,
        duration: 2,
      },
      0.5
    )
    .from(
      '.hero-contact .hero-contact__info',
      {
        y: 150,
        opacity: 0,
        duration: 1,
      },
      0.35
    )
    .from(
      '.hero-contact .form fieldset',
      {
        x: 150,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
      },
      0.5
    )
    .from(
      '.hero-contact .form .button',
      {
        x: 150,
        opacity: 0,
        duration: 1,
      },
      '-=1'
    )
    .from(
      '.offices .advantages__item',
      {
        opacity: 0,
        y: 250,
        duration: 1,
        stagger: 0.5,
      },
      0.5
    );
}
