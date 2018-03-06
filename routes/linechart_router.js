var express = require('express');
var router = express.Router();
var lchart = require('../model/chartdoughnut');

router.get('/:id',function(req,res,next){
        console.log("welcome");
           lchart.getexpforline(req.params.id,function(err,rows){
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