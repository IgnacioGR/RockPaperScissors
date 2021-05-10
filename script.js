function computerPlay (){
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function playerPlay () {
    let options = ["rock", "paper", "scissors"];
    let index = -1;

    do {
        let player = prompt("Rock, Paper or Scissors?").toLowerCase();
        
        for (var i = 0; i < options.length; i++) {
            if (options[i] === player) {
            index = i;
            break;
            }
        }   
        if (index === 0) {
            return options[index]
        } 
        if (index === 1) {
            return options[index]
        }
        if (index === 2) {
            return options[index]
        }
        else {
            alert("Please, chose Rock, Paper or Scissors");
            playerPlay();
        }
    }
    while (index === -1);
}

function round() {
    let result = 0;
    let player = playerPlay();
    console.log("You: " + player);
    let computer = computerPlay();
    console.log("Computer: " + computer);
    if (player === computer){
        result = "It's a draw";
    }
    if ((player === "rock") & (computer === "scissors") || (player === "paper") & (computer === "rock") || (player === "scissors") & (computer === "paper")){
        result = "You win";
    }
    if ((player === "rock") & (computer === "paper") || (player === "paper") & (computer === "scissors") || (player === "scissors") & (computer === "rock")){
        result = "You lose";
    }
    return result;
}

function game(){
    let i;
    let scorePlayer = 0;
    let scoreComputer = 0;
    let result;
    let draws = 0;

    for (i = 0; i < 5; i++) {
        result = round();
        console.log("-" + result);

        if (result === "You win"){
            scorePlayer += 1;
        }
        if (result === "You lose"){
            scoreComputer +=1;
        }
        if (result === "It's a draw"){
            draws +=1;
        }
    }   
    console.log("Your Score: "+ scorePlayer);
    console.log("Computer Score: "+ scoreComputer);
    console.log("There has been " + draws + " draws")

    if (scoreComputer === scorePlayer){
        return "Even at the end is a draw..."
    }
    if (scoreComputer << scorePlayer){
        return "You have won."
    }
    if (scoreComputer >> scorePlayer){
        return "You have lost."
    }
}


console.log(game());