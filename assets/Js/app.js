
$(function() {

    $('.reviews__items').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,

        responsive: [
            {
              breakpoint: 1440,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
        
    });

});


const open_modal1 = document.querySelector('#open_modal1');
const modal1 = document.querySelector('#modal_1');
const close_modal1 = document.querySelector('#close_modal1');
const body = document.querySelector("body");

const modal1_window = document.querySelector( '#modal1_window');


open_modal1.addEventListener ('click' , function() {
    modal1.classList.remove('hidden');
    body.style.overflow = 'hidden';


    modal1_window.addEventListener('click', function(e) {
        e.stopPropagation();
    });

});

close_modal1.addEventListener ('click' , function() {
    modal1.classList.add('hidden');
    body.style.overflow = '';
});


modal1.addEventListener ('click' , function() {
    modal1.classList.add('hidden');
    body.style.overflow = '';
});

document.addEventListener('keydown', function(e) {
    if( e.keyCode == 27 ){
    modal1.classList.add('hidden');
    body.style.overflow = '';
    }
});



const open_modal2 = document.querySelector('#open_modal2');
const modal2 = document.querySelector('#modal_2');
const close_modal2 = document.querySelector('#close_modal2');

const modal2_window = document.querySelector( '#modal2_window');


open_modal2.addEventListener ('click' , function() {
    modal2.classList.remove('hidden');
    body.style.overflow = 'hidden';


    modal2_window.addEventListener('click', function(e) {
        e.stopPropagation();
    });

});

close_modal2.addEventListener ('click' , function() {
    modal2.classList.add('hidden');
    body.style.overflow = '';
});


modal2.addEventListener ('click' , function() {
    modal2.classList.add('hidden');
    body.style.overflow = '';
});


document.addEventListener('keydown', function(e) {
    if( e.keyCode == 27 ){
    modal2.classList.add('hidden');
    body.style.overflow = '';
    }
});



const airplane1 = document.querySelector('#airplane-1');
const airplane2 = document.querySelector('#airplane-2');
const airplane3 = document.querySelector('#airplane-3');


airplane1.classList.remove('move1');
airplane2.classList.remove('move2');
airplane3.classList.remove('move3');

if (window.performance) {
    setTimeout(function(){
        airplane1.classList.add('move1');
        setTimeout(function(){
            airplane2.classList.add('move2');
            setTimeout(function(){
                airplane3.classList.add('move3');
            },1000);
        },500);
    },200);
};



