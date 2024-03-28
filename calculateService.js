const resultInput = document.querySelector("#result");

const addition = (value1, value2) => {
    resultInput.value = value1 + value2
}
const subtraction = (value1, value2) => {
    resultInput.value = value1 - value2
}
const multiplication = (value1, value2) => {
    resultInput.value = value1 * value2
}
const division = (value1, value2) => {
    resultInput.value = value1 / value2
}

const onInit = () => {
    // Listen operators on click
    document.querySelectorAll('.operator').forEach(value => {
        value.addEventListener('click', e => {
            const value1 = parseInt(document.querySelector("#value1").value);
            const value2 = parseInt(document.querySelector("#value2").value);

            const operator = e.target.name
            switch (operator) {
                case '+':
                    addition(value1, value2)
                    break
                case '-':
                    subtraction(value1, value2)
                    break
                case '*':
                    multiplication(value1, value2)
                    break
                case '/':
                    division(value1, value2)
                    break
                default:
                    throw Error('Operator not known')
            }
        })

    })
}
onInit()