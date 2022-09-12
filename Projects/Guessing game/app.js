const msg = "Welcome! Enter your max number:";

let input = null;
let guessInput = null;
let guessNum = null;
let attempts = 1;
let hint = "";

while(!input){
    input = parseInt(prompt(msg));
}

// console.log(`Max number is ${input}`)

const hiddenNumber = Math.round(Math.random() * input);

guessInput = prompt("Enter your first guess:");
guessNum = parseInt(guessInput);

while(guessNum !== hiddenNumber){
    if(guess === 'q'){
        break;
    }
    else if(guessNum > hiddenNumber){
        hint = "Too high!"
    }
    else if(guessNum < hiddenNumber){
        hint = "Too low!"
    }

    guess = prompt(`${hint} Enter a new guess:`);
    guessNum = parseInt(guess);
    attempts++;
}

console.log("You got it!")
console.log(`Hidden number was ${hiddenNumber}. It takes you ${attempts} attempts`)

// console.log(`Hidden number is ${hiddenNumber}`)


