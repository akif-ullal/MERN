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

async function moreUnderstandableCode(){
    await colorChange("red",1000);
    await colorChange("blue",1000);
    await colorChange("green",1000);
    colorChange("yellow",1000);
}

