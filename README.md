# Natura E-commerce Test Application

Este projeto é um teste desenvolvido para a empresa Natura, consistindo em um e-commerce criado utilizando NestJS, Typeorm como ORM, PostgreSQL como banco de dados e Docker em modo desenvolvimeno para a utilzação da imagem de um banco de dados.

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) - Um framework Node.js progressivo para a construção de aplicações eficientes, confiáveis e escaláveis.
- [Typeorm](https://typeorm.io/) - Um ORM que facilita o trabalho com bancos de dados.
- [PostgreSQL](https://www.postgresql.org/) - Um sistema de gerenciamento de banco de dados relacional avançado de código aberto.
- [Docker](https://www.docker.com/) - Plataforma de software que permite criar, testar e implantar aplicações rapidamente.

## Requisitos para desenvolvimento

- Node.js (versão 20 ou superior)
- Docker
- Docker Compose

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/api-natura-ecommerce.git
    cd api-natura-ecommerce
    ```

2. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias. Veja o arquivo `.env.example` para referência.

4. Instale as dependências do projeto:

    ```bash
    yarn install
    ```

5. Rode as migrações do Prisma para configurar o banco de dados:

    ```bash
    yarn typeorm migration:run
    ```

6. Inicie a aplicação:

    ```bash
    yarn dev
    ```

## Estrutura do Projeto

- `src/` - Contém o código-fonte da aplicação.
- `database/migrations` - Contém as migrações do banco de dados.
- `docker/` - Contém os arquivos de configuração do Docker.

## Scripts Disponíveis

- `yarn start` - Inicia a aplicação em modo de produção.
- `yarn start:dev` - Inicia a aplicação em modo de desenvolvimento.
- `yarn build` - Compila a aplicação.
- `yarn lint` - Executa o linter para verificar o código.
- `yarn test` - Executa os testes unitários.
- `yarn test:e2e` - Executa os testes end-to-end.

## Documentação da API

A documentação da API pode ser acessada através do endpoint `/api` quando a aplicação estiver em execução.

## Contribuição

Se você deseja contribuir com este projeto, por favor, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

*Feito por Luan Tomarozzi.*
