let btn=document.querySelector("button");
let h2=document.querySelector("h2");
let div=document.querySelector("div");


btn.addEventListener("click",function(){
    let firstColor=Math.floor(Math.random()*255);
    let secondColor=Math.floor(Math.random()*255);
    let thirdColor=Math.floor(Math.random()*255);

    let randomColor=`rgb(${firstColor},${secondColor},${thirdColor})`;
    div.style.backgroundColor = randomColor;

    h2.innerText=randomColor;

});
