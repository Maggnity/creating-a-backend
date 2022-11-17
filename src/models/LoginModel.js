const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const LoginSchema = new mongoose.Schema({
    email: {type: String, required: true },
    password: {type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    };

    // ! Login
    async login(){
        this.valida();

        // todo Se há erros para por aí
        if(this.errors.length > 0) return;

        // todo Busca se usurio existe
        this.user = await LoginModel.findOne({ email: this.body.email });
        
        // todo Compara se uauário existe
        if(!this.user) {
            console.log("Usuario nao existe");
            this.errors.push("Usuário não exite!")
            return;
        } 
        
        //todo Compara a senha com base de dados
        if(!bcrypt.compareSync(this.body.password, this.user.password)){
            this.errors.push('Senha inválida');
            this.user = null;}
            return;
        }



    // ! Registro
    async register() {
        
        console.log("resgistrando");
        this.valida();
        
        if(this.errors.length > 0) return;

        console.log(this.errors);

        await this.userExists();
        
        const salt = bcrypt.genSaltSync();
        this.body.password = bcrypt.hashSync(this.body.password, salt);
        
        try {
            this.user = await LoginModel.create(this.body);
        } catch (e) {
            console.log(e);
        }
    }

    async userExists() {
        this.user = await LoginModel.findOne({ email:this.body.email });

        if(this.user) {
            this.errors.push('Usuario ja existe')
        }

    }

    // ! Validacao
    valida() {
        // ? [] O e-mail precisa ser valido
        // ? [] A senha precisa ter entre 3 e 50
        // ? [] O email cadastrado deve ser único
        console.log("Validando informacoes");

        if(!validator.isEmail(this.body.email)) {
            console.log('E-mail invalido');
            this.errors.push('E-mail invalido')
        };

        if(this.body.password.length < 3 || this.body.password.length >= 50) {
            this.errors.push('A senha precisa ter de 3 a 50 caracteres.')
        };
        
        this.cleanUp();
    };

    cleanUp() {
        for(const key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key]= ''
            }
        }
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login;

// todo Models:
// * Onde Ocorrem validacoes dos dados