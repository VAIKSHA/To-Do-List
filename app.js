let todo = [];

let req = prompt("Please Enter your request");

while(true){
    if(req == "quit"){
        console.log("Quiting the app");
        break;
    }

    if(req == "list"){
        console.log("----------------");
        for(task of todo){
            console.log(task);
        }
        console.log("----------------");
    }
    else if(req == "add"){
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    }
    req = prompt("Please Enter your request");
}