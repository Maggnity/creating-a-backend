import Aluno from "../models/alunoModel";

class AlunoController {

	async criarAluno(req, res){

		const novoAluno = await Aluno.create({
			nome: 'Luke',
			sobrenome: 'Martins',
			email: 'lukemartins11@hotmail.com',
			idade: 5,
			peso: 8,
			altura: 0.34

		})

		res.json(novoAluno)
    }
}

export default new AlunoController();