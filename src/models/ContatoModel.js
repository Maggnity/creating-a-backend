const mongoose = require('mongoose');
const validator = require('validator');


// ! Schema 
// *Sao os dados do objeto 
    const ContatoSchema = new mongoose.Schema({
        nome: {
            type: String, 
            required: true },
        sobrenome: { 
            type: String, 
            required: false, 
            default: '' 
        },
        telefone: { 
            type: String, 
            required: false, 
            default: '' 
        },
        email: { 
            type: String, 
            required: false, 
            default: '' 
        },
        criadoEm: { 
            type: Date, 
            default: Date.now
        },
    });

const ContatoModel = mongoose.model('Contato', ContatoSchema)


// ! Funcao responsavel por criar o objeto
    function Contato(body) {
        this.body = body;
        this.errors = [];
        this.contato = null;
    };




// ! Registro de um novo contato 
    Contato.prototype.register = async function() {
        this.valida();

        // * Impede avanco caso ocorra algum erro
            if(this.errors.length > 0) return;

        // * Cria o contato na DB caso erros nao sejam encontrados 
            this.contato = await ContatoModel.create(this.body);
    };

// ! Validacao
    Contato.prototype.valida = function() {
    
    // ? [x] O e-mail precisa ser valido
        if(this.body.email && !validator.isEmail(this.body.email)) {
            this.errors.push('E-mail invalido')
        };

    // ? [x] O nome eh obrigatorio!    
        if(!this.body.nome){
            this.errors.push('Nome eh um campo obrigatorio')
        };

    // ? [x] Pelo menos uma forma de contato precisa ser registrada!
        if(!this.body.email && !this.body.telefone) {
        this.errors.push('Pelo menos um tipo de contato precisa ser cadasstrado.')
    };

    
    this.cleanUp();
    };


// ! Limpeza
    Contato.prototype.cleanUp = function() {
        for(const key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key]= ''
            }
        }
        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            email: this.body.email,
            telefone: this.body.numero,
        };
    };



Contato.prototype.editId = async function(id){
    if(typeof id !== 'string') return;

    this.valida();
    if(this.errors.length > 0) return;

    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true});
};


// ! Metodos estaticos

// ! Busca por Id
Contato.prototype.buscaPorId = async function(id) {
    // * Impede avanco se id nao for string 
        if(typeof id !== 'string') return;

    const contato = await ContatoModel.findById(id)
    console.log(id)
    return contato;
}

Contato.buscaContato = async function() {
    const contatos = await ContatoModel.find().sort({ criadoEm: -1})
    return contatos;
}

Contato.delete = async function(id) {
    if(typeof id !== 'string') return;
    const contatos = await ContatoModel.findOneAndDelete({_id: id})
    if(!contatos) return res.render('404');
    return contatos;

}

module.exports = Contato;