var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();


app.use('/test', function (req, res) {
    res.send("No test here.");
});

app.use('/index/getSlideshow', function (req, res) {
    fs.readdir(__dirname + '/../public/images/home/slideshow', function (err, files) {
        if (err)
            throw err;
        res.send(files);
    })
});

app.use('/cakes/getAlbums', function (req, res) {
    var srcpath = __dirname + "/../public/images/gallery";
    var albumLocs = fs.readdirSync(srcpath).filter(function(file) {return(fs.statSync(path.join(srcpath, file)).isDirectory());});
    var albums = {};
    for (var i in albumLocs) {
        var entry = [];
        entry[0] = albumLocs[i];
        entry[1] = fs.readdirSync(srcpath + "/" + albumLocs[i])[0];
        albums[i] = entry;
    }
    res.send(albums);
});



module.exports = app;