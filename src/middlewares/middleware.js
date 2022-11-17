
// ! MIDDLEWARE GLOBAL
exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors')
    res.locals.success = req.flash('success')
    res.locals.user =  req.session.user;
    next();
};

// ! OUTRO MIDDLEWARE
exports.outroMiddleware = (req, res, next) => {
    console.log("Aqui um outro middleware");

    next();
}
// ! Checa se ha qualquer erro
exports.checkCsrfError = (err, req, res, next) => {
    if(err){
        return res.render(`404`);
    };
    next();
};

// ! OUTRO MIDDLEWARE
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};

exports.loginRequired = (req, res, next) => {
    if(!req.session.user) {
        req.flash('errors', 'Voce precisa fazer login.');
        req.session.save(() => res.redirect('/'));
        return
    }
    next();
}
