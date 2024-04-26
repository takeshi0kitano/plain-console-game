import * as underscore from "underscore";
function getComputerChoice(){
    let r = underscore.random(1,100)/100;
    if (r<1/3){
        return "rock".toUpperCase();
    } else if(1/3 <= r && r < 2/3){
        return "paper".toUpperCase();  
    } else {
        return "scissors".toUpperCase();
    }
}
function getHumanChoice(){
    let p = prompt("Give your choice").toUpperCase();
    if (p === "ROCK" || p === "PAPER" || p === "SCISSORS"){
        return p;
    } else {
        return undefined;
    }
}
function playRound(humanChoice, computerChoice){
    let tuple = [humanChoice, computerChoice];
    //true mean that human win
    let win = (tuple) => {
        console.log(`You Win! ${tuple[0]} beats ${tuple[1]}`);
        humanScore++;
    };
    let lose = (tuple) => {
        console.log(`You Lose! ${tuple[1]} beats ${tuple[0]}`);
        computerScore++;
    };
    let draw = () => {
        console.log(`I offer a draw`);
    };
    if (underscore.isEqual(tuple,["ROCK", "SCISSORS"])){
        win(tuple);
    }
    if (underscore.isEqual(tuple,["SCISSORS", "ROCK"])){
        lose(tuple);
    }
    if (underscore.isEqual(tuple,["SCISSORS", "PAPER"])){
        win(tuple);
    }
    if (underscore.isEqual(tuple, ["PAPER", "SCISSORS"])){
        lose(tuple);
    }
    if (underscore.isEqual(tuple,["PAPER", "ROCK"])){
        win(tuple);
    }
    if (underscore.isEqual(tuple, ["ROCK", "PAPER"])){
        lose(tuple);
    }
    if (underscore.isEqual(tuple, ["ROCK", "ROCK"])){
        draw();
    }
    if (underscore.isEqual(tuple, ["PAPER", "PAPER"])){
        draw();
    }
    if (underscore.isEqual(tuple, ["SCISSORS", "SCISSORS"])){
        draw();
    }
}
let humanScore = 0, computerScore = 0;
for (let i=0; i<5; i++){
    playRound(getHumanChoice(),getComputerChoice());
}
if(humanScore > computerScore){
    console.log(`Finaly you win!!! Your score = ${humanScore}, score of computer = ${computerScore}`);

} else if (humanScore < computerScore){
    console.log(`Finaly you Lose!!! Your score = ${humanScore}, score of computer = ${computerScore}`);
} else if (humanScore = computerScore){
    console.log(`I offer draw!!! Your score = ${humanScore}, score of computer = ${computerScore}`);
}

