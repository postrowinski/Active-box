$(document).ready(function () {

    //navigation scroll down
    $('nav a').click(function (event) {
        event.preventDefault();
        var getLink = $(this).attr('href'),
            goTop = $(getLink).offset().top;

        $('html, body').animate({
            scrollTop: goTop
        }, 700);
    });
    
    //scroll website top from bottom-right arrow
    $('.scroll-top').click(function (event) {
        event.preventDefault();
        var goTop = $('html').offset().top;

        $('html, body').animate({
            scrollTop: goTop
        }, 700);
    });

    //visibility bottom-right arrow
    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) $('.scroll-top').fadeIn();
        else $('.scroll-top').fadeOut();
    });
});
