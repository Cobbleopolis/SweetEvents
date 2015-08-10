//$(window).load(function() {
//    $.ajax({
//        type: 'GET',
//        url: '/post/cakes/getAlbums'
//    }).done(function (data) {
//        console.log(data);
//        var html = '';
//        for (var i in data) {
//            var album = data[i];
//            html += '<div class="album"><div class="aldumImageContainer"><img class="albumImage" src="images/gallery/' + album[0] + '/' + album[1] + '"></div><p>' + album[0] + '</p></div>'
//        }
//        $('#content').append(html);
//    });
//});