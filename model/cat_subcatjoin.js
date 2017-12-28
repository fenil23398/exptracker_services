var db=require('../connection');
var catsubcat={

    getCatSubcat:function(callback){
       
        return db.query("select c.*,s.* from category_tbl c,sub_category_tbl s where c.cat_id=s.fk_cat_id",callback);       
        //return db.query("select * from user_tbl where u_id=? and u_pass=?",[u.u_id,u.u_pass],callback);
    }

}
module.exports=catsubcat;