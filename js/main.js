$(function(){
    $('.slider__box').slick({
        prevArrow: '<img src="images/arrow1.svg" alt="#" class="slider__arrow slider__arrow-left">',
        nextArrow: '<img src="images/arrow2.svg" alt="#" class="slider__arrow slider__arrow-right">'
    });

    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('active')
    });
});