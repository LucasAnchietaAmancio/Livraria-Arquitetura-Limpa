const AppError = require("../shared/errors/AppError")

class CadastrarUsuario{
    constructor(UserRepository){

        if(!UserRepository) {
            throw new AppError(AppError.depencence)
        }
        this.UserRepository = UserRepository;
    };

    async CreateUser({nome_completo,CPF,endereco,telefone,email}){

       if(!nome_completo || !CPF || !email) {
            throw new AppError(AppError.dataRequiredNotProvided)
       };

       return  await this.UserRepository.CreateUser({
            nome_completo,
            CPF,
            endereco,
            telefone,
            email
        });
    };
};

module.exports = CadastrarUsuario;