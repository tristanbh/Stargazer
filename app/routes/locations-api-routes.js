var express = require('express');
var router = express.Router();
var controller = require('../controllers/locations-api-controller.js')

// router.get('/', function(req, res) {
//     if (req.user) {
//         res.send('isLoggedIn');
//     } else {
//         res.send('isNotLoggedIn');
//     }
// });

router.post('/', function (req, res) {
    console.log(req.body);
    
    controller.addLocation(
        req.body
    );

    // check something in result
    // to decide if successful or not
    // if (/*some validation of result*/) {
    //     res.send('POST succeeeded');
    // } else {
    //     res.send('POST failed');
    // }
});

router.delete('/:id', function (req, res) {
    controller.deleteLocation(
        req.params.id
    ).then(function(result){
        if (result.changedRows == 0) {
            res.send('DELETE failed');
        } else {
            res.send('DELETE succeeded');
        }
    });
});

module.exports = router;