import { Request, Response } from "express"
import resultBusiness from "../business/ResultBusiness"
import { registerResultsDTO } from "../model/types"

export class ResultController {
    async registerResult(req: Request, res: Response): Promise<void> {
        try {
            const { competition_name, athlete_name, value, unity } = req.body
            const input: registerResultsDTO = {
                competition_name,
                athlete_name,
                value,
                unity
            }
            await resultBusiness.registerResult(input)
            res.status(200).send('Result registered successfully')
        } catch (error: any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }
}

export default new ResultController(
)

