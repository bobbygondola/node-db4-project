
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: "How to bake cookies"},
        {recipe_name: "How to bake a cake"},
        {recipe_name: "How to bake dirt pudding"},
        {recipe_name: "How to bake a pie"}
      ]);
    });
};
