var db = require('../connection');
var chartd = {
    getallExpByCat:function(id,callback){
       return db.query("select * from sub_category_tbl where fk_cat_id=?",[id],callback);
    },
    getexps:function(callback)
    {
        return db.query("select category_tbl.cat_name,sum(exp_tbl.expense_amt) from category_tbl,exp_tbl,sub_category_tbl where category_tbl.cat_id=sub_category_tbl.fk_cat_id and sub_category_tbl.sub_cat_id=exp_tbl.fk_scat_id GROUP BY category_tbl.cat_id",callback);
    }
}
    module.exports = chartd;