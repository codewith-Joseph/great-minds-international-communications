import './style.css';
import Swiper, { Autoplay } from 'swiper';
import 'swiper/css';

feather.replace();

const menuToggleBtn = document.querySelector('.mobile-nav-menu');
const menuIcon = document.querySelector('.feather-menu');
const closeIcon = document.querySelector('.feather-close');
const navigationMenu = document.querySelector('.navigation');

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
  grabCursor: true,
  loop: true,
});

menuToggleBtn.addEventListener('click', () => {
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
  navigationMenu.classList.toggle('hidden');
});

/*count section*/
const counts = document.querySelectorAll('.count')
const speed = 50

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count)
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
            counter.innerText += "+"
        }
    }
    upDate()
})
