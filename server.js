const express = require('express');
const bodyParser = require('body-parser');

const routerCanal = require('./routes/canalRoutes');
const routerPergunta = require('./routes/perguntaRoutes');
const routerResposta = require('./routes/respostaRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/canais',routerCanal);
app.use('/perguntas',routerPergunta);
app.use('/repostas',routerResposta);

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => console.log(`Server rodando na porta: ${PORT}`));
