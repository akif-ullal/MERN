let todo=[];

let req=prompt("enter the task to perform");

while(true)
{
    if(req=="quit")
    {
        console.log("your quit form todo list");
        break;
    }

    if(req=="add")
    {
        let task=prompt("Add your task");
        todo.push(task);
        console.log("task added succesfully");
    }
    else if(req=="list")
    {
        for(let i=0;i<todo.length;i++)
        {
            console.log(i,todo[i]);
        }
    }else if(req=="delete")
    {
        let idx=prompt("enter your idx")
        todo.splice(idx,1);
        console.log("task deleted succesfully")
    }
    else{
        console.log("wrong request");
    }

    req=prompt("enter your next task to perform");
}