var powerBtn = document.querySelector("#powerBtn");
var historyBtn = document.querySelector("#historyBtn");
var getScreen = document.querySelector("#screen");
var Calculate = /** @class */ (function () {
    function Calculate(getScreen) {
        this.getScreen = getScreen;
        this.isOn = false;
        this.history = [];
    }
    Calculate.prototype.switchTurnOn = function () {
        this.clearScreen();
        return this.isOn = !this.isOn;
    };
    Calculate.prototype.addition = function (value1, value2) {
        if (!this.isOn) {
            return "Turn ON";
        }
        var result = value1 + value2;
        this.history.push(value1 + " + " + value2 + " = " + result);
        return this.getScreen.textContent = result.toString();
    };
    Calculate.prototype.subtraction = function (value1, value2) {
        if (!this.isOn) {
            return "Turn ON";
        }
        var result = value1 - value2;
        this.history.push(value1 + " - " + value2 + " = " + result);
        return this.getScreen.textContent = result.toString();
    };
    Calculate.prototype.division = function (value1, value2) {
        if (!this.isOn) {
            return "Turn ON";
        }
        if (value2 === 0) {
            return "Division by zero";
        }
        var result = value1 / value2;
        this.history.push(value1 + " / " + value2 + " = " + result);
        return this.getScreen.textContent = result.toString();
    };
    Calculate.prototype.multiplication = function (value1, value2) {
        if (!this.isOn) {
            return "Turn ON";
        }
        var result = value1 * value2;
        this.history.push(value1 + " * " + value2 + " = " + result);
        this.getScreen.textContent = result.toString();
    };
    Calculate.prototype.clearScreen = function () {
        this.getScreen.textContent = '';
    };
    Calculate.prototype.getHistory = function () {
        this.clearScreen();
        if (!this.isOn) {
            return "Turn ON";
        }
        if (!this.history.length) {
            return 'No history';
        }
        var reversedHistory = this.history.slice(0).reverse();
        for (var i = 0; i <= Math.min(5, reversedHistory.length) - 1; i++) {
            var value = reversedHistory[i];
            var row = document.createElement('span');
            row.textContent = value;
            this.getScreen.append(row);
        }
    };
    return Calculate;
}());
var calculate = new Calculate(getScreen);
powerBtn.addEventListener("click", function () {
    if (calculate.isOn) {
        powerBtn.textContent = "Turn ON";
    }
    else {
        powerBtn.textContent = "Turn OFF";
    }
    calculate.switchTurnOn();
});
historyBtn.addEventListener("click", function () {
    calculate.getHistory();
});
document.querySelectorAll('.operator').forEach(function (value) {
    value.addEventListener('click', function (e) {
        var value1 = parseInt(document.querySelector("#value1").value);
        var value2 = parseInt(document.querySelector("#value2").value);
        var operator = e.target.name;
        switch (operator) {
            case '+':
                calculate.addition(value1, value2);
                break;
            case '-':
                calculate.subtraction(value1, value2);
                break;
            case '*':
                calculate.multiplication(value1, value2);
                break;
            case '/':
                calculate.division(value1, value2);
                break;
            default:
                console.log('Operator not known');
                break;
        }
    });
});
function simulationApi(callback) {
    console.log('appel initial');
    setTimeout(function () {
        var resultat = 10;
        callback(resultat);
        console.log('ca lag');
    }, 2000);
}
simulationApi(function (resultat) {
    console.log('retour', resultat);
});
