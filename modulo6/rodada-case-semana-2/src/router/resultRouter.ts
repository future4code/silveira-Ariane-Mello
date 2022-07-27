import { Router } from "express";
import resultDardoController from "../controller/ResultDardoController";
import resultMRasosController from "../controller/Result100MRasosController";

export const resultRouter = Router()

resultRouter.post('/register/dardo', resultDardoController.registerResultDardo)

resultRouter.post('/register/100mrasos', resultMRasosController.registerResult100MRasos)

resultRouter.get('/ranking/dardo', resultDardoController.getRankingDardo)

resultRouter.get('/ranking/100mrasos', resultMRasosController.getRanking100MRasos)