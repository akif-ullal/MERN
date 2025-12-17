const express = require("express"); 

const app = express();
const path=require("path");
let port = 3000;

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"));

app.listen(port, () => {
    console.log("server is listening");
});



app.get("/",(req,res)=>{
    let followers=["akif","arif","asif"];
    let dice=Math.floor(Math.random()*6+1)
    res.render("dice",{dice,followers});
});