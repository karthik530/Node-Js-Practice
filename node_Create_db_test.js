var mysql = require('mysql');
var con = mysql.createConnection({user:"root",password:"1234",host:"localhost",port:"3306"});

con.connect(function(err){
	if(err) throw err;
	console.log("Conected");
    con.query("CREATE DATABASE MYDB",function(err,result){
    if(err) throw err;
    console.log("Database Created");
    });
    con.query("SHOW DATABASES",function(err,result){
    	console.log(result);
    });
});