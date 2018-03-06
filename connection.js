var mysql=require('mysql');
var cnn=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'exptracker'

    // host:'expensetracker1.db.9462939.474.hostedresource.net',
    // user:'expensetracker1',
    // password:'Fenil@9898',
    // database:'expensetracker1'
});
module.exports=cnn;