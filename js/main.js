$(function(){
    $('.slider__box').slick({
        prevArrow: '<img src="images/Arrow1.svg" alt="#" class="slider__arrow slider__arrow-left">',
        nextArrow: '<img src="images/Arrow2.svg" alt="#" class="slider__arrow slider__arrow-right">'
    });

    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('active')
    });

});