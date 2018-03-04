var express = require('express');
var router = express.Router();
var lchart = require('../model/chartdoughnut');

router.get('/:id?/:mail?',function(req,res,next){
    
           lchart.getexpforline(req.params.id,req.params.mail,function(err,rows){
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