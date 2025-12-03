let p=document.querySelector("#para");

let btn=document.querySelector("button");
let url="https://catfact.ninja/fact";


btn.addEventListener("click",async()=>{
    let recReq=await getCatFact();
    p.innerText=recReq;
});

async function getCatFact(){
   try{
        let res=await axios.get(url);
        return res.data.fact;
   }
   catch(e)
   {
    return "no fact is found";
   }
}