const express = require('express');
const routerPergunta = express.Router();

const PerguntaController = require('../controllers/PerguntaController');

routerPergunta.get('/', PerguntaController.getAllPerguntas);
routerPergunta.get('/:canalId', PerguntaController.getPerguntasByCanalId);
routerPergunta.post('/', PerguntaController.createPergunta);
routerPergunta.put('/:id', PerguntaController.updatePergunta);
routerPergunta.delete('/:id', PerguntaController.deletePergunta);

module.exports = routerPergunta;