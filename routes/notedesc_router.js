var express=require('express');
var router=express.Router();
var notedesc=require('../model/tbl_notes');
router.get('/:id?',function(req,res,next){
    
        if(req.params.id){
            notedesc.getNoteDesc(req.params.id,function(err,rows){
                if(err)
                {
                    res.json(err);
                }
                else{
                    res.json(rows);
                }
            })
        }
    });
    module.exports=router;