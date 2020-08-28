
exports.up = function(knex) {
  return knex.schema.createTable('comment', tbl =>{
      tbl.increments()
      tbl.text('Name')
      tbl.text('comments')
      tbl.timestamp('created_at').defaultTo(knex.fn.now())
  })
  .createTable('sharables', tbl =>{
      tbl.increments()
      tbl.text('Name')
      tbl.text('story')
      tbl.timestamp('created_at').defaultTo(knex.fn.now())
  })
  .createTable('gallery', tbl =>{
    tbl.increments()
    tbl.text('photo')
    tbl.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('comment')
    .dropTableIfExists('sharables')
    
};
