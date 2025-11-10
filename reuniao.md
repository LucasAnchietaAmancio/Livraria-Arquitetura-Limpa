## Sobre: 
    ##Somos uma livraria e desejamos controllar nossa entrada e saída de livros. Queremos cadastrar o usuário que irá pegar o livro e cadastrar o livro
    que será entregue ao usuário, além de buscar o registro dos empréstimos.

## Dados:
-- Usuário: [nomeUsuario, telefone, CPF, email, endereco]
-- Livros: [nomeLivro, quantidade, autor, genero, ISBN]
-- Emprestimos: [usuario_id, livro_id, data_retorno, data_devolução, data_saida]

## UseCases:
[] Cadastrar Usuário:
    - CPF ou email devem ser únicos
    - CPF, email e nome devem ser obrigatórios

[] Buscar um usuário por CPF:
    - Retornar usuário ou vazio

[] Buscar um usuário por email:
    - Retornar valor ou vazio

[] Cadastrar um livro:
    - ISBN deve ser único

[] Buscar um livro por nome ou ISBN:
    - Retornar livros ou vazio

[] Emprestar livro a um usuário:
    - A data de retorno não pode ser menor que a data de saída
    - Um usuário não pode ter dois livros com o mesmo ISBN ao mesmo tempo
    - Um usuário pode estar com mais de um livro com ISBN diferentes
    - Ao cadastrar um empréstimo será envido um email automaticamente, informando o nome do usuário o nome do livro que ele pegou seu CPF, data de saída e data de entrega
    - 

[] Devolver um livro emprestado:
    - Ao atrasar a entrega de um livro, será gerada uma multa fixa de 10R$ para o aluno

[] Mostrar todos os empréstimos pendentes com, nome do livro, nome do usuário, data de saída data de retorno. Ordenados pela data de retorno mais antiga:

## Estruturas

##UserRepository
[] cadastrar: ({nome_completo, CPF, endereco, telefone, email}) =>Promise<void>