var express = require('express');
var router = express.Router();
var exp = require('../model/tbl_expenses');
router.post('/', function(req, res, next) {
    exp.getExpenseByColor(req.body, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;