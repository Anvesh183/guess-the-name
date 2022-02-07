"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage("⛔️ No number!");
    document.querySelector(".message").style.animation = "flash";
    document.querySelector(".message").style.animationDuration = "2s";

    // When player wins
  } else if (guess > 20) {
    displayMessage("⚠ Enter Between 1 and 20");
    document.querySelector(".message").style.animation = "shakeX";
    document.querySelector(".message").style.animationDuration = "2s";
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".message").style.animation = "tada";
    document.querySelector(".message").style.animationDuration = "2s";
    document.querySelector("body").style.background = "#58b93b";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? guess - 1 === secretNumber
            ? "Slight High!"
            : "Too High 📈"
          : guess + 1 === secretNumber
          ? "Slight low!"
          : "Too low 📉"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").style.animation = "";
});

///////////////////////////////////////
