var express=require('express');
var router=express.Router();
var Notes=require('../model/tbl_notes');
router.get('/:id?',function(req,res,next){

    if(req.params.id){
        Notes.getNotesById(req.params.id,function(err,rows){
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
        Notes.getAllNotes(function(err,rows){
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
    Notes.addNotes(req.body,function(err,count){
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
    
   Notes.deleteNotes(req.params.id,function(err,count){
    
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
        
       Notes.updateNotes(req.params.id,req.body,function(err,rows){
        
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