var express = require('express');
var router = express.Router();
var controller = require('../controllers/html-controller.js');

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/userLocation', function (req, res) {
    var inputLocation = req.query;
    // if GET URL looks like...
    // stargazer.com/?address=####&lat=###.#####&lng=###.#####
    // req.query should look like...
    // {
    //     address: 'XXX',
    //     lat: ###.####,
    //     lng: ###.####,
    //     tz: 5
    // }

    controller.getData(inputLocation)
    .then(function(data) {
        res.send(data);
    })
    .catch(function(error) {
        console.log(error);
        res.status(500);
        res.send(error)
    });
});

module.exports = router;
