import { Router, Request, Response } from 'express';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    res.json({ message: 'Hello, world!' });
  });

export { router };

//Linha 6: Ao colocar o 'return', o código apresenta erro no (req, res)...