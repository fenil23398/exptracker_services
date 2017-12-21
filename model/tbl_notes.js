var db=require('../connection');
var Notes={
    getAllNotes:function(callback){
        return db.query("select * from notes_tbl",callback);
    },
    getNotesById:function(id,callback){
        return db.query("select * from notes_tbl where fk_user_email=?",[id],callback)
    },
    addNotes:function(Note,callback){
        return db.query("Insert into notes_tbl values(?,?,?,?,?)",[null,Note.fk_user_email,Note.notes_desc,Note.notes_date,Note.colour_name],callback);
    },
    deleteNotes:function(id,callback){
        return db.query("delete from notes_tbl where notes_id=?",[id],callback);
       },
    updateNotes:function(id,Note,callback){
        return db.query("update notes_tbl set fk_user_email=?,notes_desc=?,notes_date=?,colour_name=? where notes_id=?",[Note.fk_user_email,Note.notes_desc,Note.notes_date,Note.colour_name,id],callback);
    }
       
    
}
module.exports=Notes;