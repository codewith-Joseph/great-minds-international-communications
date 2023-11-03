import './style.css';
import Swiper, { Autoplay } from 'swiper';
import 'swiper/css';

feather.replace();

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
  grabCursor: true,
  loop: true,
});
