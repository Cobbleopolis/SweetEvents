var currentAlbum = null;
var albumImages = null;

$(window).load(function() {
    //$.ajax({
    //    type: 'GET',
    //    url: '/post/gallery/getAlbums'
    //}).done(function (data) {
    //    albums = data;
    //    console.log(data);
    //    //console.log(data);
    //    //var html = '';
    //    //for (var i in data) {
    //    //    var album = data[i];
    //    //    html += '<div class="album"><div class="aldumImageContainer"><img class="albumImage" src="images/gallery/' + album[0] + '/' + album[1] + '"></div><p>' + album[0] + '</p></div>'
    //    //}
    //    //$('#content').append(html);
    //});
    $(".secondNavListItem").on("click", function() {  //use a class, since your ID gets mangled
        getAlbumsImages($(this)[0].innerHTML, function(){
            var loadingDiv = $("#viewDiv");
            loadingDiv.empty();
            var html = "";
            albumImages.forEach(function (element) { html += '<img class="loadingImage" src="//static.sweeteventsjc.com/images/gallery/' + currentAlbum + '/' + element + '">'});
            loadingDiv.append(html);
        });

    });
    $(".loadingImage").load(function() {  //use a class, since your ID gets mangled
        console.log($(this));
        //$("#viewDiv").append($(this))
    });

});

function getAlbumsImages(album, callback) {
    $.ajax({
        type: 'GET',
        url: '/post/gallery/getAlbum/' + album
    }).done(function (data) {
        currentAlbum = album;
        albumImages = data;
        callback();
        console.log("Got album Images");
        //var html = '';
        //for (var i in data) {
        //    var album = data[i];
        //    html += '<div class="album"><div class="aldumImageContainer"><img class="albumImage" src="images/gallery/' + album[0] + '/' + album[1] + '"></div><p>' + album[0] + '</p></div>'
        //}
        //$('#content').append(html);
    });
}