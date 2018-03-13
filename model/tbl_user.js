var db = require('../connection');
var fs = require('fs');
var Users = {
    getAllUsers: function(callback) {
        return db.query("select * from user_tbl", callback);
    },
    getUsersById: function(id, callback) {
        return db.query("select * from user_tbl where user_email=?", [id], callback)
    },
    addUsers: function(User, filename, callback) {

        return db.query("Insert into user_tbl values(?,?,?,?,?,?,?)", [null, User.user_email, User.user_name, User.user_mob_no, filename, User.user_pass, User.user_dpass], callback);
    },
    deleteUsers: function(id, callback) {
        return db.query("delete from user_tbl where user_email=?", [id], callback);
    },
    updateUsers: function(id, User, filename, callback) {
        if (User.user_img != '') {
            console.log(User);
            var path = './public/images/' + User.user_img;
            fs.unlink(path, function(err) {
                if (err) {
                    console.log(err);
                }
                console.log('Deleted successfuly');
            })
        }
        return db.query("update user_tbl set user_name=?,user_mob_no=?,user_img=?,user_pass=?,user_dpass=? where user_email=?", [User.user_name, User.user_mob_no, filename, User.user_pass, User.user_dpass, id], callback);
    },
    changePassword: function(id, User, callback) {
        return db.query("update user_tbl set user_pass=? where user_email=?", [User.user_pass, id], callback);
    }


}
module.exports = Users;