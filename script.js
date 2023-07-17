import {Game} from "./CowsAndBulls.js";

const rules = document.getElementById("game-rules");
const helpButton = document.getElementById("help-button");
const startButton = document.getElementById("start-button");
const gameField = document.getElementById("game-field");


let params = {
    checkButton: document.getElementById("check-button"),
    repeatButton: document.getElementById("repeat-button"),
    messageLog: document.getElementById("game-log"),
    guessLog: document.getElementById("counter"),
    helpMessage: `<ul>
                    <li>Число состоит из четырёх цифр в формате "1234".</li>
                    <li>Цифры не повторяются.</li>
                    <li>Загаданное число не начинается с нуля.</li>
                    <li>"Корова" - цифра есть в числе, но не на своём месте.</li>
                    <li>"Бык" - цифра есть в числе и стоит на своём месте.</li>
                </ul>`
}

document.getElementById("numberInput")
    .addEventListener("keyup", (event) => {
        event.preventDefault();
        if (event.key === "Enter") {
            document.getElementById("check-button").click();
        }
    });

let game = new Game(params);

gameField.style.display = "none";
helpButton.style.display = "none"

startButton.addEventListener("click", () => {
    rules.style.display = "none";
    gameField.style.display = "flex";
    params.repeatButton.style.display = "none";
    helpButton.style.display = "block"
})

helpButton.addEventListener("click", () => game.help())
params.checkButton.addEventListener("click", () => {
    game.step();
    console.log(game.secretNumber);
})
params.repeatButton.addEventListener("click", () => {
    game = new Game(params);
    params.checkButton.disabled = false;
    params.repeatButton.style.display = "none";
    params.checkButton.style.display = "block";
})

