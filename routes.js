//? IMPORTS
const express = require("express");
const route = express.Router();
const homeController = require('./src/controllers/homeController'); //? controllerHome
const contatoController = require('./src/controllers/contatoController'); //? controllerContato

// ! MIDDLEWARE
    //todo Middleware
    function meuMiddleware(req, res, next){
        console.log('Passei no seu Middleware');
        next()
    }

// ! ROTAS
    // todo Rotas da home
        route.get(
            '/', 
            meuMiddleware,
            homeController.paginaInicial, 
            function(req, res, next){
                console.log("Estou aqui");
            }
        );
        route.post('/', homeController.trataPost)

    // todo Rotas de contato
        route.get('/contato', contatoController.paginaInicial)

//! Exportacao do modulo
    module.exports = route;