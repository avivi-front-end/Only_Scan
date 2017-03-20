'use strict';
if(!window.console) window.console = {};
if(!window.console.memory) window.console.memory = function() {};
if(!window.console.debug) window.console.debug = function() {};
if(!window.console.error) window.console.error = function() {};
if(!window.console.info) window.console.info = function() {};
if(!window.console.log) window.console.log = function() {};


$(function() {
    $('input[placeholder], textarea[placeholder]').placeholder();
    var quote_option = {
        dots: false,
        fade: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }
        ]
    };
    $('.js-quote-init').slick(quote_option);
    var fackt_slider_nav_option = {
        dots: false,
        fade: true,
        asNavFor: '.js-fackt-slider-date',
        infinite: true
    };
    $('.js-fackt-slider-nav').slick(fackt_slider_nav_option);

    var fackt_slider_date_option = {
        dots: false,
        fade: true,
        arrows: false,
        asNavFor: '.js-fackt-slider-nav',
        infinite: true
    };
    $('.js-fackt-slider-date').slick(fackt_slider_date_option);

    $('.js-client-hover').hover(function () {
        var src = $(this).data('color');
        $(this).attr('src',src)
    }, function () {
        var src = $(this).data('src');
        $(this).attr('src',src)
    })

    $('.js-to-top').click(function(){
        $('body, html').animate({
            scrollTop: 0
        });
    });

    $('.phone_mask').mask("+7 (000) 000-00-00", {placeholder: "+7 (000) 000-00-00"});

    $('.js-menu-show-mobile').click(function(){
        $(this).parents('.header-mobile').toggleClass('show_menu');
        if ($('.show_menu').length > 0) {
            $('.hiden-mobile-menu').show();
        } else {
            $('.hiden-mobile-menu').hide();
        }
    });

    $('form').each(function(){
        $(this).validate({
            rules: {
                name: {
                    required: true

                },
                phone: {
                    required: true
                },
            },
            messages: {
                name: {
                    required: 'Поле должно быть заполнено'
                },
                phone: {
                    required: 'Поле должно быть заполнено',
                    digits: 'Только цифры'
                },
            }
        });
    });

    $('.js-lid-calc').click(function(){
        var lidi     = parseInt($('#lidi').val()),
            lididoh  = parseInt($('#lididoh').val()),
            lidcheck = parseInt($('#lidcheck').val());
        var lidrez   = ((lidi/lididoh)*1000)-lidcheck;
        $('.js-lid-rez').text(lidrez);
    });

});

$(document).on('click.modal', 'a[rel="modal:close"]', function(event) {
    // event.preventDefault();
    var modalBlock = $(this).parents('.modal');
    $('.modalbgblock').remove();
    modalBlock.find('.close-modal').remove();
    modalBlock.hide();
});

$(document).on('click.modal', '.modalbgblock', function(event) {
    event.preventDefault();
    var idHref = $(this).data('modalblock'),
        modalBlock = $(idHref);
    $('.modalbgblock').remove();
    modalBlock.find('.close-modal').remove();
    modalBlock.hide();
});

$(document).on('click.modal', 'a[rel="modal:open"]', function(event) {
    event.preventDefault();
    if ($('.modalbgblock').length > 0 ) {
        var idHref = $('.modalbgblock').data('modalblock'),
            modalBlock = $(idHref);

        $('.modalbgblock').remove();
        modalBlock.find('.close-modal').remove();
        modalBlock.hide();
    }
    var bgModal = $('<span class="modalbgblock"></span>'),
        modalClose = $('<a href="#close-modal" rel="modal:close" class="close-modal"></a>'),
        idHref = $(this).attr('href'),
        formSend = $(this).data('formsend'),
        modalBlock = $(idHref);

    $('input[name="formsend"]').val(formSend);
    bgModal.data('modalblock',idHref);
    $('body').append(bgModal);
    modalBlock.append(modalClose);
    modalBlock.show();
});

$(document).on('submit','form', function (event) {
    event.preventDefault();
    if ($('.modalbgblock').length > 0 ) {
        var idHref = $('.modalbgblock').data('modalblock'),
            modalBlock = $(idHref);

        $('.modalbgblock').remove();
        modalBlock.find('.close-modal').remove();
        modalBlock.hide();
    }
    var bgModal = $('<span class="modalbgblock"></span>'),
        modalClose = $('<a href="#close-modal" rel="modal:close" class="close-modal"></a>'),
        idHref = '#message',
        modalBlock = $(idHref);

    bgModal.data('modalblock',idHref);
    $('body').append(bgModal);
    modalBlock.append(modalClose);
    modalBlock.show();
    return false;
});

var anchors = (function() {
    $('.js-scroll-anchor').on('click', function(e) {
        e.preventDefault();
        var changePosition = 0;
        if ($.attr(this, 'href') == '#made-in') {
            changePosition = 75;
        }
        if ($(window).width() < 768) {
            $('.show_menu').removeClass('show_menu');
            $('.hiden-mobile-menu').hide();
        }
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - changePosition
        }, 500);
    });
})();


//anchors function
var sectionNames = [];
var sectionPositions = [];

$(document).ready(function(){
    $('.show_svg').each(function() {
        var tempInfo = {};
        sectionNames.push($(this));
        sectionPositions.push($(this).offset().top);
    });

});


var anchorsSVG = (function() {
    //bind events
    $(window).on('scroll', function() {
        var windowHeight = $(window).height(),
            windowPosition = $(window).scrollTop()+(windowHeight/2);
        sectionPositions.forEach(function(value, key) {
            if (windowPosition > sectionNames[key].offset().top) {
                console.log('find');
                sectionNames[key].removeClass('show');
                sectionNames[key].addClass('show');
            }
        });
    });

})();
