


// Slider_reviews //
$(function() {

    $('.reviews__items').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
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
                breakpoint: 500,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0px',
                  centerMargin: '200px',
                  slidesToShow: 1
                }
              }
          ]
        
    });

});
// Slider_reviews //



// Slider_rates_step //
$(function(){
    if ($(window).width() < 1230){
        $(function() {

            $('.rates__items').slick({
                
                arrows: false,
                dots: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: false,
                speed: 1500,
                responsive: [
                    {
                      breakpoint: 970,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0px',
                        centerMargin: '100px',
                        slidesToShow: 1
                      }
                    }
                ]
                
            });
        
        });

        $(function() {

            $('.step__items').slick({
                
                arrows: false,
                dots: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: false,
                speed: 1500,

                responsive: [
                    {
                      breakpoint: 970,
                      settings: {
                        arrows: false,
                        centerMode: false,
                        centerPadding: '0px',
                        centerMargin: '100px',
                        slidesToShow: 1
                      }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                          arrows: false,
                          centerMode: false,
                          centerPadding: '0px',
                          centerMargin: '100px',
                          slidesToShow: 1
                        }
                      }  
                ]
                
                
            });
        
        });
        
    }
});
// Slider_rates_step //



const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('.menu-open');
const menuWindow = document.querySelector('#menu__window');

menuOpen.addEventListener('click', function(){
	menu.classList.toggle('menu-visible');
    menuOpen.classList.toggle('active');
    menuWindow.classList.toggle('animate__fadeInDown');
    body.classList.toggle('body-hidden');

});


document.addEventListener('keydown', function(e) {
    if( e.keyCode == 27 ){
    menu.classList.remove('menu-visible');
    menuOpen.classList.remove('active');
    menuWindow.classList.toggle('animate__fadeInDown');
    body.classList.remove('body-hidden');
    body.style.overflow = '';
    }
});


menu.addEventListener ('click' , function() {
    menu.classList.remove('menu-visible');
    menuOpen.classList.remove('active');
    menuWindow.classList.toggle('animate__fadeInDown');
    body.classList.remove('body-hidden');

    menuWindow.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});







let menuFixed = $ ("#menu-fixed");
let menuFixedH = menuFixed.innerHeight ();
let scrollPos = $(window).scrollTop();

menuFixed.addClass("menu-fixed-hidden");

$(window).on("scroll", function() {

    menuFixedH = menuFixed.innerHeight ();

    scrollPos = $(this).scrollTop();

    if( scrollPos >= menuFixedH) {
        menuFixed.removeClass("menu-fixed-hidden");
    }
        
    else {
        menuFixed.addClass("menu-fixed-hidden");
    }
    
});




// Open Modal 1 //
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
// Open Modal 1 //




// Open Modal 2 //
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
// Open Modal 2 //

















// Airplanes fly //
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
// Airplanes fly //


// Mask_tel //
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.input__tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});
// Mask_tel //



const eye = document.getElementById("eye");
const eye2 = document.getElementById("eye-2");
const eye3 = document.getElementById("eye-3");


function show() {
    let password = document.getElementById('pwd');
    password.setAttribute('type', 'text');
    eye.classList.add('no-after');

}

function hide() {
    let password = document.getElementById('pwd');
    password.setAttribute('type', 'password');
    eye.classList.remove('no-after');
}

let passwordShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (passwordShown == 0) {
        passwordShown = 1;
        show();
    } else {
        passwordShown = 0;
        hide();
    }
}, false);





function show2() {
    let password2 = document.getElementById('pwd-2');
    password2.setAttribute('type', 'text');
    eye.classList.add('no-after-2');

}

function hide2() {
    let password2 = document.getElementById('pwd-2');
    password2.setAttribute('type', 'password');
    eye.classList.remove('no-after-2');
}

let passwordShown2 = 0;

document.getElementById('eye-2').addEventListener("click", function () {
    if (passwordShown2 == 0) {
        passwordShown2 = 1;
        show2();
    } else {
        passwordShown2 = 0;
        hide2();
    }
}, false);



function show3() {
    let password = document.getElementById('pwd-3');
    password.setAttribute('type', 'text');
    eye.classList.add('no-after');

}

function hide3() {
    let password = document.getElementById('pwd-3');
    password.setAttribute('type', 'password');
    eye.classList.remove('no-after');
}

let passwordShown3 = 0;

document.getElementById('eye-3').addEventListener("click", function () {
    if (passwordShown2 == 0) {
        passwordShown2 = 1;
        show3();
    } else {
        passwordShown2 = 0;
        hide3();
    }
}, false);




