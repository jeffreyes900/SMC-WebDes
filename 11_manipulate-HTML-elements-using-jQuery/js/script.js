$(document).ready(function() {

    $.fn.fade = function(a) {
        $('' + a).fadeToggle('fast');
    };

    $('#c-button1').click(function() {
        $('.hideable-img1').fade('.hideable-img1');
    })
    $('#c-button2').click(function() {
        $('.hideable-img2').fade('.hideable-img2');
    })
    $('#d-button1').click(function() {
        $('.hideable-img3').fade('.hideable-img3');
    })
    $('#d-button2').click(function() {
        $('.hideable-img4').fade('.hideable-img4');
    })







})