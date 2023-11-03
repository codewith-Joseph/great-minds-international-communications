import './style.css';
import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  loop: true,
});
