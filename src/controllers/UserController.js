import User from "../models/userModel";

class UserController {

	async store(req, res){
		try {
			const novoUser = await User.create(req.body);
			const { id, nome, email } = novoUser
			return res.json({id, nome, email});
		} catch (error) {
			console.log(error);
			return res.status(400).json({errors: error.errors.map((err) => err.message)});
		};
    };

	async index(req, res){
		try {
			const users = await User.findAll({
				attributes: ['id','nome', 'email']
			});
			return res.json(users)
		} catch (error) {
			return res.json(null);
		}
	}

	async show(req, res){
		try {

			const { id } = req.params;

			const user = await User.findByPk(id);

			return res.json(user)

		} catch (error) {

			return res.status(400).json({errors: error.errors.map((err) => err.message)});


		 }
	}

	async update(req, res){
		try {

			const id = req.userId;

			if(!id){
				return res.status(400).json({
					errors: ['Id nao encontrado']
				})
			}

			const user = await User.findByPk(id);

			if(!user){
				return res.status(400).json({
					errors: ['Usuario nao existe']
				})
			}

			const updateUser = await user.update(req.body)

			const { nome, email } = updateUser

			return res.json({id, nome, email})

		} catch (error) {
			return res.status(400).json({errors: error.errors.map((err) => err.message)});


		 }
	}

	async delete(req, res){
		try {

			const { id } = req.userId;
			console.log(id);

			if(!id){
				return res.status(400).json({
					errors: ['Id nao encontrado']
				})
			}

			const user = await User.findByPk(id);

			if(!user){
				return res.status(400).json({
					errors: ['Usuario nao existe']
				})
			}

			await user.destroy();

			return res.json(`Usuario apagado`)

		} catch (error) {
			return res.status(400).json({errors: error.errors.map((err) => err.message)});


		 }
	}
};

export default new UserController();