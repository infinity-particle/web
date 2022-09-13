const todoList = [];

let action = null;
let newTodo = null;
let isQuit = false;

while(!isQuit){
    action = prompt("What would you like to do?");

    switch(action) {
        case "new":{
            newTodo = prompt("What is the new todo?");
            todoList.push(newTodo);
            console.log(`${newTodo} added to the list`);
        }break;

        case "list":{
            console.log("*****************");
            for(let i = 0; i < todoList.length; i++){
                console.log(`${i}: ${todoList[i]}`);
            }
            console.log("*****************");
        }break;

        case "delete":{
            const index = parseInt(prompt("Enter an index to delete:"));
            if(!Number.isNaN(index)){
                const deleted = todoList.splice(index, 1);
                console.log(`Deleted ${deleted[0]}`);
            }else{
                console.log("Unknown index");
            }
        }break;

        case "quit":{
            isQuit = true;
        }break;
    }
}

console.log("Quit");
