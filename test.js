class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        this.result = a + b;
        return this.result;
    }

    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }

    multiply(a, b) {
        this.result = a * b;
        return this.result;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        this.result = a / b;
        return this.result;
    }

    operate(operation, a, b) {
        switch (operation) {
            case 'add':
                return this.add(a, b);
            case 'subtract':
                return this.subtract(a, b);
            case 'multiply':
                return this.multiply(a, b);
            case 'divide':
                return this.divide(a, b);
            default:
                throw new Error("Invalid operation.");
        }
    }

    getResult() {
        return this.result;
    }
}

// Example usage:
const calculator = new Calculator();
console.log(calculator.operate('add', 5, 3)); // Output: 8
console.log(calculator.operate('subtract', 5, 3)); // Output: 2
console.log(calculator.operate('multiply', 5, 3)); // Output: 15
console.log(calculator.operate('divide', 6, 3)); // Output: 2