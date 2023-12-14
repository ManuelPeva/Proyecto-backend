// migrations/002_create_clientes.js
exports.up = function (knex) {
    return knex.schema.createTable('clientes', function (table) {
    table.increments('ID_Cliente').primary();
    table.string('Nombre');
    table.string('Apellido');
    table.string('Email');
    table.string('Telefono');
    table.string('Calle');
    table.string('Codigo_Postal');
    table.string('Barrio');
    table.string('Ciudad');
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('clientes');
};
