import {Game} from "./CowsAndBulls.js";

const rules = document.getElementById("game-rules");
const gameField = document.getElementById("game-field");
const startButton = document.getElementById("start-button");


document.getElementById("numberInput")
    .addEventListener("keyup", (event) => {
        event.preventDefault();
        if (event.key === "Enter") {
            document.getElementById("check-button").click();
        }
    });


let params = {
    checkButton: document.getElementById("check-button"),
    repeatButton: document.getElementById("repeat-button"),
}

let game = new Game(params);

gameField.style.display = "none";

startButton.addEventListener("click", () => {
    rules.style.display = "none";
    gameField.style.display = "flex";
    params.repeatButton.style.display = "none";
})


params.checkButton.addEventListener("click", () => {
    game.step();
    console.log(game.secretNumber)
})
params.repeatButton.addEventListener("click", () => {
        game = new Game(params);
        params.checkButton.disabled = false
        params.repeatButton.style.display = "none";
        params.checkButton.style.display = "block";
    }
)

