// app.js (o index.js)
const express = require('express');
const app = express();
const productosRoutes = require('./routes/productos');
const clientesRoutes = require('./routes/clientes'); // Importa las rutas para clientes
const ventasRoutes = require('./routes/ventas'); // Importa las rutas para ventas
const detalleventaRoutes = require('./routes/detalleventa'); // Importa las rutas para detalleventa

// Middleware para procesar JSON
app.use(express.json());

// Rutas
app.use(productosRoutes);
app.use(clientesRoutes); // Usa las rutas para clientes
app.use(ventasRoutes); // Usa las rutas para ventas
app.use(detalleventaRoutes); // Usa las rutas para detalleventa

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API (activo)!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
