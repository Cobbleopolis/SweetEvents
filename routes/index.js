var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
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
        ]
    });
});

module.exports = router;
