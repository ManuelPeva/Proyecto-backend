// app.js (o index.js)
const express = require('express');
const app = express();
const productosRoutes = require('./routes/productos');
// Importa las rutas para las otras tablas

// Middleware para procesar JSON
app.use(express.json());

// Rutas
app.use(productosRoutes);
// Usa las rutas para las otras tablas

const PORT = 3000;
app.listen(PORT, () => {
console.log(`Servidor escuchando en el puerto ${PORT}`);
});
