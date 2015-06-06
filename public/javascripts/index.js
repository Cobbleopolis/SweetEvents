function make() {
    $('.slideshow_img').attr( 'height', $('#slideshow').height() - 10);
    activateSlideshow();
}

var animTime = 500;
var slideDurration = 4000;

function activateSlideshow() {
    $(function() {
        var slideshow = $("#slideshow");
        slideshow.find("> div:gt(0)").hide();
        setInterval(function() {
            slideshow.find('> div:first').fadeOut(animTime);
            slideshow.find('> div:first').next().delay(animTime).fadeIn(animTime);
            slideshow.find('> div:first').appendTo("#slideshow");
        }, slideDurration);
    });

}
