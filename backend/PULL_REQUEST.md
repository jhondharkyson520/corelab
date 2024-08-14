# Pull Request

## Descrição

Este Pull Request introduz a funcionalidade de gerenciamento de tarefas, permitindo aos usuários criar, ler, atualizar e excluir itens da lista de tarefas. O reposotório completo do projeto pode ser acessado em: https://github.com/jhondharkyson520/corelab

## O que foi feito

- **Backend**:
  - Adicionada API RESTfull para gerenciamento de tarefas.
  - Implementado CRUD (Create, Read, Update, Delete) de tarefas.
  - Para desenvolvimento agil de servidores HTTP foi usado o Express.
  - A integração com banco de dados foi feita atráves do Prisma ORM.
  - O banco de dados foi feito utilizando o PostgreSQL.
  - Para o controle de acesso a recursos de solicitações feitas em uma página web foi usado o CORS.

  ## Estrutura de Pastas

```bash
.
├── src
│   ├── controllers
│   │   
│   ├── prisma
│   │   
│   ├── services
│   │
│   ├── routes.ts
│   └── server.ts
└── 
```
## Instruções para Execução

### Backend

1. Clone o repositório:
    ```bash
    git clone https://github.com/jhondharkyson520/corelab.git
    cd backend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure o banco de dados:
     Crie um arquivo `.env` na raiz do projeto `backend` com as seguintes variáveis:
   ```bash
   
    POSTGRES_PASSWORD="admin"

    PGADMIN_PASSWORD="admin"

    PGADMIN_EMAIL="admin@admin.com"

4. Inicie o backend e o banco de dados usando Docker Compose:
    ```bash
    docker-compose up
## Funcionalidades

- CRUD de tarefas
## Testes

- **Backend**: Acesse a API em [http://localhost:3333](http://localhost:3333) para testar as rotas.

## Modelagem de dados
- Diagrama de classes da aplicação

![Diagrama de classes](./assets/diagramClass.png)

