var express = require('express');
var fs = require('fs');
var app = express();


app.use('/index/getSlideshow', function (req, res) {
    fs.readdir(__dirname + '/../public/images/slideshow', function (err, files) {
        if (err)
            throw err;
        res.send(files);
    })
});

module.exports = app;