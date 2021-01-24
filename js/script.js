$(document).ready(function() { 
    // делэй для свайпера в ms 
    let swiperDelay = 6000;
    
    
    
    if (screen.width > 768) {
        $("nav").on("click","a", function (e) {
            // исключаем стандартную реакцию браузера
            e.preventDefault();
            // получем идентификатор блока из атрибута href
            var id  = $(this).attr('href'),
            
            // находим высоту, на которой расположен блок
                top = $(id).offset().top - 50;
            
            
            // анимируем переход к блоку, время: 800 мс
            $('body,html').animate({scrollTop: top}, 800);
        });
        jQuery(window).scroll(function(){
            var $sections = $('.section');
        $sections.each(function(i,el){
            var top  = $(el).offset().top - 200;
            var bottom = top +$(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if( scroll > top && scroll < bottom){
                $('a.js-active').removeClass('js-active');
                $('a[href="#'+id+'"]').addClass('js-active');
            }
        })
        });
    } else {
        $("nav").on("click","a", function (event) {
            // исключаем стандартную реакцию браузера
            event.preventDefault();
            // получем идентификатор блока из атрибута href
            var id  = $(this).attr('href'),
            // находим высоту, на которой расположен блок
                top = $(id).offset().top ;
            // анимируем переход к блоку, время: 800 мс
            $('body,html').animate({scrollTop: top}, 800);
            });
        jQuery(window).scroll(function(){
            var $sections = $('.section');
            $sections.each(function(i,el){
            var top  = $(el).offset().top - 30;
            var bottom = top +$(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if( scroll > top && scroll < bottom){
                $('a.js-active').removeClass('js-active');
                $('a[href="#'+id+'"]').addClass('js-active');
            }
        })
        });
    }
    $("a.linkTo").on("click", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
        // получем идентификатор блока из атрибута href
        var id  = $(this).attr('href'),
        // находим высоту, на которой расположен блок
            top = $(id).offset().top ;
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 800);
    });
    if (screen.width > 768) {
        $('.parallax__item').addClass('layer');
        $('.intro').parallax();
        $('.parallax').parallax();
        $('.intro__right').parallax();
        
    }
    $('header').addClass('_active');
    $('.js-burger-trigger-nav').on('click', () => {
        $('.js-burger-menu').removeClass('js-active');
        $('.js-burger-trigger').removeClass('js-active');
        $('.header').toggleClass('burger-active');
    });
    $('.js-burger-trigger').on('click', function() {
        $(this).toggleClass('js-active');
        $('.js-burger-menu').toggleClass('js-active');
        $('.header').toggleClass('burger-active');
    });
    $(document).on('click', (e) => {
        if (!e.target.classList.contains('burger_menu') 
            && !e.target.classList.contains('nav__link')
            && !e.target.classList.contains('nav')
            && !e.target.classList.contains('burger__trigger')
            && !e.target.classList.contains('burger__trigger_span')) 
        {
            $('.js-burger-menu').removeClass('js-active');
            $('.js-burger-trigger').removeClass('js-active');
        }
    });
    $(window).scroll(function(){
        $('.header').toggleClass('js-active', $(this).scrollTop() > 0);
    });

    $(function($){
        $(".phone").mask("+7 (999) 999-9999");
     });

    // product slider
    const mySwiper = new Swiper('.mainProductsSlider', {
        // Optional parameters
        loop: true,
        // If we need pagination
        speed: 1000,
        mousewheel: false,

        autoplay: {
            delay: swiperDelay,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            320: {
                allowTouchMove: true,
            }, 
            1100: {
                allowTouchMove: false,
            }
        }
    });
    const catalogSlider = new Swiper('.catalog__slider', {
        // Optional parameters
        // slidesPerView: 4, 
        // spaceBetween: 50,
        loop: false,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            // when window width is >= 640px
            780: {
              slidesPerView: 4,
              spaceBetween: 50
            }
          }
    });
});
if (screen.width > 768) {
    
    document.addEventListener('DOMContentLoaded', () => {
      
        let animItems = document.querySelectorAll('._anim-items');
        if (animItems.length > 0) {
            window.addEventListener('scroll', animOnScroll);
            function animOnScroll(params) {
                for ( let i = 0; i < animItems.length; i++) {
                    const animItem = animItems[i];
                    const animItemHeight = animItem.offsetHeight;
                    const animItemOffset = offset(animItem).top;
                    const animStart = 4;
        
                    let animItemPoint = window.innerHeight - animItemHeight / animStart;
        
                    if (animItemHeight > window.innerHeight) {
                        animItemPoint = window.innerHeight - window.innerHeight / animStart;
                    }
        
                    if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                        animItem.classList.add('_active');
                    } else {
                        if (!animItem.classList.contains('_anim-no-hide')) {
                            animItem.classList.remove('_active');
                        }
        
                    }
                }
                
            }
            function offset(el) {
                const rect = el.getBoundingClientRect(),
                      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return { top: rect.top + scrollTop, left: rect.left + scrollLeft};
            }
            setTimeout(() => {
                animOnScroll();
            }, 500);
        }
    });
} else {
    $('._anim-items').addClass('_active');
}