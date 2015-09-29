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
            var loadingDiv = $("#loadingDiv");
            var viewDiv = $("#galleryTable");
            loadingDiv.empty();
            viewDiv.empty();
            var html = "<tr>";
            var i = 0;
            albumImages.forEach(function (element) {
                if (i % 4 === 0 && i !== 0) html += "</tr><tr>";
                html += '<td><img class="galleryImage" src="//static.sweeteventsjc.com/images/gallery/' + currentAlbum + '/' + element + '"></td>';
                i++;
            });
            viewDiv.append(html);
            //$(".loadingImage").on("load", function() {
            //    var image = $($(this)[0]);
            //    //console.log("Image loaded. | " + image.outerHTML + " | " + image.attr("src"));
            //    var img = $("<img>");
            //    img.attr("src", image.attr("src"));
            //    viewDiv.append(img);
            //    thing = image;
            //    //console.log(thing);
            //});
        });

    });
    //$(function(a){
    //    var addToAll = false;
    //    var gallery = true;
    //    var titlePosition = 'inside';
    //    $(addToAll ? 'img' : 'img.fancybox').each(function(){
    //        var $this = $(this);
    //        var title = $this.attr('title');
    //        var src = $this.attr('data-big') || $this.attr('src');
    //        var a = $('<a href="#" class="fancybox"></a>').attr('href', src).attr('title', title);
    //        $this.wrap(a);
    //    });
    //    if (gallery)
    //        $('a.fancybox').attr('rel', 'fancyboxgallery');
    //    $('a.fancybox').fancybox({
    //        titlePosition: titlePosition
    //    });
    //});
    //$.noConflict();
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