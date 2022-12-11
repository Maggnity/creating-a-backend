import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

const router = new Router();

router.get('/aluno', alunoController.criarAluno)

export default router;