// ! 
    exports
        .paginaInicial = (req, res, next) => {
            res.render('index', {
                titulo: 'Este sera o titulo da pagina',
                numeros: [0,1,2,3,4,5,6,7,8,9]
            });


            next();
            return;
    };


// !
    exports
        .trataPost = (req, res, next) => {
            res.send("Ei sou sua nova rota de POST");
            return;
        };
