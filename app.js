let ps = 0;
let cs = 0;
let result = document.createElement("p");
let playerScore = document.createElement("h1");
let computerScore = document.createElement("h1");

function computerPlay() {
  let compChoice = Math.floor(Math.random() * 3);
  return checkChoice(compChoice);
}

function checkChoice(num) {
  if (num == 0) {
    return "rock";
  } else if (num == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(play, comp) {
  if (play == "rock") {
    if (comp == "paper") {
      cs = cs + 1;
      return "You lose.  Paper covers rock.";
    } else if (comp == "scissors") {
      ps = ps + 1;
      return "You win!  Rock smashes scissors.";
    } else {
      return "It's a draw!";
    }
  } else if (play == "paper") {
    if (comp == "rock") {
      ps = ps + 1;
      return "You win!  Paper covers rock.";
    } else if (comp == "scissors") {
      cs = cs + 1;
      return "You lose.  Scissors cut paper.";
    } else {
      return "It's a draw!";
    }
  } else {
    if (comp == "rock") {
      cs = cs + 1;
      return "You lose.  Rock smashes scissors.";
    } else if (comp == "paper") {
      ps = ps + 1;
      return "You win.  Scissors cut paper.";
    } else {
      return "It's a draw!";
    }
  }
}

function game(choice) {
  let message = "";
  let computerSelection = computerPlay();
  
  message = `You chose ${choice}.\n
  The computer chose ${computerSelection}.\n
  ${playRound(choice, computerSelection)}`;

  if (cs > 4 || ps > 4) {
    message = "Game Over";
    Array.from(document.querySelectorAll(".choice")).forEach((button) => {
      button.className += "hidden";
      button.textContent = "";
    });
  }
  result.textContent = message;
  playerScore.textContent = ps;
  computerScore.textContent = cs;
}

document.getElementById("results").appendChild(result);
document.getElementById("player-score").appendChild(playerScore);
document.getElementById("computer-score").appendChild(computerScore);

Array.from(document.querySelectorAll(".choice")).forEach((button) => {
  button.addEventListener("click", (choice) => game(choice.target.id));
});
