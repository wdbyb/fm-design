export default function nav() {
  const menuBtn = document.getElementById('menu-btn');
  const body = document.body;

  let mm = gsap.matchMedia();

  mm.add('(max-width: 767px)', (context) => {
    let navTl = gsap.timeline();

    navTl.from('.nav--header', {
      x: -350,
      autoAlpha: 0,
      duration: 1.5,
    });

    navTl.from(
      '.nav--header .nav__link',
      {
        opacity: 0,
        duration: 0.75,
        x: -150,
        stagger: 0.25,
      },
      '-=1'
    );

    navTl.reverse();

    context.add('openMenu', () => {
      menuBtn.classList.toggle('open');
      body.classList.toggle('overflow-hidden');

      navTl.reversed(!navTl.reversed());
    });

    menuBtn.addEventListener('click', context.openMenu);

    return () => menuBtn.removeEventListener('click', context.openMenu);
  });

  mm.add('(min-width: 768px)', () => {
    let navTl = gsap.timeline({
      defaults: {
        opacity: 0,
        duration: 1,
      },
    });

    navTl
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
  });
}
