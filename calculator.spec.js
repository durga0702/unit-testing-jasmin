// test suits
describe('Calculator.js', function () {
    it('should add two numbers', function () {
        // expect(5 + 5).toBe(10);
        const calculator = new Calculator();
        calculator.add(5);
        expect(calculator.total).toBe(5);
    });
    it('should subtract two numbers', function () {
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.subtract(5);
        expect(calculator.total).toBe(25);
    });
    it('should multiply two numbers', function () {
        const calculator = new Calculator();
        calculator.total = 10;
        calculator.multiply(2);
        expect(calculator.total).toBe(20);
    });
    it('should divide two numbers', function () {
        const calculator = new Calculator();
        calculator.total = 10;
        calculator.divide(2);
        expect(calculator.total).toBe(5);
    });
    // To be matcher (===)
    it('should initialize the total', function () {
        const calculator = new Calculator();
        expect(calculator.total).toBe(0);
    });

    it('should initiat constructor', function () {
        const calculator = new Calculator();
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();
        // expect(calculator1).toBe(calculator2);
        calculator.total = 10;
        calculator.divide(2);
        expect(calculator.total).toBe(5);
    });


    it('should check equal to', function () {
        const calculator = new Calculator();
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();
        expect(calculator1).toEqual(calculator2);
    });

    it('should check truthy and falsy', function () {
        const calculator = new Calculator();
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();
        expect(calculator1).toBeTruthy();
        expect(calculator2).toBeTruthy();
        expect(calculator.total).toBeFalsy();
    });

    it('should check not', function () {
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();
        expect(calculator1).not.toBe(calculator2);
    });
})