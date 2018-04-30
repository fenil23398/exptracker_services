var express = require('express');
var router = express.Router();
var Users = require('../model/tbl_user');
var path = require('path');
router.put('/:id', function(req, res, next) {
    Users.updateNormalUsers(req.params.id, req.body, function(err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;