import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'

const router = Router();

router.post('/users', new CreateUserController().handle)

export { router };

//Linha 6: Ao colocar o 'return', o código apresenta erro no (req, res)...