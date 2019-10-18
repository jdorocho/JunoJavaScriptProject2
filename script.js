// ~~~~~~ API STUFF ~~~~~~
const giphyApp = {};
giphyApp.key = 'TlEjQkDYTmJraEz6SaAXALkd9F3SwFis';

giphyApp.displayGifs = function(gifs) {
    gifs.forEach(function(gif) {
        const gifHtml = `
                    <img src="${gif.images.original.url}" alt="randomized GIF">
        `
        $('.results').append(gifHtml);
    });
}

giphyApp.getGifs = topic => {
    $.ajax({
        url: `http://api.giphy.com/v1/gifs/search`,
        method: `GET`,
        dataType: `json`,
        data: {
            api_key: giphyApp.key,
            q: topic,
            format: `json`
        }
    }).then(function(result) {
        $('.results').empty();
        giphyApp.displayGifs(result.data);
    });
}
// ~~~~~~ API STUFF ~~~~~

$(document).ready(function(){
// This is for the nav bar to change properties after scrolling past a certain point on the page
    $(function () {
        $(document).scroll(function () {
            const $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > 750);
        });
    });

// This is for smooth scroll of the nav bar
    $('a').smoothScroll();

// This is for the Flickity carousels
    $('.feelingsCarousel, .needsCarousel').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        pageDots: false,
    });

// These are for the actions that take place when you click the Needs carousel 
    $(".needsCellOne").click(function(){
        let needsTextVar = $(".needsCellOne").val();
        $("#littleSomething").fadeIn(600);
        $(".needsText").text(needsTextVar);
        $(".needsCarousel").addClass("paused");
        giphyApp.getGifs('inspiration');
    });
    $(".needsCellTwo").click(function(){
        let needsTextVar = $(".needsCellTwo").val();
        $("#littleSomething").fadeIn();
        $(".needsText").text(needsTextVar);
        $(".needsCarousel").addClass("paused");
        giphyApp.getGifs('encouragement');
    });
    $(".needsCellThree").click(function(){
        let needsTextVar = $(".needsCellThree").val();
        $("#littleSomething").fadeIn();
        $(".needsText").text(needsTextVar);
        $(".needsCarousel").addClass("paused");
        giphyApp.getGifs('laughter');
    });
});