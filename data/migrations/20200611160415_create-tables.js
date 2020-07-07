
exports.up = function(knex) {
  return knex.schema.createTable("recipes", tbl => {
      //primary key always
      tbl.increments();
      //input
      tbl.string("recipe_name", 225).notNullable().index();
  })

.createTable("steps", tbl => {
    //primary key always
    tbl.increments();
    //input
    tbl.string("step_name", 225).notNullable().index();
    //foreign key
    tbl.integer("recipe_id").unsigned()
    .references("recipes.id")
    .onDelete("RESTRICT")
    .onUpdate("CASCADE")
})

.createTable("ingredients", tbl => {
    //primary key always
    tbl.increments()
    //input
    tbl.string("ingredient_name").notNullable().index();
})
.createTable("recipe_ingredients", tbl => {
    //primary key always
    tbl.increments()
    tbl.integer("quantity").notNullable().index()
    //foreign key
    tbl.integer("ingredient_id").unsigned()
    .references("ingredients.id")
    .onDelete("RESTRICT")
    .onUpdate("CASCADE")
    //another foreign key
    tbl.integer("recipe_id").unsigned()
    .references("recipes.id")
    .onDelete("RESTRICT")
    .onUpdate("CASCADE")
});
};
exports.down = function(knex) {
  return knex.schema
  .dropTableifExists("recipe_ingredients")
  .dropTableifExists("ingredients")
  .dropTableifExists("steps")
  .dropTableifExists("recipes")
};
