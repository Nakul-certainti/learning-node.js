
const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    res.end("hello")
})
server.listen((8000),() =>{
    console.log("the server is running");
})