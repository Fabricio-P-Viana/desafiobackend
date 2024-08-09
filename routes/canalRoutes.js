const express = require('express');
const router = express.Router();

const CanalController = require('../controllers/CanalController');

router.get('/canais', CanalController.getAllCanais)
router.post('/canais', CanalController.createCanal);
router.put('/canais/:id', CanalController.updateCanal);
router.delete('/canais/:id', CanalController.deleteCanal);

module.exports = router;