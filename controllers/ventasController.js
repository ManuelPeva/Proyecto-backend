const knex = require('../knexfile');

exports.getAllVentas = async (req, res) => {
    const ventas = await knex('ventas').select('*');
    res.json(ventas);
};

exports.getVentaById = async (req, res) => {
    const id = req.params.id;
    const venta = await knex('ventas').where('ID_Venta', id).first();
    res.json(venta);
};

exports.createVenta = async (req, res) => {
    const nuevaVenta = req.body;
    const [id] = await knex('ventas').insert(nuevaVenta);
    res.json({ id });
};

exports.updateVenta = async (req, res) => {
    const id = req.params.id;
    const actualizacionVenta = req.body;
    await knex('ventas').where('ID_Venta', id).update(actualizacionVenta);
    res.json({ mensaje: 'Venta actualizada exitosamente' });
};

exports.deleteVenta = async (req, res) => {
    const id = req.params.id;
    await knex('ventas').where('ID_Venta', id).del();
    res.json({ mensaje: 'Venta eliminada exitosamente' });
};
