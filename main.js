import './styles/main.scss';
import location from './js/location';
import home from './js/home';
import about from './js/about';
import contact from './js/contact';
import design from './js/design';
import nav from './js/nav';

gsap.registerPlugin(ScrollTrigger);

nav();

switch (document.querySelector('main').id) {
  case 'location':
    location();
    break;
  case 'home':
    home();
    break;
  case 'about':
    about();
    break;
  case 'contact':
    contact();
    break;
  case 'design':
    design();
    break;
}
