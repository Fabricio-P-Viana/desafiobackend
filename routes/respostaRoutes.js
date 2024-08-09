const express = require('express');
const router = express.Router();

const RespostaController = require('../controllers/RespostaController');

router.get('/respostas', RespostaController.getAllRespostas);
router.post('/respostas', RespostaController.createResposta);
router.put('/respostas/:id', RespostaController.updateResposta);
router.delete('/respostas/:id', RespostaController.deleteResposta);

module.exports = router;