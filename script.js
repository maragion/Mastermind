import {Game} from "./CowsAndBulls.js";

const rules = document.getElementById("game-rules");
const gameField = document.getElementById("game-field");
const startButton = document.getElementById("start-button");
const repeatButton = document.getElementById("repeat-button");

gameField.style.display = "none";

let game = new Game();


startButton.addEventListener("click", () => {
    rules.style.display = "none";
    gameField.style.display = "flex";
    repeatButton.style.display = "none";
})


let checkButton = document.getElementById("check-button");
checkButton.addEventListener("click", () => {game.step()})
repeatButton.addEventListener("click", () => {
        game = new Game();
        repeatButton.style.display = "none";
        checkButton.style.display = "block";
    }
)

