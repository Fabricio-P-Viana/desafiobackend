# 🌟 Desafio Fullstack Jr - Tela de NPS
Bem-vindo ao projeto da Tela de NPS (Net Promoter Score)! Este repositório contém o código de uma aplicação web responsiva e uma API robusta para gerenciar dados de NPS, incluindo perguntas, respostas e canais.

# 📑 Índice
- Visão Geral
- Tecnologias Utilizadas
- Frontend
- Backend
- Instalação e Configuração
- Rotas da API
- Como Rodar o Projeto
- Considerações Finais
# 🎯 Visão Geral
Este projeto visa criar uma interface de usuário moderna e responsiva para coletar feedback dos usuários com uma escala de 0 a 10. Dependendo da pontuação, o usuário é solicitado a fornecer feedback adicional, e uma mensagem de agradecimento é exibida após a submissão. O backend foi projetado para gerenciar eficientemente perguntas, respostas e canais, armazenando os dados em um banco de dados PostgreSQL.

# 🛠️ Tecnologias Utilizadas
## Frontend
- Next.js: Framework React para renderização do lado do servidor e suporte a roteamento dinâmico.
- Redux: Gerenciamento de estado centralizado.
- Flexbox: Layout responsivo e flexível.
- Styled Components: Criação de componentes de interface reutilizáveis e estilizados.
- Toastr: Criação de Notificações personalizadas.
## Backend
- Node.js: Plataforma de servidor para lidar com a lógica de negócios.
- Express.js: Framework para construir a API RESTful.
- PostgreSQL: Banco de dados relacional para armazenar os dados.
- Sequelize: ORM para interagir com o banco de dados.

# 🎨 Frontend
A interface foi desenvolvida com foco na responsividade e na experiência do usuário. A tela de NPS permite ao usuário selecionar uma pontuação, exibe uma caixa de diálogo para feedback em caso de pontuações baixas, e uma mensagem de agradecimento após a votação.

Funcionalidades
- Escala de Pontuação: Selecione uma pontuação de 0 a 10.
- Caixa de Diálogo: Solicite feedback adicional para pontuações baixas.
- Mensagem de Agradecimento: Exibida após o envio do feedback.
- Integração com Backend: Envio dos dados do feedback e pontuação para a API.

# 🗄️ Backend
O backend foi construído para ser escalável e fácil de manter, utilizando Node.js com Express.js para criar a API RESTful e Sequelize para gerenciar as interações com o banco de dados PostgreSQL.

Estrutura de Dados
- Canal: Diferentes meios em que as perguntas são feitas.
- Pergunta: Perguntas respondidas pelos usuários.
- Resposta: Feedback dado pelos usuários.

# ⚙️ Instalação e Configuração
Requisitos
- Node.js (v20+)
- PostgreSQL(V16)
## Passos
Clone os Repositórios:
```
- git clone https://github.com/Fabricio-P-Viana/desafiobackend
- git clone https://github.com/Fabricio-P-Viana/desafiofrontend
```

Instale as Dependências:
```
npm install
```

Configure o Banco de Dados no back-end:

Crie um banco de dados PostgreSQL com nome nps_db.
Configure as variáveis de ambiente no arquivo .env.
defina a porta do app para 3333
Exemplo de .env:
```
DB_USERNAME=postgres
PASSWORD=root
DATABASE=nps_db
HOST=127.0.0.1
PORT=5432
DIALECT=postgres
APP_PORT=3333
```
logo após faça as migrations do sequelize:
```
npx sequelize db:migrate
```
# 🛣️ Rotas da API
## CRUD de Perguntas
- GET /perguntas: Listar todas as perguntas.
- POST /perguntas: Criar uma nova pergunta.
- PUT /perguntas/{id}: Atualizar uma pergunta existente.
- DELETE /perguntas/{id}: Excluir uma pergunta.
## CRUD de Respostas
- GET /respostas: Listar todas as respostas.
- POST /respostas: Criar uma nova resposta.
- PUT /respostas/{id}: Atualizar uma resposta existente.
- DELETE /respostas/{id}: Excluir uma resposta.
## CRUD de Canais
- GET /canais: Listar todos os canais.
- POST /canais: Criar um novo canal.
- PUT /canais/{id}: Atualizar um canal existente.
- DELETE /canais/{id}: Excluir um canal.

# 🚀 Como Rodar o Projeto
Inicie o Servidor Backend:
```
npm run dev
```
Inicie o Servidor Frontend:
```
npm run dev
```
Acesse a Aplicação front-end:

Abra o navegador e acesse http://localhost:3000.
# 💡 Considerações Finais
Este projeto demonstra habilidades em desenvolvimento fullstack, com foco em uma interface de usuário responsiva e uma API eficiente. A integração entre frontend e backend foi feita utilizando tecnologias modernas e boas práticas de desenvolvimento.

