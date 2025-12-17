const express= require("express");
const app=express();
const path = require('path');
const port=8080;
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.set('views', path.join(__dirname, 'views'));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

let posts=[
    {
        id:uuidv4(),
        user:"akif",
        content:"start coding"
    },

    {
        id:uuidv4(),
        user:"arif",
        content:"working at saudi"
    },

    {
        id:uuidv4(),
        user:"asif",
        content:"working at dubai"
    }
];
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs",{posts});
});

app.post("/posts",(req,res)=>{
    let {user, content}=req.body;
    let id=uuidv4();
    posts.push({user,content,id});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post=posts.find((p)=>id===p.id);
    // console.log(post);
    res.render("show.ejs",{post});
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});

});

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let {content}=req.body;
    let post=posts.find((p)=>id===p.id);
    post.content=content;
    // console.log(post);
    console.log(content);
    res.redirect("/posts");

});

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts=posts.filter((p)=>id!=p.id);
    res.redirect("/posts");
});

app.listen(port,()=>{
    console.log("server is listening");
});