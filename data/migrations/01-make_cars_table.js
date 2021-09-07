exports.up = async function (knex) {
  // DO YOUR MAGIC
  knex.schema.createTable("cars", (table) => {
    table.increments()
    table.string("vin").unique().required()
    table.string("make").required()
    table.string("model").required()
    table.integer("mileage").required()
    table.string("title")
    table.string("transmission")
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  knex.schema.dropTableIfExists("cars")
};