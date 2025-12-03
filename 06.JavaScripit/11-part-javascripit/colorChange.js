let h1=document.querySelector("h1");

function colorChange(color,delay)
{
    return new Promise(function(resolve,reject)
{
    setTimeout(function(){
        h1.style.color=color;
        resolve("color as changed");
    },delay);
    
});
}

colorChange("red",1000).then(function(){
    console.log("color change to red");
    return colorChange("yellow",1000);
})
.then(function(){
    console.log("color change to yellow");
    return colorChange("blue",1000);
})
.then(function(){
    console.log("color change to blue");
});

