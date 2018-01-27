var express = require('express');
var router = express.Router();
var spends = require('../model/tbl_expenses');
router.get('/:id?', function(req, res, next) {

    if (req.params.id) {
        spends.getSpendsById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    }
});


module.exports = router;