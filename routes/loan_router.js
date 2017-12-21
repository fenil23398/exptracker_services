var express=require('express');
var router=express.Router();
var loans=require('../model/tbl_loan');
router.get('/:id?',function(req,res,next){

    if(req.params.id){
        loans.getLoansById(req.params.id,function(err,rows){
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
        loans.getAllLoans(function(err,rows){
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
    loans.addLoans(req.body,function(err,count){
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
    
    loans.deleteLoans(req.params.id,function(err,count){
    
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
        
        loans.updateLoans(req.params.id,req.body,function(err,rows){
        
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