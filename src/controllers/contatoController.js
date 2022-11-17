const Contato = require("../models/ContatoModel");

exports.paginaInicial = (req, res) => {
    res.render('contato', { 
        contato: {
            nome: '',
            sobrenome: '',
            telefone: '',
            email: '',
    }});
};

exports.register = async(req, res) => {
    console.log("Salvando contato");
    try {
        const contato = new Contato(req.body);
        await contato.register();

    if(contato.errors.length > 0) {
        req.flash('errors', contato.errors);
        req.session.save(() => res.redirect('/contato'));
        return;
    };

    req.flash('success', 'Contato registrado com sucesso.');
        req.session.save(() => res.redirect(`/contato/${contato.contato._id}`));
        return;
    } catch (e) {
        console.log(e);
        return res.render('404')
    };
};


exports.edit = async(req, res) => {
    // * [] Checks
    if(!req.params.id) return res.render('404');
    
    const contato = await Contato.prototype.buscaPorId(req.params.id);
    if(!contato) return res.render('404');

    // * render contato
    res.render('contato', { contato });


};

exports.editId = async function(req, res) {
    try {
        // * [] Checks
            if(!req.params.id) return res.render('404');
            
            const contato = new Contato(req.body);
            await contato.editId(req.params.id);


            if(!contato) return res.render('404');

            if(contato.errors.length > 0) {
                req.flash('errors', contato.errors);
                req.session.save(() => res.redirect('back'));
                return;
            };

            req.flash('success', 'Contato editado com sucesso.');
            req.session.save(() => res.redirect(`/contato/${contato.contato._id}`));
            return;
    } catch (e) {
        console.log(e);
        res.render('404');
    }
    
    
    

    // * render contato
    res.render('contato', { contato });


};

exports.delete = async function (req, res) {
    if(!req.params.id) return res.render('404');

    const contato = await Contato.delete(req.params.id)
    if(!contato) return res.render('404');

    req.flash('success', 'Contato apagado com sucesso.');
    req.session.save(() => res.redirect('back'));
};