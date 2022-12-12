import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
	static init(sequelize) {
		super.init({
			nome: {
				type: Sequelize.STRING,
				defaultValue: '',
				validate: {
					len: {
						args: [3,255],
						msg: 'O nome precisa ter de 3 a 50 caracteres'
					}
				}
			} ,
			sobrenome: {
				type: Sequelize.STRING,
				defaultValue: '',
				validate: {
					len: {
						args: [3,255],
						msg: 'O sobrenome precisa ter de 3 a 50 caracteres'
					}
				}
			} ,
			email: {
				type: Sequelize.STRING,
				defaultValue: '',
				unique: {
					msg: "E-mail ja existe"
				},
				validate: {
					isEmail: {
						msg: 'E-mail invalido'
					}
				}
			},
			idade: {
				type: Sequelize.INTEGER,
				defaultValue: 0,
				validate: {
					isInt: {
						msg: 'A idade precisa ser um numero inteiro'
					}
				}
			},
			peso: {
				type: Sequelize.FLOAT,
				defaultValue: 0,
				validate: {
					isFloat: {
						msg: 'Peso precisa ser um numero inteiro ou de ponto flutuante'
					}
				}
			},
			altura: {
				type: Sequelize.FLOAT,
				defaultValue: 0,
				validate: {
					isFloat: {
						msg: 'Altura precisa ser um numero inteiro ou de ponto flutuante'
					}
				}
			},
		}, {
			sequelize,
		})
		return this;
	}

	static associate(models) {
		this.hasMany(models.Foto, { foreignKey: 'aluno_id'})
	}
}