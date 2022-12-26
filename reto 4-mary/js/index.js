'use strict';
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

import characters from "./modules/characters.js";

const documentReady = () => {
    characters();
};

document.addEventListener('DOMContentLoaded', documentReady);


