'use strict';

const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const header = document.getElementById('header');
const main = document.querySelector('main');
const footer = document.querySelector('.footer');

openMenu.addEventListener('click', addBlur);
closeMenu.addEventListener('click', removeBlur);

function addBlur() {
  header.classList.add('filter');
  main.classList.add('filter');
  footer.classList.add('filter');
  $('body').css('overflow', 'hidden');
}

function removeBlur() {
  header.classList.remove('filter');
  main.classList.remove('filter');
  footer.classList.remove('filter');
  $('body').css('overflow', 'initial');
}

// slider for main pictures

$('.slider').slick({
  dots: false,
  infinite: false,
  nextArrow: $('.slider__next-button'),
  prevArrow: $('.slider__prev-button'),
  speed: 500,
  draggable: false,
  swipe: false,
  fade: true,
  cssEase: 'linear',
});

const nextBtn = document.querySelector('.slider__next-button');
const prevBtn = document.querySelector('.slider__prev-button');
const currentSlideNum = document.querySelector('.slider__counter-num');

nextBtn.addEventListener('click', function() {
  if (+currentSlideNum.innerText < 3) {
    +currentSlideNum.innerText++;
  }
});

prevBtn.addEventListener('click', function() {
  if (+currentSlideNum.innerText > 1) {
    +currentSlideNum.innerText--;
  }
});

// slider for latest news (onMobile, onTablet)

const $slider = $('.news__slider');
const $progressBar = $('.news__slider-progressBar');

function setProgress(index) {
  const calc = ((index + 1) / ($slider
    .slick('getSlick').slideCount)) * 100;
  const bigPhoneCalc = ((index + 2) / ($slider
    .slick('getSlick').slideCount)) * 100;
  const tabCalc = ((index + 3) / ($slider
    .slick('getSlick').slideCount)) * 100;

  if (document.body.clientWidth > 768) {
    $progressBar
      .css('background-size', `${tabCalc}% 100%`)
      .attr('aria-valuenow', tabCalc);
  } else if (document.body.clientWidth > 535) {
    $progressBar
      .css('background-size', `${bigPhoneCalc}% 100%`)
      .attr('aria-valuenow', bigPhoneCalc);
  } else {
    $progressBar
      .css('background-size', `${calc}% 100%`)
      .attr('aria-valuenow', calc);
  }
}

$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  setProgress(nextSlide);
});

$slider.slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  nextArrow: false,
  prevArrow: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

setProgress(0);

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});

const sliderCard = document.querySelectorAll('.news__card-wrap');
const cardText = document.querySelectorAll('.news__card-text');
const cardTitle = document.querySelectorAll('.news__card-title');
const progressBar = document.querySelector('.news__slider-progressBar');

$(function() {
  $('.switch-btn').click(function(e, changeState) {
    if (changeState === undefined) {
      $(this).toggleClass('switch-on');
    }

    if ($(this).hasClass('switch-on')) {
      $(this).trigger('on.switch');
    } else {
      $(this).trigger('off.switch');
    }
  });

  $('.switch-btn').on('on.switch', function() {
    if (on.switch) {
      document.header.setAttribute('dark', '');
    } else {
      document.removeAttribute('dark');
    }
    console.log('Кнопка переключена в состояние on');
  });

  $('.switch-btn').on('off.switch', function() {
    console.log('Кнопка переключена в состояние off');
  });

  $('.switch-btn').each(function() {
    $(this).triggerHandler('click', false);
  });
});
