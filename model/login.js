var db = require('../connection');
var logins = {

    getUserByLogin: function(usr, callback) {

        return db.query("select * from user_tbl where user_email=? and user_pass=?", [usr.user_email, usr.user_pass], callback);

    }


}
module.exports = logins;