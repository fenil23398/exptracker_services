var db=require('../connection');
var loans={
    getAllLoans:function(callback){
        return db.query("select * from loan_tbl",callback);
    },
    getLoansById:function(id,callback){
        return db.query("select * from loan_tbl where fk_user_email=?",[id],callback)
    },
    addLoans:function(loan,callback){
        return db.query("Insert into loan_tbl values(?,?,?,?,?,?,?)",[null,loan.fk_user_email,loan.loan_date,loan.loan_amt,loan.loan_rate,loan.loan_yrs,loan.loan_emi],callback);
    },
    deleteLoans:function(id,callback){
        return db.query("delete from loan_tbl where loan_id=?",[id],callback);
       },
    updateLoans:function(id,loan,callback){
        return db.query("update loan_tbl set fk_user_email=?,loan_date=?,loan_amt=?,loan_rate=?,loan_yrs=?,loan_emi=? where loan_id=?",[loan.fk_user_email,loan.loan_date,loan.loan_amt,loan.loan_rate,loan.loan_yrs,loan.loan_emi,id],callback);
    }
       
    
}
module.exports=loans;