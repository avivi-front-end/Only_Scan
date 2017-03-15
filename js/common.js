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
        infinite: true
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
});