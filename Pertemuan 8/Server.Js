const port = 3000,

    http =  require('http'), 
    httpStatus = require('http-status-codes'),
    app = http.createServer((request, response)=>{
        console.log("terima permintaan");


response.writeHead(httpStatus.OK,{"Content-Type" : "text/html"});

let responseMessage = "<h1>Hello World Browser</h1>";

response.write(responseMessage);

response.end();
    
console.log("Kirim response : ${responseMessage}");
});

app.listen(port);

console.log('Server start di port : ${port}');