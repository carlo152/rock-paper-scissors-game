
function getComputerChoice() {
let computerChoice =  Math.floor(Math.random() * 3) + 1;

if (computerChoice == 1) {
    console.log("Rock"); 
 } else if (computerChoice == 2) {
    console.log("Paper");
 } else {
    console.log("Scissors");
 }
   
return computerChoice;  
}



function getHumanChoice()  {
    let humanChoice = prompt("Write a number: \n1. Rock \n2. Paper \n3. Scissors");

    if (humanChoice == 1) {
        console.log("Rock");
    } else if (humanChoice == 2 ) {
        console.log("Paper"); 
    } else if (humanChoice == 3) {
        console.log("Scissors");
    } else {
        console.log("Error");
    }
    

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice) {
    if ((humanChoice == 1) & (computerChoice == 1)){
        console.log("Play again!");
    } else if ((humanChoice == 1) & (computerChoice == 2)) {
        console.log("You lose! Paper beats Rock");
        computerScore++;
        console.log("Computer Score = " + computerScore);
    } else if ((humanChoice == 1) & (computerChoice == 3)) {
        console.log("You win! Rock beats Scissors");
        humanScore++;
        console.log("Your Score = " + humanScore);
    } else if ((humanChoice == 2) & (computerChoice == 2)){
        console.log("Play again!");
    } else if ((humanChoice == 2) & (computerChoice == 1)) {
        console.log("You win! Paper beats Rock");
        humanScore++;
        console.log("Your Score = " + humanScore);
    } else if ((humanChoice == 2) & (computerChoice == 3)) {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
        console.log("Computer Score = " + computerScore);
    } else if ((humanChoice == 3) & (computerChoice == 3)){
        console.log("Play again!");
    } else if ((humanChoice == 3) & (computerChoice == 1)) {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
        console.log("Computer Score = " + computerScore);
    } else if ((humanChoice == 3) & (computerChoice == 2)) {
        console.log("You win! Scissors beats Paper");
        humanScore++;
        console.log("Your Score = " + humanScore);
    } else {
        console.log("Error");
    }
}


function playGame() {
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

}

for (let i = 0; i < 5; i++) {
    playGame();
    
}

let humanWin = humanScore;
    let computerWin = computerScore;

    if (humanWin > computerWin) {
    console.log("You are the winner");
} else {
    console.log("Computer is the winner");

}
