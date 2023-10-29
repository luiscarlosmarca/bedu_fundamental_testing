const http= require("http");

const HOSTNAME =  process.env.HOSTNAME || "localhost";

const PORT=  process.env.PORT || 3000;

const server = http.createServer((request,response)=> {
    response.statusCode =200;
    response.setHeader ("Content-Type","text/plan");
    response.end("Hi world");

});

server.listen(PORT,HOSTNAME,()=>{
    console.log("hi testing");
    console.log(`Running server -- >  http://${HOSTNAME}:${PORT}`)
});