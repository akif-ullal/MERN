let para=document.querySelector(".para");
let input=document.querySelector("input");

input.addEventListener("input",function()
{
    para.innerText=input.value;
});