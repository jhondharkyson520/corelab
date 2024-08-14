# Desafio Corelab

## Descrição

Este projeto é uma aplicação web para criar e gerenciar listas de tarefas. A aplicação é composta por um frontend em React e uma API backend em Node.js. O frontend permite aos usuários visualizar, criar, atualizar e excluir tarefas, além de marcar tarefas como favoritas e definir cores para elas. O backend fornece uma API RESTful para gerenciar essas operações e se conecta a um banco de dados PostgreSQL.

## Requisitos

  - A API backend deve ser construída em um framework Node.js e usar um banco de dados de sua escolha (por exemplo, MongoDB, PostgreSQL, etc.).
  - O frontend deve ser construído em React e usar ferramentas modernas de desenvolvimento web e melhores práticas.
  - A aplicação deve ser responsiva e visualmente atraente.


## Tecnologias Utilizadas

- **Frontend:**
  - React
  - TypeScript
  - Styled Components
  - Axios

- **Backend:**
  - Node.js
  - Express
  - TypeScript
  - Prisma
  - PostgreSQL
  - Docker

## Estrutura do Projeto

### Backend

- `src/controllers/`: Contém os controladores da API para gerenciar tarefas.
- `src/prisma/`: Configuração do Prisma Client.
- `src/services/`: Lógica de negócios e interações com o banco de dados.
- `src/routes.ts`: Definição das rotas da API.
- `src/server.ts`: Configuração do servidor da API.
- `docker-compose.yml`: Configuração para rodar o backend e o PostgreSQL em containers Docker.

### Frontend

- `src/components/`: Contém o componente Header.
- `src/pages/`: Páginas da aplicação, como CreateNotes, FavoriteNotes, OtherNotes.
- `src/context/`: NoteContext usado para passar os dados para os componentes da aplicação.
- `src/App.tsx`: Componente principal que renderiza as páginas.

## Instalação e Execução

### Backend

1. **Clone o repositório do projeto e entre no diretório backend:**
   ```bash
   git clone https://github.com/jhondharkyson520/corelab.git
   cd backend

2. **Instale as dependências:**
   ```bash
   npm install

3. **Configure o banco de dados:**
- Crie um arquivo `.env` na raiz do projeto `backend` com as seguintes variáveis:
   ```bash
   
    POSTGRES_PASSWORD="admin"

    PGADMIN_PASSWORD="admin"

    PGADMIN_EMAIL="admin@admin.com"

4. **Inicie o backend e o banco de dados usando Docker Compose:**
   ```bash
   docker-compose up

### Frontend

1. **Clone o repositório do projeto e entre no diretório frontend:**
   ```bash
   git clone https://github.com/jhondharkyson520/corelab.git
   cd frontend

2. **Instale as dependências:**
   ```bash
   npm install

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start

### Funcionalidades

- `Backend`: API RESTfull para gerenciar tarefas, incluindo criação, leitura, atualização, exclusão, marcação de favoritos e definição de cores.

- `Frontend`: Interface responsiva para exibir, filrar, criar, atualizar e excluir tarefas.

### Testes

- `Backend`: Acesse a API em http://localhost:3333 para testar as rotas.

- `Frontend`: Acesse a aplicação em http://localhost:5173 para verificar a interface.