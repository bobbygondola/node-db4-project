
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {quantity:5,ingredient_id:1,recipe_id:1},
        {quantity:1,ingredient_id:2,recipe_id:1},
        {quantity:52,ingredient_id:3,recipe_id:1},
        {quantity:5,ingredient_id:5,recipe_id:2},
        {quantity:1,ingredient_id:9,recipe_id:2},
        {quantity:52,ingredient_id:8,recipe_id:2},
        {quantity:7,ingredient_id:4,recipe_id:2},
        {quantity:1,ingredient_id:2,recipe_id:3},
        {quantity:6,ingredient_id:10,recipe_id:3},
        {quantity:1,ingredient_id:9,recipe_id:3},
        {quantity:1,ingredient_id:10,recipe_id:4},
        {quantity:6,ingredient_id:1,recipe_id:4},
        {quantity:1,ingredient_id:2,recipe_id:4}
      ]);
    });
};
