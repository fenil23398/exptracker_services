var express = require('express');
var router = express.Router();
var reminder = require('../model/tbl_reminder');
router.get('/:id?', function(req, res, next) {

    if (req.params.id) {
        reminder.getRemindersById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    }
});
router.post('/', function(req, res, next) {
    reminder.addReminder(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});
router.delete('/:id', function(req, res, next) {

    reminder.deleteReminder(req.params.id, function(err, count) {

        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }

    });
});
router.put('/:id', function(req, res, next) {

    reminder.updateReminder(req.params.id, req.body, function(err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;