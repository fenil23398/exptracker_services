var express=require('express');
var router=express.Router();
var Categories=require('../model/tbl_category');
router.get('/:id?',function(req,res,next){

    if(req.params.id){
        Categories.getCategoriesById(req.params.id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    }
    else
    {
        Categories.getAllCategories(function(err,rows){
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
    Categories.addCategories(req.body,function(err,count){
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
    
   Categories.deleteCategories(req.params.id,function(err,count){
    
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