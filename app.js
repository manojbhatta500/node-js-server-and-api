const http = require('http');
const fs = require('fs');
const data = fs.readFileSync(`${__dirname}/data/data.json`,'utf-8',(err,data)=>{
    console.log(`this is data i guess lets see: \n ${data}`);
});
const server = http.createServer((req,res)=>{
   const currentUrl = req.url;
   if(currentUrl === '/'|| currentUrl === '/overview' ){
    res.end('<h1>this is an overview page.</h1>');
   }else if( currentUrl === '/product'){
    res.end('<h1>this is an product page.</h1>');
   }else if(currentUrl === '/api'){
    res.writeHead(200,{'content-Tyoe': 'application/json'});
    res.end(data);
   }else{
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>sorry this page does not exists.</h1>');
   }
});
server.listen('8000','127.0.0.1',()=>{
    console.log(`Listening to port 800 or ip : 127.0.0.1 `);
});

