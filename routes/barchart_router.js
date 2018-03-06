var express=require('express');
var router=express.Router();
var chartss=require('../model/chartdoughnut');

router.get('/:id',function(req,res,next){
    console.log("welcome");
       chartss.getexpforbar(req.params.id,function(err,rows){
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