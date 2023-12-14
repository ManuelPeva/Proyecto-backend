// migrations/004_create_detalleventa.js
exports.up = function (knex) {
    return knex.schema.createTable('detalleventa', function (table) {
    table.increments('ID_Detalle').primary();
    table.integer('ID_Venta').unsigned();
    table.foreign('ID_Venta').references('ventas.ID_Venta');
    table.integer('ID_Producto').unsigned();
    table.foreign('ID_Producto').references('productos.ID_Producto');
    table.integer('Cantidad');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('detalleventa');
};
