import * as app from "./app";
import * as app from "";
import * as math from "./math";
test("calls math.add", () => {
    // Almacenar la operacion original
    const originalAdd = math.add;
    // Cual es la funciona que va a ejecutar
    math.add = jest.fn(originalAdd);
    // Verficar que al enviar los datos y el valor esperado
    expect(app.doAdd(1, 2)).toEqual(3);
    //Asegurarse que la funciona simulada tenga el mismo orden de los parametros pasados.
    expect(math.add).toHaveBeenCalledWith(1, 2);
    // Se simula un comportamiento diferente y se hace para un retorno diferente de tipo mock
    math.add.mockImplementation(() => "mock");
    // Se hace la validadcion del test
    expect(app.doAdd(1, 2)).toEqual("mock");
    // Se verificar el orden de llamado de los parametros
    expect(math.add).toHaveBeenCalledWith(1, 2);
    // Y se restaura a la implementacion original
    math.add = originalAdd;
    expect(app.doAdd(1, 2)).toEqual(3);
});