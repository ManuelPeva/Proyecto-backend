const express = require('express');
const router = express.Router();
const detalleventaController = require('../controllers/detalleventaController');

router.get('/detalleventa', detalleventaController.getAllDetalleVenta);
router.get('/detalleventa/:id', detalleventaController.getDetalleVentaById);
router.post('/detalleventa', detalleventaController.createDetalleVenta);
router.put('/detalleventa/:id', detalleventaController.updateDetalleVenta);
router.delete('/detalleventa/:id', detalleventaController.deleteDetalleVenta);

module.exports = router;
