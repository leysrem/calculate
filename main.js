const powerBtn = document.querySelector("#powerBtn");
const historyBtn = document.querySelector("#historyBtn");
const screen = document.getElementById("screen");

class Calculate {
    constructor() {
        this.isOn = false
        this.history = []
    }

    switchTurnOn() {
        this.isOn = !this.isOn
    }

    addition(value1, value2) {
        if (!this.isOn) {
            return "Turn ON"
        }
        const result = value1 + value2;
        this.history.push(value1 + " + " + value2 + " = " + result);
        return value1 + value2
    }

    subtraction(value1, value2) {
        if (!this.isOn) {
            return "Turn ON"
        }
        const result = value1 - value2;
        this.history.push(value1 + " - " + value2 + " = " + result);
        return value1 - value2;

    }

    division(value1, value2) {
        if (!this.isOn) {
            return "Turn ON"
        }
        const result = value1 / value2;
        this.history.push(value1 + " / " + value2 + " = " + result);
        return value1 / value2;
    }

    multiplication(value1, value2) {
        if (!this.isOn) {
            return "Turn ON"
        }
        const result = value1 * value2;
        this.history.push(value1 + " * " + value2 + " = " + result);
        return value1 * value2;
    }

    clearScreen() {
        screen.value = ''
    }

    getHistory() {
        if (!this.isOn) {
            return "Turn ON"
        }
        if (!this.history.length) {
            return 'No history'
        }

        let output = '';
        const reversedHistory = this.history.reverse()

        for (let i = 0; i <= Math.min(5, reversedHistory.length) - 1; i++) {
            output += "| " + reversedHistory[i] + " |";
        }
        return output;
    }
}

const calculate = new Calculate();

powerBtn.addEventListener("click", function () {
    if (calculate.isOn) {
        powerBtn.textContent = "Turn ON"
    } else {
        powerBtn.textContent = "Turn OFF"
    }
    calculate.clearScreen()
    calculate.switchTurnOn()
});

historyBtn.addEventListener("click", e => {
    screen.value = calculate.getHistory();
});

document.querySelectorAll('.operator').forEach(value => {
    value.addEventListener('click', e => {

        const value1 = parseInt(document.querySelector("#value1").value);
        const value2 = parseInt(document.querySelector("#value2").value);

        const operator = e.target.name

        let result

        switch (operator) {
            case '+':
                result = calculate.addition(value1, value2)
                break
            case '-':
                result = calculate.subtraction(value1, value2)
                break
            case '*':
                result = calculate.multiplication(value1, value2)
                break
            case '/':
                result = calculate.division(value1, value2)
                break
            default:
                throw Error('Operator not known')
        }
        screen.value = result;
    })
})