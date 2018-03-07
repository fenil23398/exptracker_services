var express=require('express');
var router=express.Router();
var chartss=require('../model/chartdoughnut');

router.get('/:id/:mon',function(req,res,next){
    console.log("welcome");
       chartss.getexps(req.params.id,req.params.mon,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })


});
module.exports=router;