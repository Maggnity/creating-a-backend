import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', userController.index)
/* router.get('/', userController.show) */

router.post('/', userController.store)
router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

export default router;


/*
 * index -> lista todos os usuarios
 * store/create -> cria um novo usuario
 * delete -> apaga um usuario
 * show -> mostra um usuario
 * update -> atualiza um usuario
*/