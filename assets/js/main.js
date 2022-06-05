$(document).ready(function () {
    // Navbar
    $('#hamburger-menu').click(function () {
        $('.mobile-nav').toggleClass('active');
        $('.menu-icon').toggleClass('active');
    })
    // Hero Section
    $('.hero-box').mouseover(function () {
        $(this).addClass('active')
        $(this).removeClass('compressed')
        $(this).siblings().addClass('compressed')
        $('.description-container', this).addClass('active');
    })
    $('.hero-box').mouseleave(function () {
        $(this).removeClass('active')
        $(this).siblings().removeClass('compressed')
        $('.description-container', this).removeClass('active');
    })

    var input = document.querySelector('input[name=tags-outside]')
    var tagify = new Tagify(input, {
        dropdown: {
            position: "input",
            enabled: 0 // always opens dropdown when input gets focus
        }
    })
})