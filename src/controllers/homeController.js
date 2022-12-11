import Aluno from "../models/alunoModel";

class HomeController {
    ler(){
		console.log(`consigo ler`);
	}

	async index(req, res){

		const novoAluno = await Aluno.create({
			nome: 'Luana',
			sobrenome: 'Martins',
			email: 'luanamartins11@hotmail.com',
			idade: 26,
			peso: 1.54,
			altura: 1.62

		})

		res.json(novoAluno)
    }
}

export default new HomeController();