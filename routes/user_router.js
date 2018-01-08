var express=require('express');
var router=express.Router();
var Users=require('../model/tbl_user');
router.get('/:id?',function(req,res,next){

    if(req.params.id){
        Users.getUsersById(req.params.id,function(err,rows){
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
        Users.getAllUsers(function(err,rows){
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
    Users.addUsers(req.body,function(err,count){
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
    
   Users.deleteUsers(req.params.id,function(err,count){
    
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
    router.put('/:id',function(req,res,next){
        
       Users.updateUsers(req.params.id,req.body,function(err,rows){
        
       if(err)
         {
         res.json(err);
         }
         else
         {
         res.json(rows);
         }
         });
});
module.exports=router;