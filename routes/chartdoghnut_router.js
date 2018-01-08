var express=require('express');
var router=express.Router();
var chartss=require('../model/chartdoughnut');
router.get('/:id?',function(req,res,next){

    if(req.params.id){
        chartss.getallExpByCat(function(err,rows){
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
    else
    {
        
    }
});
module.exports=router;