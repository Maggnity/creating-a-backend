import Sequelize, { Model } from 'sequelize';

export default class Foto extends Model {
	static init(sequelize) {
		super.init({
			originalname: {
				type: Sequelize.STRING,
				defaultValue: '',
				validate: {
					notEmpty: {
						msg: 'Campo não pode ser vazioooo'
					}
				}
			},
			filename: {
				type: Sequelize.STRING,
				defaultValue: '',
				validate: {
					notEmpty: {
						msg: 'Campo não pode ser vazio'
					}
				}
			},

		}, {
			sequelize,
		})
		return this;
	}

	static associate(models) {
		this.belongsTo(models.Aluno, { foreignKey: 'aluno_id'})
	}
}