const stoneRef = document.querySelector("#stone");
const scissors = document.querySelector("#scissors");
const paperRef = document.querySelector("#paper");


const options = ["stone", "scissors", "paper"];

let player = 0;
let computer = 0;


function getRandomElement(arr) {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

