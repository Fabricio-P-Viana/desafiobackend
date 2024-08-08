const express = require('express');
const bodyParser = require('body-parser');
const { Canal, Pergunta, Resposta } = require('./models');

const app = express();
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  const canais = await Canal.findAll();
  res.json(canais);
});

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => console.log(`Server rodando na porta: ${PORT}`));
