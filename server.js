let http=require('http');
let port=1810;
let hostname='127.0.0.1'
let myServer=http.createServer((req,res)=>
{
    res.writeHead(202,{"Content-Type":'test/plain'})
    res.write("Hello I am your new server")
    res.end();
});
myServer.listen(port,hostname,()=>
{
    console.log(`Server is running at http://${hostname}:${port}`)
})
