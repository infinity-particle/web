const msg = "Welcome! Enter your max number:";

let input = null;
let guess = null;
let attempts = 1;

while(!input){
    input = parseInt(prompt(msg));
}

// console.log(`Max number is ${input}`)

const hiddenNumber = Math.round(Math.random() * input);

guess = parseInt(prompt("Enter your first guess:"))

while(guess !== hiddenNumber){
    let hint = "";
    if(guess > hiddenNumber){
        hint = "Too high!"
    }
    else if(guess < hiddenNumber){
        hint = "Too low!"
    }

    guess = parseInt(prompt(`${hint} Enter a new guess:`))
    attempts++;
}

console.log("You got it!")
console.log(`Hidden number was ${hiddenNumber}. It takes you ${attempts} attempts`)

// console.log(`Hidden number is ${hiddenNumber}`)


