# Desafio Corelab

## Descrição

Este projeto é uma aplicação web para criar e gerenciar listas de tarefas. A aplicação é composta por um frontend em React e uma API backend em Node.js. O frontend permite aos usuários visualizar, criar, atualizar e excluir tarefas, além de marcar tarefas como favoritas e definir cores para elas. O backend fornece uma API RESTful para gerenciar essas operações e se conecta a um banco de dados PostgreSQL.

## Requisitos

  - O frontend deve ser construído em React e usar ferramentas modernas de desenvolvimento web e melhores práticas.
  - A aplicação deve ser responsiva e visualmente atraente.


## Tecnologias Utilizadas

- **Frontend:**
  - React
  - TypeScript
  - Styled Components
  - Axios

## Estrutura do Projeto

### Frontend

- `src/components/`: Contém o componente Header.
- `src/pages/`: Páginas da aplicação, como CreateNotes, FavoriteNotes, OtherNotes.
- `src/context/`: NoteContext usado para passar os dados para os componentes da aplicação.
- `src/App.tsx`: Componente principal que renderiza as páginas.

## Instalação e Execução

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
   npm run dev

### Funcionalidades

- `Frontend`: Interface responsiva para exibir, filrar, criar, atualizar e excluir tarefas.

### Testes

- `Frontend`: Acesse a aplicação em http://localhost:5173 para verificar a interface.