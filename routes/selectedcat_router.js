var express=require('express');
var router=express.Router();
var scategories=require('../model/tbl_subcategory');

router.post('/',function(req,res,next){
    scategories.getSelectedcats(req.body,function(err,count){
        if(err)
        {
            res.json(err);
        }
        else
        {
           res.json(count);
        }
    });
});
module.exports=router;