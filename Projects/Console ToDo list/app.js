const chooseActionMsg = "What would you like to do?";

const actions = ["new", "list", "delete", "quit"];

let action = null;
let todo = null;

while(actions.indexOf(action) == -1){
    action = prompt(chooseActionMsg);
}

console.log(`Your command is ${action}`);
