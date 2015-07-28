var express = require('express');
var fs = require('fs');
var xlsx = require('node-xlsx');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    fs.readdir(__dirname + '/../public/images/slideshow', function (err, files) {
        if (err)
            throw err;
        res.render('index', {
                title: 'Sweet Events - In Development',
                pages: [
                    ['Home', '/', true],
                    //['Sweets Creator', '/creator', false],
                    ['Cakes', '/cakes', false],
                    ['Flavors', '/flavors', false],
                    ['Pricing', '/pricing', false],
                    //['Questions', '/questions', false],
                    ['Facebook', "/", false],
                    ['Contact Us', '/contact', false]
                ],
                slideshowImages: files
            }
        )
    })
});

router.get('/flavors', function (req, res, next) {
    var flavors = xlsx.parse(__dirname + '/../public/flavors.xlsx'); // parses a file
    //console.log(flavors[5]);
    res.render('flavors', {
            title: 'Sweet Events - Flavors',
            headder: "Flavors",
            pages: [
                ['Home', '/', false],
                //['Sweets Creator', '/creator', false],
                ['Cakes', '/cakes', false],
                ['Flavors', '/flavors', true],
                ['Pricing', '/pricing', false],
                //['Questions', '/questions', false],
                ['Facebook', "/", false],
                ['Contact Us', '/contact', false]
            ],
            flavors: flavors
        }
    )
});

module.exports = router;
