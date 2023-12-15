const knex = require('../knexfile');

exports.getAllDetalleVenta = async (req, res) => {
    try {
        const detalleventa = await knex('detalleventa').select('*');
        res.json(detalleventa);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener detalles de venta' });
    }
};

exports.getDetalleVentaById = async (req, res) => {
    try {
        const id = req.params.id;
        const detalleVenta = await knex('detalleventa').where('ID_DetalleVenta', id).first();

        if (detalleVenta) {
            res.json(detalleVenta);
        } else {
            res.status(404).json({ error: 'Detalle de venta no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener detalle de venta por ID' });
    }
};

exports.createDetalleVenta = async (req, res) => {
    try {
        const nuevoDetalleVenta = req.body;
        const [id] = await knex('detalleventa').insert(nuevoDetalleVenta);
        res.json({ id });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear nuevo detalle de venta' });
    }
};

exports.updateDetalleVenta = async (req, res) => {
    try {
        const id = req.params.id;
        const actualizacionDetalleVenta = req.body;
        const count = await knex('detalleventa').where('ID_DetalleVenta', id).update(actualizacionDetalleVenta);

        if (count > 0) {
            res.json({ mensaje: 'Detalle de venta actualizado exitosamente' });
        } else {
            res.status(404).json({ error: 'Detalle de venta no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar detalle de venta' });
    }
};

exports.deleteDetalleVenta = async (req, res) => {
    try {
        const id = req.params.id;
        const count = await knex('detalleventa').where('ID_DetalleVenta', id).del();

        if (count > 0) {
            res.json({ mensaje: 'Detalle de venta eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Detalle de venta no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar detalle de venta' });
    }
};
