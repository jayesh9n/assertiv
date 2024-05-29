$('.client-carousel').owlCarousel({
    loop:true,
    margin:10,
    items:4,  
    margin:20,
    dot:false,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1, 
        },
        768:{
            items:2, 
        },
        991:{
            items:4,  
        }
    }
})
$(document).ready(function() {
    let isAnimating = false;

    $('.menubar-icon').on('click', function () {
        $(this).toggleClass('active');
        $(this).find('.menubar').toggleClass('active'); 
        $('.mobile-menu').slideToggle().toggleClass('active');
        $('body').toggleClass('open-menu');
    });

    $('.mobile-menu > li').click(function() {
        if (isAnimating) return;  // Prevent additional clicks during animation

        const submenu = $(this).find('.submenu-wrap');

        if (submenu.hasClass('active')) {
            isAnimating = true;
            submenu.removeClass('active').slideUp(400, function() {
                isAnimating = false;  // Reset flag after animation completes
            });
        } else {
            isAnimating = true;
            $('.submenu-wrap.active').removeClass('active').slideUp(400);
            submenu.addClass('active').slideDown(400, function() {
                isAnimating = false;  // Reset flag after animation completes
            });
        }
    });
});



