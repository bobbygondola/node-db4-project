//imports
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
//declare server
const server = express();
//middleware
server.use(morgan());
server.use(helmet());
server.use(express.json());
//database
const db = require('./helpers/helpers')

//functions
server.get('/', (req,res) => {
    res.status(200).json({API:"is up boby, you set up the server super fast nice"})
})

server.get('/api/recipes', (req,res) => {
    db.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        console.log("get recipes error", err)
        res.status(500).json({message: "failed to get recipes"})
    })
});

server.get('/api/recipes/:id', (req,res) => {
    const id = req.params.id;
    db.getRecipe(id)
    .then(recipe => {
        res.status(200).json(recipe)
    })
    .catch(err => {
        console.log("get recipe by id error", err)
        res.status(500).json({message: "failed to get recipe"})
    })
});

server.get('/api/recipes/:id/steps', (req,res) => {
    const id = req.params.id;
    db.getInstructions(id)
    .then(steps => {
        res.status(200).json(steps)
    })
    .catch(err => {
        console.log("get recipe by steps error", err)
        res.status(500).json({message: "failed to get steps"})
    })
})
server.get('/api/recipes/:id/list', (req,res) => {
    const id = req.params.id;
    db.getShoppingList(id)
    .then(list => {
        res.status(200).json(list)
    })
})



module.exports = server;