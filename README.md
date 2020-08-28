 Passo a Passo para execução do projeto.

1) Clone o projeto do gitHub em uma pasta em seu computador.
2) Execute o comando "yarn" para instalar as dependencias.
3) Este projeto pode ser testado de duas formas utilizando os testes já criados ou utilizando um programa que faça requisições http como exemplo insomnia, postman etc.
    a) Para executar os testes basta executar o comando "yarn test" os testes seram executados.
    b) Para executar o projeto com um programa de requisições http execute o comando no terminal do visual studio code "yarn dev:server" para iniciar o servidor, segue abaixo as rotas disponiveis.

    Rotas

1)http://localhost:3333/vendedor/calcularSalario
    
    a) Essa rota recebe como parametro um json com os seguintes campos "name" é uma string, "salarioFixo" é um number e "valorTotalVendas" é um number.