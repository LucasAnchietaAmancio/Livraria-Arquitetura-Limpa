class CadastrarUsuario{
    constructor(UserRepository){
        this.UserRepository = UserRepository
    }

    async CreateUser({nome_completo,CPF,endereco,telefone,email}){

        console.log(this.UserRepository.CreateUser)

       return  await this.UserRepository.CreateUser({
            nome_completo,
            CPF,
            endereco,
            telefone,
            email
        });
    };
};

module.exports = CadastrarUsuario