//migracion
exports.up = function (knex){
    return knex.schema.createTable('productos',function(table) {
        tabla.increments(ID_Producto).primary();
        table.string('Nombre');
        tbla.text('Description');
        tabla.string('SKU').unique();
    });
};