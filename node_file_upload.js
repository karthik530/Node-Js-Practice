var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

http.createServer(function(req,res){
	if (req.url == '/fileUpload') {
		var form = new formidable.IncomingForm();
		form.parse(req,function(err,fields,files){
			oldpath = files.fileUpload.path;
			newpath = 'C:/Users/karthik/Desktop'+files.fileUpload.name;
			fs.rename(oldpath,newpath,function(err){	
			res.write('File Uploaded Successfully');
		    res.end();
		});
	});

	}	else	{	
	fs.readFile('node_form.html',function(err,data){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write("Hello World!!");
		res.write(data);
		res.end();
	});	}
}).listen(8080);