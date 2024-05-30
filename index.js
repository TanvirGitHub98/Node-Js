// let s1= require ('./localModule.js')
// console.log(s1.name())
// console.log(s1.age())
// console.log(s1.cgpa());
let http=require('http');
let port=3000;
let hostName="127.0.0.1";
let myServer=http.createServer((req,res)=>
{
    res.end("Server has started are you ready yaaa!!!")
})
myServer.listen(port,hostName,()=>
{
    console.log(`Server is running at http://${hostName}:${port}`)
})