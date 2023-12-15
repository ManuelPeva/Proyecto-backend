// controllers/productosController.js
const knex = require('../knexfile');

exports.getAllProductos = async (req, res) => {
const productos = await knex('productos').select('*');
res.json(productos);
};

exports.getProductoById = async (req, res) => {
const id = req.params.id;
const producto = await knex('productos').where('ID_Producto', id).first();
res.json(producto);
};

exports.createProducto = async (req, res) => {
const nuevoProducto = req.body;
const [id] = await knex('productos').insert(nuevoProducto);
res.json({ id });
};

exports.updateProducto = async (req, res) => {
const id = req.params.id;
const actualizacionProducto = req.body;
await knex('productos').where('ID_Producto', id).update(actualizacionProducto);
res.json({ mensaje: 'Producto actualizado exitosamente' });
};

exports.deleteProducto = async (req, res) => {
const id = req.params.id;
await knex('productos').where('ID_Producto', id).del();
res.json({ mensaje: 'Producto eliminado exitosamente' });
};
