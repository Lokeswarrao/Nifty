

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    lazyLoad: true,
    loop:true,
    nav:true,
    navText : [
        'prevIcon',
        'nextIcon'
    ],
    margin:10,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true
});
