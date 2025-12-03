let start=false;
let level=0;
let guessSqu=[];
let userSeq=[];

let btn=["yellow","blue","green","red"];

let body=document.querySelector("body");
let h4=document.querySelector("h4");

document.addEventListener("keypress",function()
{
    if(start===false)
    {
        levelUp();
    }
    
});

function btnFlash(btn)
{
    btn.classList.add("flash");
    
    setTimeout(function(){
        btn.classList.remove("flash");

    },150);
}



function levelUp()
{

    userSeq=[];
    level++;

    h4.innerText=`level ${level}`;
    start=true;


    let randomIdx=Math.floor(Math.random()*4);
    let randomColor=btn[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    
    btnFlash(randomBtn);

    guessSqu.push(randomColor);
    console.log(guessSqu);

}

function gameOver()
{
    body.classList.add("done");

    setTimeout(function(){
        body.classList.remove("done");
    },150);
}


function checkAns(indx)
{
    if(guessSqu[indx]===userSeq[indx])
    {
        if(guessSqu.length===userSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else{
        h4.innerHTML=`game over <b> your score will be ${level} </b> press key to start the game`;
        gameOver();
        resetGame();
    }

}

function btnPress(){
    let btn=this;

    btnFlash(btn);
    
    userSeq.push(this.id);
    let indx=userSeq.length-1;
    checkAns(indx);
}

let btns=document.querySelectorAll(".btn");

for(let btn of btns)
{
    btn.addEventListener("click",btnPress);
}

function resetGame(){
    start=false;
    level=0;
    guessSqu=[];
    userSeq=[];
}