var express=require('express');
var router=express.Router();
var login=require('../model/login');

router.post('/',function(req,res,next){
    login.getUserByLogin(req.body,function(err,count){
        if(err)
        {
            res.json(err);
        }
        else
        {
            //console.log(count);
            if(count=="[]")
            {

            }
            else{
            res.json(count);
             }
        }
    });
});
module.exports=router;