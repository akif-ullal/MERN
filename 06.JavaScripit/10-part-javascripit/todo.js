let input=document.querySelector("input");
let submitBtn=document.querySelector(".submit");
let ul=document.querySelector("ul");

submitBtn.addEventListener("click",function(){
   let inputTodo=input.value;
   let li=document.createElement("li");

    let btn = document.createElement("button");
    btn.innerText = "delete";
    btn.classList.add("right-btn");
    li.innerText=inputTodo;
   
    if(input.value!="")
    {
        ul.append(li);
        li.append(btn);
    }
    input.value="";
   
});

ul.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove(); 
        
    }
});