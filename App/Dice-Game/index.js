let player1;
let player2;

////Intro page////

document.getElementById("start-app-btn").addEventListener("click", function () {
  player1 = document.getElementById("entered-player-1").value; /// Get Player 1 Name
  player2 = document.getElementById("entered-player-2").value; /// Get Player 2 Name

  if (player1.trim().length === 0 || player2.trim().length === 0) {
    document.getElementById("error").style.display = 'block'; ////Error text////
  } else {
    document.getElementById("start").classList.add("start-page-hide"); ////Hide First Page////
  }

  document.getElementById("player-name-1").innerText = player1; /// Inner Player 1 Name
  document.getElementById("player-name-2").innerText = player2; /// Inner Player 2 Name
});

////Game page////

let playerOneScore = 0;
let playerTwoScore = 0;
let round = 0;

document.getElementById("start-game-btn").addEventListener("click", function () {

    round = round + 1; ///Manage round

    ///Dice animation
    document.getElementById("dice-image1").classList.add("rotate-center");

    setTimeout(function () {
      document.getElementById("dice-image1").classList.remove("rotate-center");
    }, 600);

    document.getElementById("dice-image2").classList.add("rotate-center");

    setTimeout(function () {
      document.getElementById("dice-image2").classList.remove("rotate-center");
    }, 600);

    ////Generate random numbers    
    let randomNumber1 = Math.random() * 6 + 1;

    randomNumber1 = Math.floor(randomNumber1);

    let randomNumber2 = Math.random() * 6 + 1;

    randomNumber2 = Math.floor(randomNumber2);

    ////Sync image with random numbers
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    ////Check dice
    if (randomNumber1 > randomNumber2) {
      document.getElementById('players').innerText = "round " + round + " " +  player1 + " Win";

      playerOneScore = playerOneScore + 1; 
      document.getElementById("player-1-score").innerText = "Score: " + playerOneScore + "/10";

    } else if (randomNumber1 < randomNumber2) {
      document.getElementById('players').innerText = "round " + round + " " + player2 + " Win";

      playerTwoScore = playerTwoScore + 1;
      document.getElementById("player-2-score").innerText = "Score: " + playerTwoScore + "/10";

    } else {
      document.getElementById('players').innerText = "round " + round + " Draw!";
    }

    //// Last Page ////

    if(playerOneScore === 10){
      document.getElementById("finish").classList.add("last-page-show");
      document.getElementById("win-player").innerText = player1 + ' win';
    }

    if(playerTwoScore === 10){
      document.getElementById("finish").classList.add("last-page-show");
      document.getElementById("win-player").innerText = player2 + ' win';
    }

  });

  ////Reload the game
  function startAgain(){
    location.reload();
  }
