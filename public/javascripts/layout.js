var fixed = false;
$(document).ready(function () {
    console.log("Test");
    $(window).scroll(function (e) {
        if ($(window).scrollTop() > $("#title").height()) {
            $('#secondNav').addClass("fixed");
            //if (!fixed)
            //    $('#flavorNav ul').append("<a href='#Top'><li>Back To Top</li></a>")
            fixed = true;
        } else {
            //console.log("unfixed");
            $('#secondNav').removeClass("fixed");
            //if (fixed) {
            //    $('#flavorNav ul:last-child').remove();
            //}
            fixed = false;
        }
    });

});