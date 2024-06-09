window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Adjust this value as needed
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});
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
$('.trusted-client').owlCarousel({
    loop:true, 
    margin:20,
    dots:false,
    nav:false,
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
        },
        1200:{
            items:5,  
        }
    }
})
$('.trusted-client1').owlCarousel({
    loop:true, 
    margin:20,
    rtl:true,
    dots:false,
    nav:false,
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
        },
        1200:{
            items:5,  
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




$(document).ready(function() {
    let counterSection = $('#counter-section');
    let counters = $('.counter');
    let counted = false;

    $(window).on('scroll', function() {
        let scrollPosition = $(window).scrollTop() + $(window).height();
        let sectionOffset = counterSection.offset().top;

        if (!counted && scrollPosition >= sectionOffset) {
            counted = true;
            counters.each(function() {
                let counter = $(this);
                let target = +counter.attr('data-target');
                let countTo = target;
                $({ countNum: counter.text() }).animate({
                    countNum: countTo
                },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        counter.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        counter.text(this.countNum + '+');
                    }
                });
            });
        }
    });
});