const express = require('express');
const router = express.Router();

const PerguntaController = require('../controllers/PerguntaController');

router.get('/perguntas', PerguntaController.getAllPerguntas);
router.post('/perguntas', PerguntaController.createPergunta);
router.put('/perguntas/:id', PerguntaController.updatePergunta);
router.delete('/perguntas/:id', PerguntaController.deletePergunta);

module.exports = router;