const Login = require("../models/LoginModel");


// ? Login Index 
exports.index = (req, res) => {
    console.log(req.session.user);
    if(req.session.user) return res.render('login-logado')
    res.render("login");
};

// ? Login Registro
exports.register = async function (req, res) {
    console.log("Estou aqui")
    try {
        const login = new Login(req.body);
        await login.register();
        
        if (login.errors.length > 0) {
            console.log(login.errors);
            req.flash("errors", login.errors);
            req.session.save(function () {
                return res.redirect("/login");
            });
            return;
        }
        
        req.flash('success', 'Seu usuario foi criado com sucesso')
        req.session.save(function(){
            return res.redirect('back');
        })


    } catch (e) {
        console.log(e);
        return res.render("404");
    }
};

// ? Login Login
exports.login = async function (req, res) {
    try {
        const login = new Login(req.body);
        await login.login();

        // ! Se tiver erros returna
        if (login.errors.length > 0) {
            req.flash("errors", login.errors);
            req.session.save(function () {
                return res.redirect("back");
            });
            return;
        }
        
        // ! Mensasgem de sucesso
        req.flash('success', 'Login realizado');
        req.session.user = login.user

        req.session.save(function(){
            return res.redirect('/');
        })


    } catch (e) {
        console.log(e);
        return res.render("404");
    }


};

// ? Login Logout
exports.logout = function(req, res) {
    req.session.destroy();
    return res.redirect('/');
};