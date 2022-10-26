// ! 
    exports
        .paginaInicial = (req, res, next) => {
            console.log(req.flash('error'), req.flash('success'), req.flash('info'));
            res.render('index');


            next();
            return;
    };


// !
    exports
        .trataPost = (req, res, next) => {
            res.send("Ei sou sua nova rota de POST");
            return;
        };
