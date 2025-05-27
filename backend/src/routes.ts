import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController';

const router = Router();

router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

export { router };

//Linha 6: Ao colocar o 'return', o código apresenta erro no (req, res)...