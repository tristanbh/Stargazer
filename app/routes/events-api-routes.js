var express = require('express');
var router = express.Router();
var controller = require('../controllers/events-api-controller.js');

// router.get('/', function(req, res) {
//     console.log(req.user);
//     if (req.user) {
//         res.send('isLoggedIn');
//     } else {
//         res.send('isNotLoggedIn');
//     }
// });

router.post('/', function (req, res) {
    console.log(req.body);

    controller.addEvent(
        req.body
    ).then(function(result) {

    });

    // check something in result
    // to decide if successful or not
    // if (/*some validation of result*/) {
    //     res.send('POST succeeeded');
    // } else {
    //     res.send('POST failed');
    // }
});

router.delete('/:id', function (req, res) {
    controller.deleteEvent(
        req.params.id
    )
    .then(function(result) {
        if (result.changedRows == 0) {
            res.send('DELETE failed');
        } else {
            res.send('DELETE succeeded');
        }
    });
});

module.exports = router;