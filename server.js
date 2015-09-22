var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World!!!");
  response.write("<br/> new version - NEW NEW, but dev dev");
  response.end();
  console.log("##logTest##");
}).listen(process.env.PORT || 8888);
