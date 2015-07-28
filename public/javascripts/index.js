$('#slideshow').children().hide();

$(document).ready(function () {
    $('.slideshow_img').attr('height', $('#slideshow').height() - 10);
    activateSlideshow();
});

function make() {
    //$('.slideshow_img').attr('height', $('#slideshow').height() - 10);
    //activateSlideshow();


    //$.ajax({
    //    type: 'POST',
    //    url: 'http://localhost:1111/user/create',
    //    data: {data},
    //    dataType: 'application/json',
    //    success: function(data) {
    //        console.log('success');
    //        console.log(data);
    //        activateSlideshow();
    //    }
    //});

}

var animTime = 500;
var slideDuration = 4000;

function activateSlideshow() {
    $(function () {
        var slideshow = $("#slideshow");
        slideshow.find("> div:gt(0)").hide();
        setInterval(function () {
            slideshow.find('> div:first').fadeOut(animTime);
            slideshow.find('> div:first').next().delay(animTime).fadeIn(animTime);
            slideshow.find('> div:first').appendTo("#slideshow");
        }, slideDuration);
    });

}
