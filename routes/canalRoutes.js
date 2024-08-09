const express = require('express');
const routerCanal = express.Router();

const CanalController = require('../controllers/CanalController');

routerCanal.get('/', CanalController.getAllCanais);
routerCanal.post('/', CanalController.createCanal);
routerCanal.put('/:id', CanalController.updateCanal);
routerCanal.delete('/:id', CanalController.deleteCanal);

module.exports = routerCanal;