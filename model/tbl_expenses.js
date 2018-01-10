var db = require('../connection');
var expenses = {
    getAllExpenses: function(callback) {
        return db.query("select e.*,s.sub_cat_name,s.icon_image from exp_tbl e,sub_category_tbl s where e.fk_scat_id = s.sub_cat_id", callback);
    },
    getExpensesById: function(id, callback) {
        return db.query("select e.*,s.sub_cat_name,s.icon_image  from exp_tbl e,sub_category_tbl s where e.fk_scat_id = s.sub_cat_id and e.fk_user_email=? ORDER BY expense_date desc", [id], callback)
    },

    addExpenses: function(exp, callback) {
        return db.query("Insert into exp_tbl values(?,?,?,?,?,?,?)", [null, exp.fk_user_email, exp.fk_scat_id, exp.expense_date, exp.expense_amt, exp.colour_name, exp.exp_note], callback);
    },
    deleteExpenses: function(id, callback) {
        return db.query("delete from exp_tbl where expense_id=?", [id], callback);
    },
    updateExpenses: function(id, exp, callback) {
        return db.query("update exp_tbl set fk_user_email=?,fk_scat_id=?,expense_date=?,expense_amt=?,colour_name=?,exp_note=? where expense_id=?", [exp.fk_user_email, exp.fk_scat_id, exp.expense_date, exp.expense_amt, exp.colour_name, exp.exp_note], callback);
    },
    getExpenseById: function(id, callback) {
        return db.query("select e.*,s.sub_cat_name,s.icon_image  from exp_tbl e,sub_category_tbl s where e.fk_scat_id = s.sub_cat_id and e.expense_id=? ORDER BY expense_date desc", [id], callback)
    },
    getExpenseByCatId: function(id, callback) {
        return db.query("select * from exp_tbl where fk_scat_id=?", [id], callback);
    },

}
module.exports = expenses;