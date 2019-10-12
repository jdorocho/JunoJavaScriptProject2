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

    $(".needsCellOne").click(function(){
        let needsTextVar = $(".needsCellOne").val();
        $("#littleSomething").removeClass("hidden");
        $(".needsText").text(needsTextVar);
    });
    $(".needsCellTwo").click(function(){
        let needsTextVar = $(".needsCellTwo").val();
        $("#littleSomething").removeClass("hidden");
        $(".needsText").text(needsTextVar);
    });
    $(".needsCellThree").click(function(){
        let needsTextVar = $(".needsCellThree").val();
        $("#littleSomething").removeClass("hidden");
        $(".needsText").text(needsTextVar);
    });
});