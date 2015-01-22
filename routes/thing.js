var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:uid', function (req, res) {
    var template_name = req.query.t;
    if(template_name == null || template_name == '') {
      template_name = 'thing';
    }
    res.render(template_name, {pusher_key: process.env.PUSHER_KEY, uid: req.params.uid});
});


module.exports = router;