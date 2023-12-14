// migrations/001_create_productos.js
exports.up = function (knex) {
    return knex.schema.createTable('productos', function (table) {
      table.increments('ID_Producto').primary(); // Corregir esta línea
      table.string('Nombre');
      table.text('Descripcion');
      table.string('SKU').unique();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('productos');
  };
  