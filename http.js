const http = require('http');
const server = http.createServer((req, res) =>{
    if (req.url === "/"){
       return res.end("hi this is a home page");
    }
    
    res.end(
        `
            <h1>this page is not rechable</h1>
            <a href='/'>navigate back to the home page</a>
        `
    );
})
server.listen(8000);
