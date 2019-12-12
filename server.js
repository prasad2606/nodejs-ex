//var http = require('http');

//http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/html'});
//  res.write('Hello! This is Team Atlas Cloud');
 //  res.end('');
//}).listen(8080); 

var mysql = require('mysql');
var http = require('http');
var con = mysql.createConnection({
  host: 'custom-mysql.gamification.svc.cluster.local',
  user: 'xxuser',
  password: 'welcome1'
});


http.createServer(function (req, res) {

con.connect(function(err) {
if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Not Found');
    }; 
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('Connected!');

});

}).listen(8080);
