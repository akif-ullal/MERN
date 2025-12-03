let max=prompt("enter your max number");
let randomNo=Math.floor(Math.random()*max)+1;
let guess=prompt("guess the number");

while(true)
{
    if(guess=="quit")
    {
        console.log("your quit the game");
        break;
    }

    if(randomNo==guess)
    {
        console.log("congragulation your guess is correct");
        break;
    }
    else if(randomNo>guess)
    {
        console.log("your number is very small");
        guess=prompt("please guess again");
    }
    else{
        console.log("your number is very big");
        guess=prompt("please guess again");
    }
    
}