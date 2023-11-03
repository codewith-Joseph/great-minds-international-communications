import './style.css';
import Swiper, { Autoplay } from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
  grabCursor: true,
  loop: true,
});



const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})





