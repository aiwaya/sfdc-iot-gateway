var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:uid', function (req, res) {
    res.render('android', {pusher_key: process.env.PUSHER_KEY, uid: req.params.uid});
});


module.exports = router;