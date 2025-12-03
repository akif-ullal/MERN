let image=document.querySelector("#result");

let btn=document.querySelector("button");
let url="https://dog.ceo/api/breeds/image/random";


btn.addEventListener("click",async()=>{
    let link=await getRandomImage();
    image.src=link;
    // image.setAttribute("src", "link"); both are similiar
    
});

async function getRandomImage(){
   try{
        let res=await axios.get(url);
        return res.data.message;
   }
   catch(e)
   {
    return "no image is found";
   }
}