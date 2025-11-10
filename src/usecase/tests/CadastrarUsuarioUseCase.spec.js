const CadastrarUsuarioUseCase = require("../CadastrarUsuarioUseCase")

describe("Cadastrar usuario Use Case", function(){

    const UserRepository = {
        CreateUser: jest.fn()
    }

    test("Deve cadastrar um usuario", async function () {
        
        const userDTO = {
            nome_completo:"nome_valido",
            CPF:"CPF_valio",
            endereco:"endereco_valido",
            telefone:"telefone_valido",
            email:"email_valido"
        }

        const sut = new CadastrarUsuarioUseCase(UserRepository);
        const output = await sut.CreateUser(userDTO);

        expect(output).toBeUndefined();
        expect(UserRepository.CreateUser).toHaveBeenCalledWith(userDTO)
        expect(UserRepository.CreateUser).toHaveBeenCalledTimes(1)
    })
});