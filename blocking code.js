const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === "/"){
       return res.end("hi this is a home page");
    }
    if (req.url === "/about"){
        //blocing code  
        for(let  i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i},${j}`);
            }
        }
       return res.end("hi this is a about page");
    }
    
    res.end(
        `
            <h1>this page is not rechable</h1>
            <a href='/'>navigate back to the home page</a>
        `
    );
})

server.listen(8000 , ()=>{
    console.log("server is listerning in the port");
})