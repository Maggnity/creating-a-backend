exports.middlewareGlobal = (req, res, next) => {
    console.log();
    console.log("Passei no middleware global");
    console.log();

    next()
}

exports.outroMiddleware = (req, res, next) => {
    console.log();
    console.log("Aqui um outro middleware");
    console.log();

    next()
}