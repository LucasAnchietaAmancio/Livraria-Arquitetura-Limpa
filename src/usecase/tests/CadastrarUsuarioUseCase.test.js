const CadastrarUsuarioUseCase = require("../CadastrarUsuarioUseCase")
const AppError = require("../../shared/errors/AppError")
describe("Cadastrar usuario Use Case", function(){

    const UserRepository = {
        CreateUser: jest.fn()
    }

    const userDTO = {
        nome_completo:"nome_valido",
        CPF:"CPF_valio",
        endereco:"endereco_valido",
        telefone:"telefone_valido",
        email:"email_valido"
        };

    const userNotDTO = {
        nome_completo:"",
        CPF:"",
        endereco:"endereco_valido",
        telefone:"telefone_valido",
        email:""
    };

    const sut = new CadastrarUsuarioUseCase(UserRepository);

    test("Deve cadastrar um usuario", async function () {
    
        const output = await sut.CreateUser(userDTO);

        expect(output).toBeUndefined();
        expect(UserRepository.CreateUser).toHaveBeenCalledWith(userDTO)
        expect(UserRepository.CreateUser).toHaveBeenCalledTimes(1)
    });
    
    test("Deve retornar um throw AppError caso o UserRepository não seja passado",function (){
        expect(() => {
            new CadastrarUsuarioUseCase()
        }).toThrow(AppError.depencence)
    });

    test("Deve retornar um throw AppError caso o algum dos dados obrigatórios não sejam passados", async function () {
        expect(sut.CreateUser(userNotDTO)).rejects.toThrow(new AppError(AppError.dataRequiredNotProvided))
    });
});