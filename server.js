//var http = require('http');

//http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/html'});
//  res.write('Hello! This is Team Atlas Cloud');
 //  res.end('');
//}).listen(8080); 

var mysql = require('mysql');

  var con = mysql.createConnection({
  host: 'custome-mysql.gamification.svc.cluster.local',
  user: 'xxuser',
  password: 'welcome1'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
