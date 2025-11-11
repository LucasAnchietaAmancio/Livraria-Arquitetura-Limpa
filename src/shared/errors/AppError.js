class AppError extends Error {

    constructor(message){
        super(message);
        this.message = message;
    };

    static depencence = "Alguma dependência obrigatória não foi fornecida"

    static dataRequiredNotProvided = "Dados obrigatórios não fornecidos"
};

module.exports = AppError