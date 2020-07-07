
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_name: 'prep', recipe_id: 1},
        {step_name: 'oven time', recipe_id: 1},
        {step_name: 'done', recipe_id: 1},
        {step_name: 'prep', recipe_id: 2},
        {step_name: 'oven time', recipe_id: 2},
        {step_name: 'done', recipe_id: 2},
        {step_name: 'prep', recipe_id: 3},
        {step_name: 'oven time', recipe_id: 3},
        {step_name: 'done', recipe_id: 3},
        {step_name: 'prep', recipe_id: 4},
        {step_name: 'oven time', recipe_id: 4},
        {step_name: 'done', recipe_id: 4}
      ]);
    });
};
