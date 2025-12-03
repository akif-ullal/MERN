let url="http://universities.hipolabs.com/search?name=";

let btn=document.querySelector("button");
let input=document.querySelector("input");

let list=document.querySelector("ul");

btn.addEventListener("click",async()=>{
    
    let collegeArr=await getCollegeDetails();
    list.innerText="";
    for(let college of collegeArr)
    {
        let li=document.createElement("li");
        li.innerText=college.name;
        list.append(li);
    }
    
});

async function getCollegeDetails(){
   try{
        let res=await axios.get(url+input.value);
        console.log(res);
        return res.data;
   }
   catch(e)
   {
    return "no data is found";
   }
}