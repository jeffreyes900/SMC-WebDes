$(document).ready(function() {

    // jQuery methods go here...

    $('.main-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        wrapAround: true,
        watchCSS: true,
        prevNextButtons: false,
        pageDots: false
    });



    var blogButton1 = document.getElementById("b1");
    var blogButton2 = document.getElementById("b2");
    var blogButton3 = document.getElementById("b3");

    var toggleArticleVisibility = function(button) {
        console.log(blogButton.innerText);

    }

    blogButton1.addEventListener("click", toggleArticleVisibility('b1'));
    blogButton2.addEventListener("click", toggleArticleVisibility('b2'));
    blogButton3.addEventListener("click", toggleArticleVisibility('b3'));

    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            videoId: '2H7faKIcdHs',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }



});