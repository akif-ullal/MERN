const express = require("express"); 

const app = express();
const path=require("path");
let port = 3000;

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"));

app.listen(port, () => {
    console.log("server is listening");
});

app.use(express.static(path.join(__dirname,"public")));

app.get("/id/:username",(req,res)=>{
    let {username}=req.params;
    let data = require("./data.json");
    let user=data[username];
    
    if(user)
    {
        res.render("instaProfile.ejs",{data : data[username]});
    }
    else{
        res.render("notFound.ejs");
    }
});