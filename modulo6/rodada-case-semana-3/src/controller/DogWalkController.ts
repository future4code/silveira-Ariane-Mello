import { Request, Response } from "express"
import dogWalkBusiness from "../business/DogWalkBusiness"
import { dogWalkDTO } from "../model/types"

export class DogWalkController {
    async createDogWalk(req: Request, res: Response): Promise<void> {
        try {
            const { date, duration, latitude, longitude, pets, start_time, end_time } = req.body
            const input: dogWalkDTO = {
                date,
                duration,
                latitude,
                longitude,
                pets,
                start_time,
                end_time
            }
            dogWalkBusiness.createDogWalk(input)
            res.status(200).send('Dog Walk created successfully')
        } catch (error: any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }
}

export default new DogWalkController(
)
