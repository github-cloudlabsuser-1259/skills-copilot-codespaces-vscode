const Calculator = require('./test');

// test.test.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should add two numbers', () => {
        expect(calculator.operate('add', 5, 3)).toBe(8);
    });

    test('should subtract two numbers', () => {
        expect(calculator.operate('subtract', 5, 3)).toBe(2);
    });

    test('should multiply two numbers', () => {
        expect(calculator.operate('multiply', 5, 3)).toBe(15);
    });

    test('should divide two numbers', () => {
        expect(calculator.operate('divide', 6, 3)).toBe(2);
    });

    test('should throw error when dividing by zero', () => {
        expect(() => calculator.operate('divide', 6, 0)).toThrow("Division by zero is not allowed.");
    });

    test('should throw error for invalid operation', () => {
        expect(() => calculator.operate('invalid', 5, 3)).toThrow("Invalid operation.");
    });
});