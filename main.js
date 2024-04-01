const powerBtn = document.querySelector("#powerBtn");
const historyBtn = document.querySelector("#historyBtn");
const screen = document.getElementById("screen");

class Calculate {
    constructor(screen) {
        this.screen = screen
        this.isOn = false
        this.history = []
    }

    switchTurnOn() {
        this.clearScreen()
        this.isOn = !this.isOn
    }

    addition(value1, value2) {
        if (!this.isOn) {
            return "Turn ON"
        }
        const result = value1 + value2;
        this.history.push(value1 + " + " + value2 + " = " + result);
        this.screen.textContent = value1 + value2
    }

    subtraction(value1, value2) {
        if (!this.isOn) {
            return "Turn ON"
        }
        const result = value1 - value2;
        this.history.push(value1 + " - " + value2 + " = " + result);
        this.screen.textContent = value1 - value2

    }

    division(value1, value2) {
        if (!this.isOn) {
            return "Turn ON"
        }
        const result = value1 / value2;
        this.history.push(value1 + " / " + value2 + " = " + result);
        this.screen.textContent = value1 / value2
    }

    multiplication(value1, value2) {
        if (!this.isOn) {
            return "Turn ON"
        }
        const result = value1 * value2;
        this.history.push(value1 + " * " + value2 + " = " + result);
        this.screen.textContent = value1 * value2
    }

    clearScreen() {
        this.screen.textContent = ''
    }

    getHistory() {
        this.clearScreen()

        if (!this.isOn) {
            return "Turn ON"
        }
        if (!this.history.length) {
            return 'No history'
        }

        const reversedHistory = this.history.slice(0).reverse()

        for (let i = 0; i <= Math.min(5, reversedHistory.length) - 1; i++) {
            const value = reversedHistory[i]
            const row = document.createElement('span')
            row.textContent = value
            this.screen.append(row)
        }
    }
}

const calculate = new Calculate(screen);

powerBtn.addEventListener("click", () => {
    if (calculate.isOn) {
        powerBtn.textContent = "Turn ON"
    } else {
        powerBtn.textContent = "Turn OFF"
    }
    calculate.switchTurnOn()
});

historyBtn.addEventListener("click", () => {
    calculate.getHistory();
});

document.querySelectorAll('.operator').forEach(value => {
    value.addEventListener('click', e => {

        const value1 = parseInt(document.querySelector("#value1").value);
        const value2 = parseInt(document.querySelector("#value2").value);

        const operator = e.target.name

        switch (operator) {
            case '+':
                calculate.addition(value1, value2)
                break
            case '-':
                calculate.subtraction(value1, value2)
                break
            case '*':
                calculate.multiplication(value1, value2)
                break
            case '/':
                calculate.division(value1, value2)
                break
            default:
                throw Error('Operator not known')
        }
    })
})