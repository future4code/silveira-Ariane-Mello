import { Router } from "express";
import competitionController from "../controller/CompetitionController";

export const competitionRouter = Router()

competitionRouter.post('/create', competitionController.createCompetition)