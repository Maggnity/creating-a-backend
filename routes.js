//? IMPORTS
const express = require("express");
const route = express.Router();
const homeController = require('./src/controllers/homeController'); // ? homeController
const loginController = require('./src/controllers/loginController'); // ? loginController
const contatoController = require('./src/controllers/contatoController'); // ? controllerContato
const { loginRequired } = require('./src/middlewares/middleware'); // ? loginRequired

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
            homeController.index, 
            function(req, res, next){
                console.log("Estou aqui");
            }
        );
    // todo Rotas de login
        //? Login
        route.get('/login/',loginController.index);
        
        // ? Registro
        route.post('/login/register/',loginController.register);
        
        // ? Login
        route.post('/login/login/',loginController.login);
        
        // ? Logout
        route.get('/login/logout/',loginController.logout);

    // todo Rotas de contato
        // ? Contato Pagina inicial
        route.get('/contato/', loginRequired, contatoController.paginaInicial);
        
        // ? Registro de contato
        route.post('/contato/register/', loginRequired, contatoController.register);
        
        // ? Edicao de contato
        route.get('/contato/:id/', loginRequired, contatoController.edit);
        
        // ? Edicao de contato
        route.post('/contato/edit/:id', loginRequired, contatoController.editId);
        
        // ? 
        route.get('/contato/delete/:id', loginRequired, contatoController.delete);

        
//! Exportacao do modulo
    module.exports = route;