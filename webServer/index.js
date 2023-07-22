//The http.createServer() method includes request and response
// parameters which is supplied by nodejs

//The request object can be used to get information about the current http request
//i.e, url, request header, and data

//The response object can be used to send a response for a current HTTP request



const http = require("http");
const fs = require("fs");
const { dirname } = require("path");
//chrome, mozilla firefox, 
//apache
const server = http.createServer((req, res)=>{
    //console.log(req.url);
    if(req.url == "/"){
        res.end(" Hello guys from the home sides ");
    }
    else if(req.url == "/about"){
        res.end("<h1}> Hello from the about sides <h1>");
    }
    else if(req.url == "/contact"){
        res.end(" <h1> Hello from the contact sides <h1>");
    }
    else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", (err, data)=>{
            console.log(data);
            res.end(data);
            //console.log(__dirname);
            //const objData = JSON.parse(data);
            //res.end(data);
        });
        //res.end("Hello from the user api side ");
    }
    else{
        res.writeHead(404, {"Content-type": "text/html"});
        res.end(" <h1> 404 error, page does not exists <h1> ");
    }
    
});

server.listen(3000, "127.0.0.1", ()=>{
    console.log("listening to the port 3000 ");
});
