var express = require('express');
var xlsx = require('node-xlsx');
var router = express.Router();
var fs = require('fs');
var path = require('path');


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
    var srcpath = __dirname + "/../public/images/gallery";
    var albumLocs = fs.readdirSync(srcpath).filter(function (file) {
        return (fs.statSync(path.join(srcpath, file)).isDirectory());
    });
    res.render('cakes', {
            title: 'Cakes',
            pages: pages,
            active: 'Cakes',
            secondNav: albumLocs
        }
    )
});

router.get('/flavors', function (req, res, next) {
    var flavors = xlsx.parse(__dirname + '/../public/flavors.xlsx'); // parses a file
    var secondNav = {};
    for (var i in flavors) {
        secondNav[i] = flavors[i].name
    }
    console.log(secondNav);
    res.render('flavors', {
            title: 'Flavors',
            pages: pages,
            active: 'Flavors',
            flavors: flavors,
            secondNav: secondNav
        }
    );
    //console.log(flavors);
});

router.get('/pricing', function (req, res, next) {
    var pricing = xlsx.parse(__dirname + '/../public/pricing.xlsx'); // parses a file
    res.render('pricing', {
            title: 'Pricing',
            active: 'Pricing',
            pages: pages,
            pricing: pricing
        }
    );
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
