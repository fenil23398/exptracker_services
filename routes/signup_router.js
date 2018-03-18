var express = require('express');
var router = express.Router();
var Users = require('../model/tbl_user');

router.post('/', function(req, res, next) {
    Users.addNormalUsers(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

module.exports = router;