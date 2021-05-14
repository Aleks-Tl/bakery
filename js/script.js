// JS-функция определения поддержки WebP
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

let burger = document.querySelector('.header__burger'),
    menu = document.querySelector('.header__nav'),
    link = document.querySelectorAll('.header__link'),
    lock = document.querySelector('body');       

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    lock.classList.toggle('lock');
});

link.forEach(item => {
    item.addEventListener('click', () => {
        burger.classList.remove('active');
        menu.classList.remove('active');
        lock.classList.remove('lock');
    });
});

new WOW().init(); 

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
          $('.page__up').fadeIn();
        } else {
          $('.page__up').fadeOut();
        }
      });
      
      $("a[href^='#']").click(function() {
        let _href = $(this).attr("href");
        $("html, body").animate({scrollTop:$(_href).offset().top+"px"});
        return false;
      });
});

