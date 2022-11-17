const Contato = require('../models/ContatoModel');

// ! 
    exports
        .index = async (req, res, next) => {
            const contatos = await Contato.buscaContato();
            
            res.render('index', { contatos });
    };