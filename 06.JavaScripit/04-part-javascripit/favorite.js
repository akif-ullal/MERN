let guess=prompt("guess the movie");
let fav="avatar";

while(guess!=fav && guess!="quit")
{
    console.log("wrong movie");
    guess=prompt("try again");
}

if(guess==fav)
{
    console.log("congrats!")
}
else{
    console.log("your quited the game");
}
