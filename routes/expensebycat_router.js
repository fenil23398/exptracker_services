var express = require('express');
var router = express.Router();
var expenses = require('../model/tbl_expenses');
router.get('/:id?', function(req, res, next) {

    if (req.params.id) {
        expenses.getExpenseByCatId(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    }
});
module.exports = router;