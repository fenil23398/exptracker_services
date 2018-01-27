var express = require('express');
var router = express.Router();
var Users = require('../model/tbl_user');
router.put('/:id', function(req, res, next) {

    Users.changePassword(req.params.id, req.body, function(err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;