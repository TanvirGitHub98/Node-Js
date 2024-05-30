//WriteFile
let fs=require('fs')

// fs.writeFile('demo1.txt',"Hi! I am Tanvir. ",(err)=>
// {
//     if(err)
//         {
//             console.log(err);
//         }
//     else{
//         console.log("Successful")
//     }
// })

// fs.appendFile("demo1.txt","I am a software Engineer",(err)=>
// {
//     if(err)
//         {
//             console.log(err)
//         }
//     else{
//         console.log("Successful")
//     }
// })
// fs.readFile('demo1.txt','utf-8',(err,data)=>
// {
//     if(data)
//         {
//             console.log(data);
//         }
//     else{
//         console.log(err);
//     }
// })

// fs.rename('demo2.txt','demo3.txt',(err)=>
// {
//     if(err)
//         {
//             console.log(err);
//         }
//     else{
//         console.log("Success");
//     }
// })


fs.exists('demo1.txt',(res)=>
{
    if(res)
        {
            console.log("Found")
        }
    else{
        console.log("Not FOund");
    }
})

// fs.unlink('demo3.txt',(err)=>
// {
//     if(err)
//         {
//             console.log(err)
//         }
//     else{
//         console.log("Success");
//     }
// })