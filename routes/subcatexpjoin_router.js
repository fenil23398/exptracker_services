var express = require('express');
var router = express.Router();
var expenses = require('../model/tbl_subcategory');
router.post('/:id?', function(req, res, next) {

    if (req.params.id) {
        expenses.getAllSubCatByJoin(req.params.id, req.body, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    }
});
module.exports = router;