
exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', table => {
    table.increments();
    table.text('question').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
  .createTable('answers', table => {
    table.increments();
    table.text('answer').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.integer('question_id').references('id').inTable('questions');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions')
                    .dropTable('answers');
};
