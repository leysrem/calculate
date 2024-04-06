const powerBtn: HTMLButtonElement = document.querySelector("#powerBtn")
const historyBtn: HTMLButtonElement = document.querySelector("#historyBtn")
const getScreen: HTMLDivElement = document.querySelector("#screen")

class Calculate {
    getScreen: HTMLDivElement
    isOn: boolean
    history: string[]

    constructor(getScreen: HTMLDivElement) {
        this.getScreen = getScreen
        this.isOn = false
        this.history = []
    }

    calculDelay(): Promise<true> {
        return new Promise(function(resolve) {
            setTimeout((): void => {
                resolve(true)
            }, 2000)
        }) 
    }

    switchTurnOn(): boolean {
        this.clearScreen()
        return this.isOn = !this.isOn
    }

    addition(value1: number, value2: number): void {
        if (!this.isOn) {
            this.getScreen.textContent = "Turn ON"
        }
        this.getScreen.textContent = "Loading..."

        this.calculDelay().then(resolve => { 
            const result: number = value1 + value2
            this.history.push(value1 + " + " + value2 + " = " + result)
            this.getScreen.textContent = result.toString()
        })       
    }

    subtraction(value1: number, value2: number): void {
        if (!this.isOn) {
            this.getScreen.textContent = "Turn ON"
        }
        this.getScreen.textContent = "Loading..."

        this.calculDelay().then(resolve => { 
            const result: number = value1 - value2
            this.history.push(value1 + " - " + value2 + " = " + result)
            this.getScreen.textContent = result.toString()
        }) 
    }

    division(value1: number, value2: number): void {
        if (!this.isOn) {
            this.getScreen.textContent = "Turn ON"
        }
        this.getScreen.textContent = "Loading..."

        this.calculDelay().then(resolve => { 
            const result: number = value1 / value2
            this.history.push(value1 + " / " + value2 + " = " + result)
            this.getScreen.textContent = result.toString()
        })
    }

    multiplication(value1: number, value2: number): void {
        if (!this.isOn) {
            this.getScreen.textContent = "Turn ON"
        }
        this.getScreen.textContent = "Loading..."

        this.calculDelay().then(resolve => { 
            const result: number = value1 * value2
            this.history.push(value1 + " * " + value2 + " = " + result)
            this.getScreen.textContent = result.toString()
        }) 

    }

    clearScreen(): void {
        this.getScreen.textContent = ''
    }

    getHistory(): void | string {
        this.clearScreen()

        if (!this.isOn) {
            return "Turn ON"
        }
        if (!this.history.length) {
            return 'No history'
        }

        const reversedHistory: string[] = this.history.slice(0).reverse()

        for (let i: number = 0; i <= Math.min(5, reversedHistory.length) - 1; i++) {
            const value: string = reversedHistory[i]
            const row: HTMLSpanElement = document.createElement('span')
            row.textContent = value
            this.getScreen.append(row)
        }
    }
}

const calculate: Calculate = new Calculate(getScreen)

powerBtn.addEventListener("click", (): void => {
    if (calculate.isOn) {
        powerBtn.textContent = "Turn ON"
    } else {
        powerBtn.textContent = "Turn OFF"
    }
    calculate.switchTurnOn()
})

historyBtn.addEventListener("click", (): void => {
    calculate.getHistory()
})

document.querySelectorAll('.operator').forEach((value: Element): void => {
    value.addEventListener('click', (e: Event): void => {
        const value1: number = parseInt((<HTMLInputElement>document.querySelector("#value1")).value)
        const value2: number = parseInt((<HTMLInputElement>document.querySelector("#value2")).value)

        const operator: string = (e.target as HTMLButtonElement).name

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
                console.log('Operator not known')
                break
        }
    })
})
