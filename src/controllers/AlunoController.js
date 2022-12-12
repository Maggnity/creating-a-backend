import Aluno from "../models/alunoModel";
import Foto from "../models/fotoModel";

class AlunoController {

	async index(req, res) {
		const alunos = await Aluno.findAll({
			attributes: [
				'id',
				'nome',
				'sobrenome',
				'email',
				'idade',
				'peso',
				'altura'
			],
			order: [['id', 'DESC'], [Foto, 'id', 'desc']],
			include: {
				model: Foto,
				attributes: ['url', 'filename']
			}
		});
		res.json({ alunos })
	}

	async store(req, res) {
		try {
			const aluno = Aluno.create(req.body);

			return res.json({ aluno })
		} catch (error) {
			return res.status(400).json({
				errors: error.errors.map((err) => err.message)
			})
		}
	}

	async show(req, res) {

		try {
			const { id } = req.params;

			if (!id) return res.status(400).json({
				errors: ["Faltando id"]
			})

			const aluno = await Aluno.findByPk(id, {
				attributes: [
					'id',
					'nome',
					'sobrenome',
					'email',
					'idade',
					'peso',
					'altura'
				],
				order: [['id', 'DESC'], [Foto, 'id', 'desc']],
				include: {
					model: Foto,
					attributes: ['url', 'filename']
				}
			})

			if (!aluno) return res.status(400).json({
				errors: ["Aluno nao existe"]
			})

			return res.json({ aluno })
		} catch (error) {
			return res.status(400).json({
				errors: error.errors.map((err) => err.message)
			})
		}
	}

	async update(req, res) {
		try {
			const { id } = req.params;

			if (!id) return res.status(400).json({
				errors: ["Faltando id"]
			})

			const aluno = await Aluno.findByPk(id)

			if (!aluno) return res.status(400).json({
				errors: ["Aluno nao existe"]
			})

			const updateAluno = aluno.update(req.body)

			return res.json({ updateAluno })
		} catch (error) {
			return res.status(400).json({
				errors: error.errors.map((err) => err.message)
			})
		}
	}

	async delete(req, res) {
		try {
			const { id } = req.params;

			if (!id) return res.status(400).json({
				errors: ["Faltando id"]
			})

			const aluno = await Aluno.findByPk(id)

			if (!aluno) return res.status(400).json({
				errors: ["Aluno nao existe"]
			})

			await aluno.destroy({apagado: true})

			return res.json({ aluno })
		} catch (error) {
			return res.status(400).json({
				errors: error.errors.map((err) => err.message)
			})
		}
	}
}

export default new AlunoController();