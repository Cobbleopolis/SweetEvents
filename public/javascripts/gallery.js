var album = null;

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
        getAlbumsImages($(this)[0].innerHTML);
    });

});

function getAlbumsImages(album) {
    $.ajax({
        type: 'GET',
        url: '/post/gallery/getAlbum/' + album
    }).done(function (data) {
        album = data;
        console.log(data);
        //console.log(data);
        //var html = '';
        //for (var i in data) {
        //    var album = data[i];
        //    html += '<div class="album"><div class="aldumImageContainer"><img class="albumImage" src="images/gallery/' + album[0] + '/' + album[1] + '"></div><p>' + album[0] + '</p></div>'
        //}
        //$('#content').append(html);
    });
}