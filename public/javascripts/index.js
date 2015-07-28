$('#slideshow').children().hide();

function make() {
}

$(window).load(function () {
    $.ajax({
        type: 'GET',
        url: '/post/index/getSlideshow'
    }).done(function (data) {
        console.log(data);
        var html = '';
        var slideshow = $("#slideshow");
        for (var i in data) {
            html += '<div class="slideshow_div" align="center"><img class="slideshow_img" src="images/slideshow/' + data[i] + '"></div>';
        }
        slideshow.html(html);
        $('.slideshow_img').attr('height', slideshow.height() - 10);
        activateSlideshow();
    });
});

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
