var express = require('express');
var router = express.Router();
var reminderid = require('../model/tbl_reminder');
router.get('/:id?', function(req, res, next) {

    if (req.params.id) {
        reminderid.getReminder(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    }
});
module.exports = router;