
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: "butter"},
        {ingredient_name: "salt"},
        {ingredient_name: "vanilla"},
        {ingredient_name: "dirt"},
        {ingredient_name: "flour"},
        {ingredient_name: "pepper"},
        {ingredient_name: "cayanne"},
        {ingredient_name: "rocks"},
        {ingredient_name: "poison"},
        {ingredient_name: "glass"}
      ]);
    });
};
