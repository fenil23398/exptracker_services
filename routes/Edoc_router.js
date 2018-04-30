var express = require('express');
var router = express.Router();
var Edoc = require('../model/tbl_edoc');
var multer = require('multer');
var path = require('path');
router.get('/:id?', function(req, res, next) {

    if (req.params.id) {
        Edoc.getEdocById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    } else {
        Edoc.getAllEdoc(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        //        x = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({ storage: storage });

router.post('/', upload.any(), function(req, res, next) {
    Edoc.addEdoc(req.body, req.files[0].filename, req.files[1].filename, req.files[2].filename, function(err, count) {

        console.log(req.body);

        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});
router.delete('/:id', function(req, res, next) {

    Edoc.deleteEdoc(req.params.id, function(err, count) {

        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }

    });
});

module.exports = router;