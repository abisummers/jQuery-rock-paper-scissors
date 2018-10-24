var playerSelection = $(".player-content > .selection");

rockClick = () => {
  playerSelection.removeClass("paper scissors");
  playerSelection.addClass("rock");
};

paperClick = () => {
  playerSelection.removeClass("rock scissors");
  playerSelection.addClass("paper");
};

scissorsClick = () => {
  playerSelection.removeClass("rock paper");
  playerSelection.addClass("scissors");
};

$(".rock-btn").click(() => {
  rockClick();
});

$(".paper-btn").click(() => {
  paperClick();
});

$(".scissors-btn").click(() => {
  scissorsClick();
});

var oppoenetSelection = $(".oppoent-content > .selection");

sumbitSelection = () => {
  if ($(".game-end").hasClass("showing")) {
    return;
  }

  var options = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * options.length);
  var selection = options[randomIndex];

  oppoenetSelection.addClass(selection);
  $(".submit-btn").hide();

  updateWinner();
  $(".game-end").addClass("showing");
};

$(".submit-btn").click(() => {
  sumbitSelection();
});

$(document).keydown(e => {
  switch (e.keyCode) {
    case 82:
      rockClick();
      break;

    case 80:
      paperClick();
      break;

    case 83:
      scissorsClick();
      break;

    case 13:
      sumbitSelection();
      break;

    case 27:
      resetGame();
      break;
  }
});

updateWinner = () => {
  if (playerSelection.hasClass("rock")) {
    if (oppoenetSelection.hasClass("scissors")) {
      $(".popup-content h2").html("you Win");
    }
    if (oppoenetSelection.hasClass("paper")) {
      $(".popup-content h2").html("you lose");
    }
    if (oppoenetSelection.hasClass("rock")) {
      $(".popup-content h2").html("it's a draw");
    }
  } else if (playerSelection.hasClass("paper")) {
    if (oppoenetSelection.hasClass("scissors")) {
      $(".popup-content h2").html("you lose");
    }
    if (oppoenetSelection.hasClass("paper")) {
      $(".popup-content h2").html("you it's a draw");
    }
    if (oppoenetSelection.hasClass("rock")) {
      $(".popup-content h2").html("you win");
    }
  } else if (playerSelection.hasClass("scissors")) {
    if (oppoenetSelection.hasClass("scissors")) {
      $(".popup-content h2").html("it's a draw");
    }
    if (oppoenetSelection.hasClass("paper")) {
      $(".popup-content h2").html("you win!");
    }

    if (oppoenetSelection.hasClass("rock")) {
      $(".popu-content h2").html("you lose");
    }
  }
};

resetGame = () => {
  playerSelection.removeClass("rock paper scissors");
  oppoenetSelection.removeClass("rock paper scissors");

  $(".game-end").removeClass("showing");
  $(".submit-btn").show();
};

$(".restart").click(() => {
  resetGame();
});
