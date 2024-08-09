const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/canalRoutes');

const app = express();

app.use(bodyParser.json());
app.use(router);

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => console.log(`Server rodando na porta: ${PORT}`));
