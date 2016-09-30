$(document).ready(function() {
    $('.iconcontainer').mouseenter(function() {
        $(this).effect('bounce', 'slow');
    });
    var $animated = $('.animated');
    var $window = $(window);

    $('.enlarged').hover(function() {
        $(this).addClass('visible');
        $(this).removeClass('visible')
    });

    $(".social").hover(function() {
        $(this).effect("pulsate", {
            times: 1
        }, "slow");
    });
    $('#firstdot').hover(function() {
        $('#firstjob').addClass('jobshow')
    });
    $('#seconddot').hover(function() {
        $('#secondjob').addClass('jobshow')
    });
    $('#thirddot').hover(function() {
        $('#thirdjob').addClass('jobshow')
    });

    $('#firsthobby').hover(function() {
        $('#firsthobbydesc').addClass("show");
        $(this).hide()
    });
    $('#secondhobby').hover(function() {
        $('#secondhobbydesc').addClass("show");
        $(this).hide()
    });
    $('#thirdhobby').hover(function() {
        $('#thirdhobbydesc').addClass("show");
        $(this).hide()
    });

    var sections = $('section, header'),
        nav = $('nav'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('span').removeClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"] span').addClass('active');
            }
        });
    });
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    return false;
                }
            }
        });
    });
});
