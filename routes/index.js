var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('map', {lat: process.env.LATITUDE, lon: process.env.LONGITUDE});
});

router.post('/', function (req, res) {
    res.render('map', {lat: process.env.LATITUDE, lon: process.env.LONGITUDE});
});

router.get('/cockpit/:uid', function (req, res) {
    res.render('cockpit', { pusher_key: process.env.PUSHER_KEY, uid: req.param("uid") });
});


module.exports = router;







