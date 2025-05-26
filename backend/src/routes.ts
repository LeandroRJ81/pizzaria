import { Router, Request, Response } from 'express';

interface IProps{
  req: Request;
  res: Response | any; 
}

const router = Router();

router.get('/teste', ({req, res}: IProps) => {
    return res.json({nome: "Leandro"});
  });

export { router };

//Linha 6: Ao colocar o 'return', o código apresenta erro no (req, res)...