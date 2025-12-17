const express=require("express");

const app=express();

let port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port,()=>{
    console.log("servere is listening");
});

app.get("/registor",(req,res)=>{
    console.log(req.query);
    let{user,password}=req.query;
    res.send(`welcome ${user}`);
});

app.post("/registor",(req,res)=>{
    let {user,password}=req.body;
    res.send(`welcome ${user}`);
});