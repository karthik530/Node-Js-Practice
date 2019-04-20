var http = require('http');
var url = require('url');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	var query = url.parse(req.url,true).query;
    var txt = query.name+'Hello'+query.value;
    res.end(txt);
}).listen(8080);