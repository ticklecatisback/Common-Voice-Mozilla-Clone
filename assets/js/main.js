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

    var oghtml = $('.instruction').html();

    const recordButton = document.getElementById("recording-btn");

    var audio_clip = $(".active > #recorded-clip");

    // const recording = $("#recorded-clip");

    $('#recording-btn').click(function() {
        $('.progress').addClass('recording-animation')
        $('#recording-icon').toggleClass('fa-square').toggleClass('fa-microphone')
        if ($('#recording-icon').hasClass('fa-square')) {
            $('.instruction').html('Click <i class="fa fa-square"></i> when done');
        } else {
            $('.instruction').html(oghtml);
        }
        navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
            audio_stream = stream;
            recorder = new MediaRecorder(stream);
            // when there is data, compile into object for recording src
            recorder.ondataavailable = function (e) {
                const url = URL.createObjectURL(e.data);
                audio_clip.attr('src',url);
            };
            recorder.start();
            // stop recording
            $(this).click(function() { 
                // $(this,'.card').next().addClass('active').siblings().removeClass('active')
                // $('.card.active').css({'transform': 'scale(1) translateX(0%)','opacity': 1})
                stopRecording();
                console.log("Recording stopped...!");
            });
        });
        // if (audio_clip.attr('src') != 'unknown') {
        //     $('.cards.owl-carousel').trigger('next.owl.carousel');
        // }
    })

    function stopRecording() {
        recorder.stop();
        audio_stream.getAudioTracks()[0].stop();
        $('.active .card').removeClass('inactive')
        if ($('.owl-item.active')) {
            $('.active .card').addClass('active').siblings().removeClass('active')
        }
        $('.cards.owl-carousel').trigger('next.owl.carousel');
    }

    // Owl Carousel
    $(".cards.owl-carousel").owlCarousel({
        items: 1,
        dots: false,
        autoplay: false,
        rtl: true,
        margin:120,
        touchDrag:false,
        mouseDrag:false
    })

})
