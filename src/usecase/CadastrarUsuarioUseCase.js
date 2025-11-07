function CadastrarUsuario(){
    return async function Cadastrar({nome_completo, CPF, endereco, telefone, email}) {
        return UserRepository(
            nome_completo,
            CPF,
            endereco,
            telefone,
            email
        );
    };
};


const test = CadastrarUsuario().Cadastrar({nome_completo:"lucas"})

console.log(test)