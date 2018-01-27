var express=require('express');
var router=express.Router();
var Notes=require('../model/tbl_notes');
router.post('/',function(req,res,next){
    Notes.getNoteByColor(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=router;    