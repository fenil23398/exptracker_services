var db = require('../connection');
var chartd = {
    getallExpByCat:function(id,callback){
       return db.query("select * from sub_category_tbl where fk_cat_id=?",[id],callback);
    },
}
    module.exports = chartd;