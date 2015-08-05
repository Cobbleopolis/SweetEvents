var fixed = false;
$(document).ready(function () {
    $(window).scroll(function (e) {
        if ($(window).scrollTop() > $("#title").height()) {
            $('#flavorNav').addClass("fixed");
            //if (!fixed)
            //    $('#flavorNav ul').append("<a href='#Top'><li>Back To Top</li></a>")
            fixed = true;
        } else {
            //console.log("unfixed");
            $('#flavorNav').removeClass("fixed");
            //if (fixed) {
            //    $('#flavorNav ul:last-child').remove();
            //}
            fixed = false;
        }
    });

}); 