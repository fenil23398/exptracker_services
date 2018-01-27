var db = require('../connection');
var scategories = {
    getAllScategories: function(callback) {
        return db.query("select * from sub_category_tbl", callback);
    },
    getScategoriesById: function(id, callback) {
        return db.query("select * from sub_category_tbl where fk_cat_id=?", [id], callback);
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