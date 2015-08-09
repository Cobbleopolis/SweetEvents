var express = require('express');
var fs = require('fs');
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

module.exports = app;