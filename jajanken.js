
function getComputerChoice(){
    let jajanken=Math.floor(Math.random()*3)

    if (jajanken === 0){
        return "rock"
    }else if (jajanken ===1){
        return "paper"
    }else{
        return "scissors"
    }

}

function getHumanChoice(){
    let choice =prompt().toLocaleLowerCase();
    return choice
}

function playGame(){
    let humanScore = 0;
    let computerScore= 0;

    function playRound(humanChoice,computerChoice){
    
    console.log(humanChoice)
    console.log(computerChoice)
    
    if (humanChoice  === "rock" && computerChoice == "scissors"){
        humanScore++
        return console.log("Human Wins!")
    }else if (humanChoice  === "paper" && computerChoice == "rock"){
        humanScore++
        return console.log("Human Wins!")
    }else if (humanChoice  === "scissors" && computerChoice == "paper"){
        humanScore++
        return console.log("Human Wins!")
    }else if(humanChoice=== computerChoice){
        return console.log("Tie")
    }
    else{
        computerScore++
        return console.log("Clanker Wins")
    }

}
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(humanScore);
    console.log(computerScore);
}

playGame();




