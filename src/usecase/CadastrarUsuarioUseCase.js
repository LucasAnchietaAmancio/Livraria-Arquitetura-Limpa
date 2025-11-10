class CadastrarUsuario{
    constructor(UserRepository){

        if(!UserRepository) {
            throw new Error(
                "UserRepository não fornecido"
            );
        };

        this.UserRepository = UserRepository;
    };

    async CreateUser({nome_completo,CPF,endereco,telefone,email}){

       if(!nome_completo || !CPF || !email) {
            throw new Error(
                "Não é permitido fazer o cadastro sem os dados obrigatórios"
            );
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