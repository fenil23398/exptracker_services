var express=require('express');
var router=express.Router();
var expenses=require('../model/tbl_expenses');
router.get('/:id?',function(req,res,next){

    if(req.params.id){
        expenses.getExpensesById(req.params.id,function(err,rows){
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
        expenses.getAllExpenses(function(err,rows){
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
    expenses.addExpenses(req.body,function(err,count){
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
    
    expenses.deleteExpenses(req.params.id,function(err,count){
    
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
        
        expenses.updateExpenses(req.params.id,req.body,function(err,rows){
        
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