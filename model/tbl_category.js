var db = require('../connection');
var categories = {
    getAllCategories: function(callback) {
        return db.query("select * from category_tbl", callback);
    },
    getCategoriesById: function(id, callback) {
        return db.query("select * from category_tbl where fk_user_email=? OR fk_user_email=?", [id, 'expensetracker8@gmail.com'], callback)
    },
    addCategories: function(categoryy, callback) {
        return db.query("Insert into category_tbl values(?,?,?,?)", [null, categoryy.cat_name, categoryy.cicon_image, categoryy.fk_user_email], callback);
    },
    deleteCategories: function(id, callback) {
        return db.query("delete from category_tbl where cat_id=?", [id], callback);
    },



}
module.exports = categories;