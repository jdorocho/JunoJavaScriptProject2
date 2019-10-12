$(document).ready(function(){
    $('.feelingsCarousel, .needsCarousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        pageDots: false,
    });

    $(function () {
        $(document).scroll(function () {
            const $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > 750);
        });
    });

    $('a').smoothScroll();

    $(".needsCell").click(function(){
        let needsTextVar = $(".needsCell").val();
        $(".needsText").text(needsTextVar);
    });
});