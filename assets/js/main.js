setTimeout(function(){
    $('.preloader').delay(2800).fadeOut(); 
    // $('.preloader_img').delay(150).fadeOut('slow');     
},2800);
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

    // Read more 
    $(".show-more").click(function () {
        var txt = $(".more-text").is(':visible') ? 'Read More' : 'Read Less';
        $(".show-more").text(txt);
        $('.more-text').toggle();
    });

    $('.tab').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var tab_id = $(this).attr('href');
        $(tab_id).addClass('active').siblings().removeClass('active')
    });

    var hash = window.location.hash;
    if (hash == '#listen-page'){
        $('#listen-page').addClass('active').siblings().removeClass('active')
        $('.track-fs-toggle-listen').addClass('active').siblings().removeClass('active');
    }

    $(".step").click(function () {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })

    var images = $('#images').find('img');

    //hide images at the beginning
    images.not(images.first()).hide();

    $(".steps").on("click", 'li', function () {
        var $this = $(this),
            $this_val = $this.val();

        images.hide();
        $("#img" + $this_val).show();
    });

    // Copy Link
    var $temp = $("<input>");
    var $url = $(location).attr('href');

    $('#link-copy').click(function() {
        $("body").append($temp);
        $temp.val($url).select();
        document.execCommand("copy");
        $temp.remove();
        $('.copy-link-notification').html('<div class="notification-pill success rounded-pill" style="opacity: 1;"><i class="fa fa-link"></i> <span>Link Copied</span></div>');
        $('.notification-pill').delay(2000).fadeOut();
      })

    // Tagify
    var input = document.querySelector('input[name=tags-outside]')
    var tagify = new Tagify(input, {
        dropdown: {
            position: "input",
            enabled: 0 // always opens dropdown when input gets focus
        }
    })

    // Audio Player
    $('#listen-player').jsRapAudio({
        src: "../assets/Laughing in the Dark.mp3",
        loop: false,
    });

    var audio = $('#listen-player audio')[0];
    $('.play').click(function() {
        audio.play();
    })
})