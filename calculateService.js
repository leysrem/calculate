// création de la class Calculatrice
class Calculatrice {
    constructor() {
        this.value1 = value1;
        this.value2 = value2;
        this.isOn = false;
        this.results = [];
    }
    turnOn(isOn) {
        this.isOn = isOn
    }
    addition(value1,value2) {
        if (this.isOn == false) {
            return "Turn ON"
        } else {
            const result = value1 + value2;
            this.results.push(value1 + " + " + value2 + " = " + result);
            return value1 + value2;
        }     
    }
    subtraction(value1,value2) {
        if (this.isOn == false) {
            return "Turn ON"
        } else {
            const result = value1 - value2;
            this.results.push(value1 + " - " + value2 + " = " + result);
            return value1 - value2;
        }     
    }
    division(value1,value2) {
        if (this.isOn == false) {
            return "Turn ON"
        } else {
            const result = value1 / value2;
            this.results.push(value1 + " / " + value2 + " = " + result);
            return value1 / value2;
        }     
    }
    multiplication(value1,value2) {
        if (this.isOn == false) {
            return "Turn ON"
        } else {
            const result = value1 * value2;
            this.results.push(value1 + " * " + value2 + " = " + result);
            return value1 * value2;
        }     
    }
    getHistory(results) {
        let output = '';
    for (let i = this.results.length - 1; i >= Math.max(0, this.results.length - 5); i--) {

        output += "| " + this.results[i] + " |"; 
    }
    console.log(output)
    return output; 
    }
}

const changePower = document.querySelector("#isON");

const calculate = new Calculatrice();

changePower.addEventListener("click", function() {
    if (changePower.textContent === "ON") {
        changePower.textContent = "OFF";
        calculate.turnOn(false);
    } else {
        changePower.textContent = "ON";
        calculate.turnOn(true);
    }  
});

const history = document.querySelector("#history");

history.addEventListener("click", e => {

    document.getElementById("result").value = calculate.getHistory();

});

document.querySelectorAll('.operator').forEach(value => {
    value.addEventListener('click', e => {
        
        const value1 = parseInt(document.querySelector("#value1").value);
        const value2 = parseInt(document.querySelector("#value2").value);

        const operator = e.target.name   

        switch (operator) {
                case '+':
                    result = calculate.addition(value1,value2)
                    break
                case '-':
                    result = calculate.subtraction(value1,value2)
                    break
                case '*':
                    result = calculate.multiplication(value1,value2)
                    break
                case '/':
                    result = calculate.division(value1, value2)
                    break
                default:
                    throw Error('Operator not known')
            }        
        document.getElementById("result").value = result;
    })
})