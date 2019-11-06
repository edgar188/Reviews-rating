$('.owl-carousel').owlCarousel({
    loop: true,
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
        },
        992: {
            items: 3,
        },
        1200: {
            items: 4
        }
    }
})