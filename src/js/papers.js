const stoneRef = document.querySelector("#stone")
const scissors = document.querySelector("#scissors")
const paperRef = document.querySelector("#paper")

const paper = ["stone", "scissors", "paper"]

let player = 0;
let computer = 0;

stoneRef.addEventListener("click", (event)=>{
playerChoice = "stone"
const computerChoice = getRandomElement(paper)
})

scissors.addEventListener("click", (event)=>{
playerChoice =  "scissors" 
const computerChoice = getRandomElement(paper)
})

paperRef.addEventListener("click", (event)=>{
playerChoice = "paper"
const computerChoice = getRandomElement(paper)
})


function getRandomElement(arr){
const randomIndex = Math.floor(Math.random() * arr.length)
return arr[randomIndex]
}





