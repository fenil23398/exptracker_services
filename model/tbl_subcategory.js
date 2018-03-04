var db = require('../connection');
var scategories = {
    getAllScategories: function(callback) {
        return db.query("select * from sub_category_tbl", callback);
    },
    getScategoriesById: function(id, callback) {
        return db.query("select * from sub_category_tbl where fk_cat_id=?", [id], callback);
       // return db.query("select * from category_tbl where fk_user_email=? OR fk_user_email=?", [id,'expensetracker8@gmail.com'],callback)
        //    return db.query("select * from sub_category_tbl where fk_cat_id=? and s_fk_user_email=?", [scategory.fk_cat_id,scategory.s_fk_user_email], callback);
    },
    getSelectedcats: function(scategory, callback) {
        // return db.query("select * from category_tbl where fk_user_email=? OR fk_user_email=?", [id,'expensetracker8@gmail.com'],callback)
            return db.query("select * from sub_category_tbl where (s_fk_user_email=? OR s_fk_user_email=?) AND  fk_cat_id=? ", [scategory.s_fk_user_email,'expensetracker8@gmail.com',scategory.fk_cat_id], callback);
    },
    addScategories: function(scategory, callback) {
        return db.query("Insert into sub_category_tbl values(?,?,?)", [null, scategory.sub_cat_name, scategory.fk_cat_id], callback);
    },
    deleteScategories: function(id, callback) {
        return db.query("delete from sub_category_tbl where sub_cat_id=?", [id], callback);
    },
    getAllSubCatByJoin: function(id, demo, callback) {


        return db.query("select s.*,e.*,c.* from sub_category_tbl s,exp_tbl e,category_tbl c where s.fk_cat_id=c.cat_id and e.fk_scat_id=s.sub_cat_id and e.fk_user_email=? and s.fk_cat_id=?", [id, demo.fk_cat_id], callback)
    }

}
module.exports = scategories;