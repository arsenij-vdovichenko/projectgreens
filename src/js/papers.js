const stoneRef = document.querySelector("#stone");
const scissors = document.querySelector("#scissors");
const paperRef = document.querySelector("#paper");


const resultText = document.querySelector(".paper__win");
const computerText = document.querySelector('[data-score="computer"]');
const playerText = document.querySelector('[data-score="player"]');


const options = ["stone", "scissors", "paper"];

let player = 0;
let computer = 0;


function getRandomElement(arr) {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

function playRound(playerChoice){

  const compputerChoice = getRandomElement(options)

  if(playerChoice === compputerChoice){
    resultText.textContent = "Нічія";
  }

  const playerWin = 
  (playerChoice === "stone")
  (playerChoice === "scissors")
  (playerChoice === "paper")
}