import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);

router.post('/novo-usuario', UserController.novoUsuario); 


export default router;