var express=require('express');
var router=express.Router();
var scategories=require('../model/tbl_subcategory');

router.get('/:id?',function(req,res,next){

    if(req.params.id){

    }
    else
    {
        scategories.getAllScategories(function(err,rows){
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
router.post('/',function(req,res,next){
    scategories.addScategories(req.body,function(err,count){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(req.body);
        }
    });
});
router.delete('/:id',function(req,res,next){
    
   scategories.deleteScategories(req.params.id,function(err,count){
    
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