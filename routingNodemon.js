const http=require('http')
const fs=require('fs')
const path=require('path')
const port=process.env.port
const hostname='127.0.0.1'
let myServer=http.createServer((req,res)=>
{
    let reqHandler=(statusCode,page)=>
        {
            fs.readFile(page,(err,data)=>
            {
                if(data)
                    {
                        res.writeHead(statusCode,{'Content-Type':'text/html'})
                        res.write(data);
                        res.end();
                    }
                    else{
                        res.writeHead(500,{'Content-Type':'text/plain'})
                        res.end("Internal Error occured");
                    }
            })

        }
    if(req.url==='/')
        {
            const pagePath=path.join(__dirname,"./view/index.html")
            reqHandler(200,pagePath)

        }
    else if(req.url==='/about')
        {
            const pagePath=path.join(__dirname,"./view/about.html")
            reqHandler(200,pagePath)
        }
    else if(req.url==='/contact')
        {
            const pagePath=path.join(__dirname,"./view/contact.html")
            reqHandler(200,pagePath)
        }
    else{
        const pagePath=path.join(__dirname,"./view/notFound.html")
        reqHandler(500,pagePath)
    }
})
myServer.listen(port,()=>
{
    console.log(`Server is running`)
})