import { Router } from "express"
import dogWalkController from "../controller/DogWalkController"

export const dogHeroRouter = Router()

dogHeroRouter.post('/createDogWalk', dogWalkController.createDogWalk)
dogHeroRouter.get('/getWalkDog/:id', dogWalkController.getWalkDog)