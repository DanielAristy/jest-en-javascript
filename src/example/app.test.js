import * as app from "./app";
import * as math from "./math";

math.add = jest.fn();
math.subtract = jest.fn();
math.multiply = jest.fn();
math.divide = jest.fn();

//Sumar de dos numeros
test("calls math.add", () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
});

//Resta de dos numeros
test("calls math.subtract", () => {
    app.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

//Multiplicacion de dos números
test("calls math.multiply", () => {
    app.doMultiply(1, 2);
    expect(math.multiply).toHaveBeenCalledWith(1, 2);
});

//Division de dos números
test("calls math.divide", () => {
    app.doDivide(1, 2);
    expect(math.divide).toHaveBeenCalledWith(1, 2);
});


