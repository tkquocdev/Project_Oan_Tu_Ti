const choiceBtns = document.querySelectorAll(".choice-btn");
const PlayerChoiceText = document.querySelector(".Player-choice-text");
const CpuChoiceText = document.querySelector(".CPU-choice-text");

const gameTitle = document.querySelector(".game-title");

const scoreWonText = document.querySelector(".score-won-text");
const scoreDrawText = document.querySelector(".score-draw-text");
const scoreLostText = document.querySelector(".score-lost-text");

let playerResultValue = "";
let cpuResultValue = "";

const choiceEmoji = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️",
};

choiceBtns.forEach((choiceBtn) => {
  choiceBtn.addEventListener("click", () => {
    gameTitle.textContent = "Let's Play!";

    PlayerChoiceText.textContent = "✊";
    CpuChoiceText.textContent = "✊";

    playerResultValue = choiceBtn.value;
    cpuResultValue = getCpuResultValue();

    PlayerChoiceText.classList.add("player-choice-text-anim");
    CpuChoiceText.classList.add("cpu-choice-text-anim");

    setTimeout(() => {
      PlayerChoiceText.textContent = choiceEmoji[playerResultValue];
      CpuChoiceText.textContent = choiceEmoji[cpuResultValue];

      PlayerChoiceText.classList.remove("player-choice-text-anim");
      CpuChoiceText.classList.remove("cpu-choice-text-anim");

      showResultGame();
      choiceBtns.forEach((btn) => {
        btn.style.pointerEvents = "visible";
      });
    }, 2000);
  });
});

function getCpuResultValue() {
  const cpuOptionChoices = ["rock", "paper", "scissors"];
  const cpuRandomChoice =
    cpuOptionChoices[Math.floor(Math.random() * cpuOptionChoices.length)];
  return cpuRandomChoice;
}

function showResultGame() {
  if (playerResultValue == cpuResultValue) {
    gameTitle.textContent = "Hoà!";
    scoreDrawText.textContent++;
  } else if (
    (playerResultValue == "rock" && cpuResultValue == "scissors") ||
    (playerResultValue == "paper" && cpuResultValue == "rock") ||
    (playerResultValue == "scissors" && cpuResultValue == "paper")
  ) {
    gameTitle.textContent = "Bạn Thắng!";
    scoreWonText.textContent++;
  } else {
    gameTitle.textContent = "Bạn Thua!";
    scoreLostText.textContent++;
  }
}
