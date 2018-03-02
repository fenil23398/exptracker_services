var express = require('express');
var router = express.Router();
var scategories = require('../model/tbl_subcategory');

router.post('/:id?', function(req, res, next) {
    scategories.getScategoriesById(req.params.id, req.body, function(err, res) {
        if (err) {
            res.json(err);
        } else {

            res.json(req.body);
        }
    });
});

module.exports = router;