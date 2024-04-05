const powerBtn: HTMLButtonElement = document.querySelector("#powerBtn")!;
const historyBtn: HTMLButtonElement = document.querySelector("#historyBtn")!;
const getScreen: HTMLButtonElement  = document.querySelector("#screen")!;

class Calculate {
    getScreen: HTMLElement;
    isOn: boolean;
    history: Array<string>;

    constructor(getScreen: HTMLElement) {
        this.getScreen = getScreen;
        this.isOn = false;
        this.history = [];
    }

    switchTurnOn(): void {
        this.clearScreen();
        this.isOn = !this.isOn;
    }

    addition(value1: number, value2: number): void | string {
        if (!this.isOn) {
            return "Turn ON";
        }
        const result: number = value1 + value2;
        this.history.push(value1 + " + " + value2 + " = " + result);
        this.getScreen.textContent = String(result);
    }

    subtraction(value1: number, value2: number): void | string {
        if (!this.isOn) {
            return "Turn ON";
        }
        const result: number = value1 - value2;
        this.history.push(value1 + " - " + value2 + " = " + result);
        this.getScreen.textContent = String(result);
    }

    division(value1: number, value2: number): void | string {
        if (!this.isOn) {
            return "Turn ON";
        }
        if (value2 === 0) {
            return "Division by zero";
        }
        const result: number = value1 / value2;
        this.history.push(value1 + " / " + value2 + " = " + result);
        this.getScreen.textContent = String(result);
    }

    multiplication(value1: number, value2: number): void | string {
        if (!this.isOn) {
            return "Turn ON";
        }
        const result: number = value1 * value2;
        this.history.push(value1 + " * " + value2 + " = " + result);
        this.getScreen.textContent = String(result);
    }

    clearScreen(): void {
        this.getScreen.textContent = '';
    }

    getHistory(): void | string {
        this.clearScreen();

        if (!this.isOn) {
            return "Turn ON";
        }
        if (!this.history.length) {
            return 'No history';
        }

        const reversedHistory: string[] = this.history.slice(0).reverse();

        for (let i: number = 0; i <= Math.min(5, reversedHistory.length) - 1; i++) {
            const value: string = reversedHistory[i];
            const row: HTMLSpanElement = document.createElement('span');
            row.textContent = value;
            this.getScreen.append(row);
        }
    }
}


    const calculate: Calculate = new Calculate(getScreen);

    powerBtn.addEventListener("click", () => {
        if (calculate.isOn) {
            powerBtn.textContent = "Turn ON";
        } else {
            powerBtn.textContent = "Turn OFF";
        }
        calculate.switchTurnOn();
    });

    historyBtn.addEventListener("click", () => {
        calculate.getHistory();
    });

    document.querySelectorAll('.operator').forEach((value: any) => {
        value.addEventListener('click', (e: Event) => {
            const value1: number = parseInt((document.querySelector("#value1") as HTMLInputElement).value);
            const value2: number = parseInt((document.querySelector("#value2") as HTMLInputElement).value);

            const operator: string = (e.target as HTMLButtonElement).name;

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

