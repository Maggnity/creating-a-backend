import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.store)
router.get('/', loginRequired, userController.index)
router.get('/:id', userController.show)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

export default router;


/*
 * index -> lista todos os usuarios
 * store/create -> cria um novo usuario
 * delete -> apaga um usuario
 * show -> mostra um usuario
 * update -> atualiza um usuario
*/