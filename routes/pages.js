var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    fs.readdir(__dirname + '/../public/images/slideshow', function (err, files) {
        if(err)
            throw err;
        res.render('index', {
                title: 'Sweet Events',
                pages: [
                    ['Sweets Creator', '/creator'],
                    ['Cakes', '/cakes'],
                    ['Flavors', '/flavors'],
                    ['Pricing', '/pricing'],
                    ['Questions', '/questions'],
                    ['Facebook', "/"],
                    ['Contact Us', '/contact']
                ],
                slideshowImages: files
            }
        )
    })
});

module.exports = router;
