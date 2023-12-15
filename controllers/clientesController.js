const knex = require('../knexfile');

exports.getAllClientes = async (req, res) => {
  const clientes = await knex('clientes').select('*');
  res.json(clientes);
};

exports.getClienteById = async (req, res) => {
  const id = req.params.id;
  const cliente = await knex('clientes').where('ID_Cliente', id).first();
  res.json(cliente);
};

exports.createCliente = async (req, res) => {
  const nuevoCliente = req.body;
  const [id] = await knex('clientes').insert(nuevoCliente);
  res.json({ id });
};

exports.updateCliente = async (req, res) => {
  const id = req.params.id;
  const actualizacionCliente = req.body;
  await knex('clientes').where('ID_Cliente', id).update(actualizacionCliente);
  res.json({ mensaje: 'Cliente actualizado exitosamente' });
};

exports.deleteCliente = async (req, res) => {
  const id = req.params.id;
  await knex('clientes').where('ID_Cliente', id).del();
  res.json({ mensaje: 'Cliente eliminado exitosamente' });
};
