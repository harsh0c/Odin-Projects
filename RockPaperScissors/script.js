function getComputerChoice(){
    let ch=Math.floor(Math.random()*3);
    if(ch==0){             // 0-rock , 1-paper , 2-scissor.
        return "rock"
    }
    else if(ch==1){
        return "paper"
    }
    else{
        return "scissors"
    }
}
function playRound(playerselection,computerSelection){
    if(playerselection==computerSelection){
        console.log("TIE");
        return 0;
    }
    else if(playerselection=="rock"&&computerSelection=="paper"){
        console.log("You Lose! Paper beats Rock");
        return 0;
    }
    else if(playerselection=="rock"&&computerSelection=="scissors"){
        console.log("You Win! rock beats scissors");
        return 1;
    }
    else if(playerselection=="paper"&&computerSelection=="scissors"){
        console.log("You Lose! scissors beats paper");
        return 0;
    }
    else if(playerselection=="paper"&&computerSelection=="rock"){
        console.log("You Win! Paper beats Rock");
        return 1;
    }
    else if(playerselection=="scissors"&&computerSelection=="rock"){
        console.log("You Lose! rock beats scissors");
        return 0;
    }
    else if(playerselection=="scissors"&&computerSelection=="paper"){
        console.log("You Win! scissors beats paper");
        return 1;
    }
}
game();
function game(){
    let count=0;
    
    for(let i=1;i<=3;i++){
        let playerSelection=prompt("Enter your choice");
        const computerSelection = getComputerChoice();
        let r=playRound(playerSelection,computerSelection);
        if(r==1){
            count++;
        }
    }
    if(count>1){
        console.log("You win")
    }
    else{
        console.log("You lose")
    }
}