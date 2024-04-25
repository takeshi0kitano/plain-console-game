console.log("Hello world")
function getComputerChoice(){
    r = Math.random();
    if (r<1/3){
        return "rock";
    } else if(1/3 <= r && r < 2/3){
        return "paper";  
    } else {
        return "scissors";
    }
}
function getHumanChoice(){
    prompt("Show your choice");
}