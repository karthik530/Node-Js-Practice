var mysql = require('mysql');

var con = mysql.createConnection({user:"root",password:"1234",host:"localhost",port:"3306",database:"mydb"});
var sql = "create table test1(intpar integer(20),textpar text);"
con.query(sql,function(err,result){
	if(err) throw err;
	console.log("Table created");
});
con.query("show tables",function(err,result){
	if(err) throw err;
	console.log(result);
});