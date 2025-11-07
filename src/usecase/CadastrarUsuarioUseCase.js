module.export = function CadastrarUsuario(){
    return async function({nomeCompleto, telefone, CPF, email, endereco}){
        return await UserRepository.create({
            nomeCompleto,
            telefone,
            CPF,
            email,
            endereco
        })
    }
}