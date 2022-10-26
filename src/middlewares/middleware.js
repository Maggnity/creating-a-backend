
// ! MIDDLEWARE GLOBAL
exports.middlewareGlobal = (req, res, next) => {
    console.log("Passei no middleware global");
    res.locals.umaVariavelLocal = 'Valor da variavel local';
    
    next();
}


// ! OUTRO MIDDLEWARE
exports.outroMiddleware = (req, res, next) => {
    console.log("Aqui um outro middleware");

    next();
}
// ! OUTRO MIDDLEWARE
exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code){
        return res.render();
    }
    next();
}

// ! OUTRO MIDDLEWARE
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}