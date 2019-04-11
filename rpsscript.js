var round=1;
var p1score=0;
var c1score=0;
var gameover=0;





    rock.addEventListener('click',function(){
      game("rock");
    });
    paper.addEventListener('click',function(){
      game("paper");
    });
    scissors.addEventListener('click',function(){
      game("scissors");
    });



function computerPlay(){
var comp = ["Rock", "Paper", "Scissors"];

return comp[Math.floor(Math.random() * (3 - 0)) + 0];
}


function game(playerSelection) {

if (gameover===0){
  document.getElementById("round").innerHTML = round;
 var game = "";
   var computerSelection = computerPlay();
    game = playRound(playerSelection, computerSelection);
     switch(game.slice(4,9)){
     case "Win! ":
     round++;
     p1score++;
     document.getElementById("p1score").innerHTML = p1score;
     document.getElementById("message").innerHTML = game;
     break;
     case "Lose!":
     round++;
     c1score++;
     document.getElementById("c1score").innerHTML = c1score;
     document.getElementById("message").innerHTML = game;
     break;
     case "Tied!":
     document.getElementById("message").innerHTML = game;
     break;
   }


  if (p1score === 5){
    document.getElementById("message").innerHTML = "You Win the Set";
    gameover++;
  }
  if (c1score === 5){
    document.getElementById("message").innerHTML = "You Lose the Set";
    gameover++;
  }

}
}


function playRound(playerSelection, computerSelection) {
	//convert to lower case
playerSelection = playerSelection.toLowerCase();
computerSelection = computerSelection.toLowerCase();
var outcome = ["You Win! ", "You Lose! ", "You Tied!"];
var why = ["Paper Beats Rock", "Scissors Beats Paper", "Rock Beats Scissors"];

if (playerSelection == "rock" && computerSelection == "paper"){
return outcome[1] + why[0]; // you lose P>R
} else if (playerSelection == "rock" && computerSelection == "scissors"){
return outcome[0] + why[2]; // you win R>S
} else if (playerSelection == "rock" && computerSelection == "rock"){
return outcome[2]; // you tied
} else if (playerSelection == "paper" && computerSelection == "paper"){
return outcome[2]; // you tied
} else if (playerSelection == "paper" && computerSelection == "scissors"){
return outcome[1] + why[1]; // you lose S>P
} else if (playerSelection == "paper" && computerSelection == "rock"){
return outcome[0] + why[0]; // you win P>R
} else if (playerSelection == "scissors" && computerSelection == "paper"){
return outcome[0] + why[1]; // you win S>P
} else if (playerSelection == "scissors" && computerSelection == "scissors"){
return outcome[2]; // you tied
} else if (playerSelection == "scissors" && computerSelection == "rock"){
return outcome[1] + why[2]; // you lose R>S
} else {
return;
};

};
