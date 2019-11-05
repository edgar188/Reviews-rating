$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            dots: true,
        },
        768: {
            items: 2,
            dots: true,
        },
        992: {
            items: 3,
            dots: true,
            loop: false
        },
        1200: {
            items: 4
        }
    }
})