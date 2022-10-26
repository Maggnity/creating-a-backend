//? IMPORTS
    require('dotenv').config();
    const express = require('express');
    const app = express();
    const mongoose = require('mongoose');
    const session = require('express-session');
    const MongoStore = require('connect-mongo');
    const flash = require('connect-flash');
    const routes = require('./routes');
    const path = require('path');
    const { middlewareGlobal } = require('./src/middlewares/middleware');

//? CONSTS
    const sessionOptions = session({
        secret: 'maggnity',
        store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000*60*60*24*7,
            httpOnly: true
        }
    })
//! CONNECTION
    mongoose
        .connect(
            process.env.CONNECTIONSTRING, { 
                useNewUrlParser: true, 
                useUnifiedTopology: true
            }
        )
        .then(()=> {
            console.log('conectei a base de dados');
            app.emit(`pronto`)
        })
        .catch(
            e=>console.log(e)
        );

//! CHECK STATUS
app.on('pronto', () => {
    app.listen(3333, () => {
        console.log("Acessar http://localhost:3333");
        console.log("Servidor executando na porta 3333");
    })
})

//?

    app.use(sessionOptions);
    app.use(flash());

    app.use(express.urlencoded({ extended: true}));
    app.use(express.static(path.resolve(__dirname, 'public')))
    app.set('views', path.resolve(__dirname, 'src', 'views'))
    app.set('view engine', 'ejs');
    app.connect('localhost')


//! Invocando middlewares E ROTAS
    app.use(middlewareGlobal)
    app.use(routes);





//        Criar   Ler       atualizar   deletar
//CRUD -> CREATE, READ,     UPDATE,     DELETE
//        POST    GET       PUT         DELETE