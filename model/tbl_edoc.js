var db = require('../connection');
var fs = require('fs');
var Edoc = {
    getAllEdoc: function(callback) {
        return db.query("select * from edocument_tbl", callback);
    },
    getEdocById: function(id, callback) {
        return db.query("select * from edocument_tbl where fk_user_email=?", [id], callback)
    },

    addEdoc: function(Edocument, img1, img2, img3, callback) {

        return db.query("insert into edocument_tbl values(?,?,?,?,?,?)", [null, Edocument.edoc_title, Edocument.fk_user_email, img1, img2, img3], callback);
    },


}
module.exports = Edoc;