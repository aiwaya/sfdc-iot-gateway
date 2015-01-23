var express = require('express');
var router = express.Router();

/* Called from Heroku App */
router.get('/', function (req, res) {
    res.render('map', {lat: process.env.LATITUDE, lon: process.env.LONGITUDE, heroku_page: true});
});

/* Called from Salesforce */
router.post('/', function (req, res) {
    res.render('map', {lat: process.env.LATITUDE, lon: process.env.LONGITUDE, heroku_page: false});
});

router.get('/cockpit/:uid', function (req, res) {
    res.render('cockpit', { pusher_key: process.env.PUSHER_KEY, uid: req.param("uid") });
});

router.post('/androidcockpit/:uid', function (req, res) {

    console.log('uid:'+ req.body.uid);

    res.render('androidcockpit', { pusher_key: process.env.PUSHER_KEY, uid: req.body.uid });
});




module.exports = router;







