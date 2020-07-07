const db=require('../data/db-config');

function getRecipes(){
    return db("recipes")
};
function getRecipe(id){
    return db("recipes")
    .where({id})
};
//getInstructions(recipe_id): 
//should return a list of step by step instructions for preparing a recipe
function getInstructions(id){
    return db('steps')
    .select('steps.step_name', 'steps.id')
    .where ({recipe_id:id})
}
//should return a list of all ingredients and quantities for a given recipe
function getShoppingList(id){
    return db('recipe_ingredients')
    .select('quantity', "recipe_id", "ingredients.ingredient_name")
    .join("ingredients", "ingredients.id", "recipe_ingredients.ingredient_id")
    .where({recipe_id:id})
}

module.exports = {
 getRecipes,
 getRecipe,
 getInstructions,
 getShoppingList
}