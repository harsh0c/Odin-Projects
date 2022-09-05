let comp=0,player=0;

const result=document.getElementsByClassName('result');

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
        result[0].innerHTML="TIE";
        result[1].innerHTML=`Score: ${player} - ${comp}`;
    }
    else if(playerselection=="rock"&&computerSelection=="paper"){
        result[0].innerHTML="You lose"
        console.log("You Lose! Paper beats Rock");
        comp++;
        result[1].innerHTML=`Score: ${player} - ${comp}`;
    }
    else if(playerselection=="rock"&&computerSelection=="scissors"){
        result[0].innerHTML="You win"
        console.log("You Win! rock beats scissors");
        player++;
        result[1].innerHTML=`Score: ${player} - ${comp}`;
    }
    else if(playerselection=="paper"&&computerSelection=="scissors"){
        result[0].innerHTML="You lose"
        console.log("You Lose! scissors beats paper");
        comp++;
        result[1].innerHTML=`Score: ${player} - ${comp}`;
    }
    else if(playerselection=="paper"&&computerSelection=="rock"){
        result[0].innerHTML="You win"
        console.log("You Win! Paper beats Rock");
        player++;
        result[1].innerHTML=`Score: ${player} - ${comp}`;
    }
    else if(playerselection=="scissors"&&computerSelection=="rock"){
        result[0].innerHTML="You lose"
        console.log("You Lose! rock beats scissors");
        comp++;
        result[1].innerHTML=`Score: ${player} - ${comp}`;
    }
    else if(playerselection=="scissors"&&computerSelection=="paper"){
        result[0].innerHTML = "<p>Your Choice: scissors</p><p>Computer's choice: paper.</p><p>You win</p>";
        //console.log("You Win! scissors beats paper");
        player++;
        result[1].innerHTML=`Score: ${player} - ${comp}`;
    }
}

function end(){
    
    if(comp==5){
        result[0].innerHTML='Computer Wins!';
    }
    else{
        result[0].innerHTML='You Win this game against computer';
    }
    comp=0;
    player=0;
    result[1].innerHTML='';
}
const elem1=document.getElementById('rock');
const elem2=document.getElementById('paper');
const elem3=document.getElementById('sci');

function game(){
    elem1.addEventListener("click",function(){
        const computerSelection = getComputerChoice();
        playRound("rock",computerSelection);
        if(comp>=5||player>=5){
            end();
        }
    });
    
    elem2.addEventListener("click",function(){
        const computerSelection = getComputerChoice();
        playRound("paper",computerSelection);
        if(comp>=5||player>=5){
            end();
        }
    });
    
    elem3.addEventListener("click",function(){
        const computerSelection = getComputerChoice();
        playRound("scissors",computerSelection);
        if(comp>=5||player>=5){
            end();
        }
    });
}

game();