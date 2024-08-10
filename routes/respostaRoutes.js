const express = require('express');
const routerResposta = express.Router();

const RespostaController = require('../controllers/RespostaController');

routerResposta.get('/', RespostaController.getAllRespostas);
routerResposta.get('/:perguntaId', RespostaController.getRespostasByPerguntaId);
routerResposta.post('/', RespostaController.createResposta);
routerResposta.put('/:id', RespostaController.updateResposta);
routerResposta.delete('/:id', RespostaController.deleteResposta);

module.exports = routerResposta;