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
    res.render('cakes', {
            title: 'Cakes',
            pages: pages,
            active: 'Cakes'
        }
    )
});

router.get('/flavors', function (req, res, next) {
    var flavors = xlsx.parse(__dirname + '/../public/flavors.xlsx'); // parses a file
    res.render('flavors', {
            title: 'Flavors',
            pages: pages,
            active: 'Flavors',
            flavors: flavors
        }
    );
    //console.log(flavors);
});

router.get('/pricing', function (req, res, next) {
    res.render('pricing', {
            title: 'Pricing',
            active: 'Pricing',
            pages: pages
        }
    )
});

router.get('/contact', function (req, res, next) {
    var contactUs = xlsx.parse(__dirname + '/../public/contactUs.xlsx'); // parses a file
    res.render('contact', {
            title: 'Contact Us',
            active: 'Contact Us',
            pages: pages,
            contactUs: contactUs
        }
    );
    //console.log(contactUs)
});

module.exports = router;
