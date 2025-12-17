import express from 'express';

const app = express();

let port=3000;

//server listening
app.listen(port,()=>{
    console.log("server is listening");
});
let code="my first server"


// app.use((req,res)=>{
//     res.send(code);
// });


// app.get("/",(req,res)=>{
//     let str="this is my root of server";
//     res.send(str);
// });

// app.get("/apple",(req,res)=>{
//     let str="this apple";
//     res.send(str);
// });

// app.get("/orange",(req,res)=>{
//     let str="this orange";
//     res.send(str);
// });

// app.get("/mango",(req,res)=>{
//     let str="this mango";
//     res.send(str);
// });


// app.get(/.*/,(req,res)=>{
//     let str="this page is not exist";
//     res.send(str);
// });

//giving your own path
// app.get("/user/:name/:age",(req,res)=>{
//     let {name,age} = req.params;
//     res.send(`this is belonging to @ ${name} thsi is ${age}`);
// });

app.get("/search",(req,res)=>{
    let {q} = req.query;
    res.send(`this is my query ${q}`);
});