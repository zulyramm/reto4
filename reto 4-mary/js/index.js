//'use strict';
import characters from "./modules/characters.js";

document.addEventListener('DOMContentLoaded',documentReady);

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

new Swiper('.swiper', {
  autoplay: {
    delay: 5000
  },
  loop: true,
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
const documentReady = () =>{
    characters();
};
