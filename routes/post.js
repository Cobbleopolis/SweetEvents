var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();


app.use('/test', function (req, res) {
    res.send("No test here.");
});

app.use('/index/getSlideshow', function (req, res) {
    console.log("Slideshow");
    fs.readdir(__dirname + '/../public/images/home/slideshow', function (err, files) {
        if (err)
            throw err;
        res.send(files);
    });
});

app.use('/gallery/getAlbums', function (req, res) {
    var srcpath = __dirname + "/../public/images/gallery";
    var albums = fs.readdirSync(srcpath).filter(function (file) {
        return (fs.statSync(path.join(srcpath, file)).isDirectory());
    });
    res.send(albums);
});

app.use ('/gallery/getAlbum/:album', function(req, res) {
    var srcPath = __dirname + '/../public/images/gallery/';
    if (fs.existsSync(srcPath))
        fs.readdir(__dirname + '/../public/images/gallery/' + req.params.album, function (err, files) {
            if (err)
                throw err;
            res.send(files);
        });
    //res.send(req.params.album);
});

module.exports = app;