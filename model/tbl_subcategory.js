var db=require('../connection');
var scategories={
    getAllScategories:function(callback){
        return db.query("select * from sub_category_tbl",callback);
    },
    getScategoriesById:function(id,callback){
        return db.query("select * from sub_category_tbl where fk_cat_id=?",[id],callback)
    },
    addScategories:function(scategory,callback){
        return db.query("Insert into sub_category_tbl values(?,?,?)",[null,scategory.sub_cat_name,scategory.fk_cat_id],callback);
    },
    deleteScategories:function(id,callback){
        return db.query("delete from sub_category_tbl where sub_cat_id=?",[id],callback);
       }
       
    
}
module.exports=scategories;