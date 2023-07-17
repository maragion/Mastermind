export class Game {
    constructor() {
        this.secretNumber = this.makeSecretNumber();
        this.guess = 0;
        this.result = {
            cows: 0,
            bulls: 0
        };
        this.message = "";
    }

    makeSecretNumber() {
        let secretNumber = "";
        for (let i = 0; i < 4; i++) {
            let randomNumber = Math.floor(Math.random() * 10).toString();

            if (randomNumber === "0" && i === 0) {
                i -= 1;
            } else if (secretNumber.includes(randomNumber)) {
                i -= 1;
            } else secretNumber += randomNumber;
        }
        return secretNumber
    }

    validateUserInput() {
        let userNumber = document.getElementById("numberInput").value;

        if (userNumber.length > 4 || userNumber.length < 4) {
            this.message = `<div class="game-error-message game-message">Число должно состоять из четырёх символов!</div>`
        } else if (!(Number.isInteger(Number(userNumber))) || userNumber.includes("e")) {
            this.message = `<div class="game-error-message game-message">Ввод должен состоять только из цифр!</div>`
        } else if (userNumber[0] === "0") {
            this.message = `<div class="game-error-message game-message">Число не должно начинаться с нуля!</div>`
        } else if (new Set(userNumber).size !== userNumber.length) {
            this.message = `<div class="game-error-message game-message">Цифры не должны повторяться!</div>`
        } else return true
    }

    countBullsAndCows() {
        if (!this.validateUserInput()) {
            return
        }
        let result = {
            cows: 0,
            bulls: 0
        }
        const secretNumber = this.secretNumber;
        let userNumber = document.getElementById("numberInput").value;

        for (let i = 0; i < secretNumber.length; i++) {
            if (userNumber[i] === secretNumber[i]) {
                result.bulls += 1;
            } else if (secretNumber.includes(userNumber[i])) {
                result.cows += 1;
            }
        }
        this.guess += 1;
        this.result = result;
        this.message = `<div class="game-message">Вы ввели: ${userNumber} <br>Коровы: ${this.result.cows}, Быки: ${this.result.bulls}</div>`;
    }

    checkWin() {
        if (this.result.bulls === 4) {
            this.message = (`<div class="game-win-message game-message">Вы Победили!!! Количество попыток: ${this.guess}</div>`);
            repeatButton.style.display = "block";
            checkButton.style.display = "none";
        } return true
    }

    sendMessage() {
        const messageLog = document.getElementById("game-log");
        const guessLog = document.getElementById("counter");
        messageLog.innerHTML += this.message;
        messageLog.scrollTop = messageLog.scrollHeight;
        guessLog.innerHTML = this.guess;
    }
    step() {
        this.countBullsAndCows();
        this.checkWin();
        this.sendMessage();
    }
}
