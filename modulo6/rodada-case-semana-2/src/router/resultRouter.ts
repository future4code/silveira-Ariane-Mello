import { Router } from "express";
import resultController from "../controller/ResultController";

export const resultRouter = Router()

resultRouter.post('/register', resultController.registerResult)