// migrations/003_create_ventas.js
exports.up = function (knex) {
    return knex.schema.createTable('ventas', function (table) {
    table.increments('ID_Venta').primary();
    table.integer('ID_Cliente').unsigned();
    table.foreign('ID_Cliente').references('clientes.ID_Cliente');
    table.date('Fecha');
    table.decimal('Total', 10, 2);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('ventas');
};
