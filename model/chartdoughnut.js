var db = require('../connection');
var chartd = {
    getallExpByCat:function(id,callback){
       return db.query("select * from sub_category_tbl where fk_cat_id=?",[id],callback);
    },
    getexps:function(callback)
    {
        return db.query("select category_tbl.cat_name,sum(exp_tbl.expense_amt) from category_tbl,exp_tbl,sub_category_tbl where category_tbl.cat_id=sub_category_tbl.fk_cat_id and sub_category_tbl.sub_cat_id=exp_tbl.fk_scat_id GROUP BY category_tbl.cat_id",callback);
    },
    getexpforline:function(id,callback)
    {
        return db.query("select sum(expense_amt),exp_month from exp_tbl where fk_user_email=? OR fk_user_email=? GROUP BY exp_month",[id,'expensetracker8@gmail.com'],callback);
    },
    getexpforbar:function(id,callback)
    {
        return db.query("select sum(exp_tbl.expense_amt),category_tbl.cat_name from category_tbl,exp_tbl,sub_category_tbl where category_tbl.cat_id=sub_category_tbl.fk_cat_id AND sub_category_tbl.sub_cat_id=exp_tbl.fk_scat_id AND (category_tbl.fk_user_email=? OR category_tbl.fk_user_email=?) AND (sub_category_tbl.s_fk_user_email=? OR sub_category_tbl.s_fk_user_email=?) GROUP BY category_tbl.cat_id ",[id,'expensetracker8@gmail.com',id,'expensetracker8@gmail.com'],callback); 
    }
    
    
}
    module.exports = chartd;