exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table
      .string('name', 50)
      .notNullable();

    table
      .string('email', 256)
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
