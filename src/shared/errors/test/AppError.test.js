const AppError = require("../AppError")
describe("AppError", function(){

    test("Verificanto se app error é uma instancia de Error", function(){
        const appError = new AppError("erro")
        expect(appError).toBeInstanceOf(Error);
    });

});