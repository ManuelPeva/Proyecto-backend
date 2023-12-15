const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventasController');

router.get('/ventas', ventasController.getAllVentas);
router.get('/ventas/:id', ventasController.getVentaById);
router.post('/ventas', ventasController.createVenta);
router.put('/ventas/:id', ventasController.updateVenta);
router.delete('/ventas/:id', ventasController.deleteVenta);

module.exports = router;
