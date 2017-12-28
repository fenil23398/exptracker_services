var express=require('express');
var router=express.Router();
var cats=require('../model/cat_subcatjoin');
router.get('/:id?',function(req,res,next){

    if(req.params.id){
        
    }
    else
    {
        cats.getCatSubcat(function(err,rows){
            if(err)
            {
            res.json(err);
            }
            else
            {
            res.json(rows);
            }
        });
    }
});
module.exports=router;