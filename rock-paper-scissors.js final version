let random = "";
let yourMove = "";
let computerMove = "";
const results = {
  wins: 0,
  ties: 0,
  losses: 0,
};
getFromStorage();
function computergame() {
  random = Math.random();
  if (random >= 0 && random < 1 / 3) {
    computerMove = "Rock";
    result();
  } else if (random >= 1 / 3 && random < 2 / 3) {
    computerMove = "Paper";
    result();
  } else if (random >= 2 / 3 && random < 1) {
    computerMove = "Scissors";
    result();
  }
}
function getFromStorage() {
  if (localStorage.getItem("results")) {
    const savedResults = JSON.parse(localStorage.getItem("results"));
    results.wins = savedResults.wins;
    results.losses = savedResults.losses;
    results.ties = savedResults.ties;
  }
}
function result() {
  if (
    (computerMove == "Rock" && yourMove == "Paper") ||
    (computerMove == "Paper" && yourMove == "Scissors") ||
    (computerMove == "Scissors" && yourMove == "Rock")
  ) {
    results.wins++;
    document.querySelector(
      ".js-results"
    ).innerHTML = `<h2 class="result-text" style="font-size:1.8rem;">You Win</h2>
<p class="result-text">you chose <img src="${yourMove}-emoji.png"> computer chose <img src="${computerMove}-emoji.png"></p>
<p class="result-text">Wins:${results.wins} Losses:${results.losses} Ties:${results.ties} </p>`;
  }
  if (
    (computerMove == "Rock" && yourMove == "Scissors") ||
    (computerMove == "Paper" && yourMove == "Rock") ||
    (computerMove == "Scissors" && yourMove == "Paper")
  ) {
    results.losses++;
    document.querySelector(
      ".js-results"
    ).innerHTML = `<h2 class="result-text" style="font-size:1.8rem;">You Lose</h2>
<p class="result-text">you chose <img src="${yourMove}-emoji.png"> computer chose <img src="${computerMove}-emoji.png"></p>
<p class="result-text">Wins:${results.wins} Losses:${results.losses} Ties:${results.ties} </p>`;
  }
  if (computerMove == yourMove) {
    results.ties++;
    document.querySelector(
      ".js-results"
    ).innerHTML = `<h2 class="result-text" style="font-size:1.8rem;">Tie</h2>
<p class="result-text">you chose <img src="${yourMove}-emoji.png"> computer chose <img src="${computerMove}-emoji.png"></p>
<p class="result-text">Wins:${results.wins} Losses:${results.losses} Ties:${results.ties} </p>`;
  }

  localStorage.setItem("results", JSON.stringify(results));
}
function resetScore() {
  results.wins = 0;
  results.losses = 0;
  results.ties = 0;

  localStorage.setItem("results", JSON.stringify(results));
  document.querySelector(
    ".js-results"
  ).innerHTML = `<p class="result-text">Wins:${results.wins} Losses:${results.losses} Ties:${results.ties} </p>`;
}

document.querySelector(".js-Rock").addEventListener("click", () => {
  yourMove = "Rock";
  computergame();
});
document.querySelector(".js-Paper").addEventListener("click", () => {
  yourMove = "Paper";
  computergame();
});
document.querySelector(".js-Scissors").addEventListener("click", () => {
  yourMove = "Scissors";
  computergame();
});
document.querySelector(".js-reset").addEventListener("click", () => {
  document.querySelector(
    ".js-resetdiv"
  ).innerHTML = `<p class="result-text">Are you sure you want to reset the score?</p>
            <button class="js-yes button">Yes</button>
            <button class="js-no button">No</button> `;

  document.querySelector(".js-yes").addEventListener("click", () => {
    document.querySelector(".js-resetdiv").innerHTML = "";
    resetScore();
  });
  document.querySelector(".js-no").addEventListener("click", () => {
    document.querySelector(".js-resetdiv").innerHTML = "";
  });
});
