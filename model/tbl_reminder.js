var db = require('../connection');
var Reminder = {
    getRemindersById: function(id, callback) {
        return db.query("select * from reminder_tbl where fk_user_email=? ORDER BY rem_date desc", [id], callback)
    },
    addReminder: function(Reminder, callback) {
        return db.query("Insert into reminder_tbl values(?,?,?,?,?)", [null, Reminder.fk_user_email, Reminder.rem_date, Reminder.rem_title, Reminder.rem_desc], callback);
    },
    deleteReminder: function(id, callback) {
        return db.query("delete from reminder_tbl where rem_id=?", [id], callback);
    },
    updateReminder: function(id, Reminder, callback) {
        return db.query("update reminder_tbl set fk_user_email=?,rem_date=?,rem_title=?,rem_desc=? where rem_id=?", [Reminder.fk_user_email, Reminder.rem_date, Reminder.rem_title, Reminder.rem_desc, id], callback);
    },
    getReminder: function(id, callback) {
        return db.query("select * from reminder_tbl where rem_id=?", [id], callback)
    }
}
module.exports = Reminder;