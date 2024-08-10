const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routerCanal = require('./routes/canalRoutes');
const routerPergunta = require('./routes/perguntaRoutes');
const routerResposta = require('./routes/respostaRoutes');
const corsOptions = require('./config/cors');

const app = express();

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use('/canais',routerCanal);
app.use('/perguntas',routerPergunta);
app.use('/respostas',routerResposta);

const PORT = process.env.APP_PORT || 3001;
app.listen(PORT, () => console.log(`Server rodando na porta: ${PORT}`));
