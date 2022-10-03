$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoWidth: true,
        items: 4,
        dots: true,
        margin: 10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4,
                dots: true
            }
        }
    })
})