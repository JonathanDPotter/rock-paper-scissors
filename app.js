function computerPlay() {
  let compChoice = Math.floor(Math.random() * 3);
  return checkChoice(compChoice);
}

function getSelection() {
  let playChoice = parseInt(
    prompt("1)Rock\n2)Paper\n3)Scissors\nEnter your choice: ")
  );
  if (playChoice < 0 || playChoice > 3) {
    alert("\nInvalid entry, try again.\n");
    console.log("\nInvalid entry, try again.\n");
    getSelection();
  } else {
    return checkChoice(playChoice - 1);
  }
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
      return "You lose.  Paper covers rock.";
    } else if (comp == "scissors") {
      return "You win!  Rock smashes scissors.";
    } else {
      return "It's a draw!";
    }
  } else if (play == "paper") {
    if (comp == "rock") {
      return "You win!  Paper covers rock.";
    } else if (comp == "scissors") {
      return "You lose.  Scissors cut paper.";
    } else {
      return "It's a draw!";
    }
  } else {
    if (comp == "rock") {
      return "You lose.  Rock smashes scissors.";
    } else if (comp == "paper") {
      return "You win.  Scissors cut paper.";
    } else {
      return "It's a draw!";
    }
  }
}
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = getSelection();
    let computerSelection = computerPlay();
    alert(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
