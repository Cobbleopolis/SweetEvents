var express = require('express');
var xlsx = require('node-xlsx');
var router = express.Router();


var pages = [
    ['Home', '/'],
    //['Sweets Creator', '/creator'],
    ['Cakes', '/cakes'],
    ['Flavors', '/flavors'],
    ['Pricing', '/pricing'],
    //['Questions', '/questions'],
    //['Facebook', "/"],
    ['Contact Us', '/contact']
];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
            title: 'Sweet Events - In Development',
            pages: pages,
            active: 'Home'
        }
    )
});

router.get('/cakes', function (req, res, next) {
    //console.log(flavors[5]);
    res.render('cakes', {
            title: 'Cakes',
            active: 'Cakes',
            pages: pages
        }
    )
});

router.get('/flavors', function (req, res, next) {
    var flavors = xlsx.parse(__dirname + '/../public/flavors.xlsx'); // parses a file
    //console.log(flavors[5]);
    res.render('flavors', {
            title: 'Flavors',
            pages: pages,
            active: 'Flavors',
            flavors: flavors
        }
    )
});

router.get('/contact', function (req, res, next) {
    //console.log(flavors[5]);
    res.render('contact', {
            title: 'Contact',
            active: 'Contact Us',
            pages: pages
        }
    )
});

router.get('/pricing', function (req, res, next) {
    //console.log(flavors[5]);
    res.render('pricing', {
            title: 'Pricing',
            active: 'Pricing',
            pages: pages
        }
    )
});

module.exports = router;
