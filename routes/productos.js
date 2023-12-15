// routes/productos.js
const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/productos', productosController.getAllProductos);
router.get('/productos/:id', productosController.getProductoById);
router.post('/productos', productosController.createProducto);
router.put('/productos/:id', productosController.updateProducto);
router.delete('/productos/:id', productosController.deleteProducto);

module.exports = router;
