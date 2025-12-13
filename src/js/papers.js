const stoneRef = document.querySelector("#stone");
const scissors = document.querySelector("#scissors");
const paperRef = document.querySelector("#paper");

const resultText = document.querySelector(".paper__win");
const computerScoreEl = document.querySelector(".paper__score p:nth-child(2)");
const playerScoreEl = document.querySelector(".paper__score p:nth-child(3)");
const computerButton = document.querySelector(".paper__button");

const options = ["stone", "scissors", "paper"];

let player = 0;
let computer = 0;

// Рандом вибір комп’ютера
function getRandomElement(arr) {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

// Перевірка хто виграв
function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "draw";

  if (
    (playerChoice === "stone" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "stone")
  ) {
    return "player";
  }

  return "computer";
}

// Одна функція для всіх трьох кнопок
function play(playerChoice) {
  const computerChoice = getRandomElement(options);

  const winner = getWinner(playerChoice, computerChoice);

  if (winner === "player") player++;
  if (winner === "computer") computer++;

  // Оновлення рахунку
  computerScoreEl.textContent = `Комп’ютер - ${computer}`;
  playerScoreEl.textContent = `Ви - ${player}`;

  // Результат
  if (winner === "draw") {
    resultText.textContent = "Нічия!";
  } else if (winner === "player") {
    resultText.textContent = "Ви виграли раунд!";
  } else {
    resultText.textContent = "Комп’ютер виграв раунд!";
  }

  // Показати що вибрав комп’ютер
  computerButton.textContent = `Комп’ютер обрав: ${computerChoice}`;
}

// Кліки
stoneRef.addEventListener("click", () => play("stone"));
scissors.addEventListener("click", () => play("scissors"));
paperRef.addEventListener("click", () => play("paper"));
