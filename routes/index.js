var express = require('express');
var router = express.Router();
var decode = require('salesforce-signed-request');

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

router.post('/androidcockpit', function (req, res) {
    console.log('uid:'+ req.body.uid);
    console.log('post');

    var json = decode('3MVG9I1kFE5Iul2AlhNVv6OdFgsCtbLAbwiYGbzc1Ep2wUHfs_mhCgMZUqTDXRKeMkzxWoiNNWm.pijppZSPA', '8470605876691228371');
    console.log(json);
    res.render('androidcockpit', { pusher_key: process.env.PUSHER_KEY, uid: req.body.uid });
});

router.get('/androidcockpit', function (req, res) {
    console.log('get');
    var json = decode('3MVG9I1kFE5Iul2AlhNVv6OdFgsCtbLAbwiYGbzc1Ep2wUHfs_mhCgMZUqTDXRKeMkzxWoiNNWm.pijppZSPA', '8470605876691228371');
    console.log(json);
    console.log('uid:'+ req.body.uid);
    res.render('androidcockpit', { pusher_key: process.env.PUSHER_KEY, uid: req.param("uid") });
});




module.exports = router;







