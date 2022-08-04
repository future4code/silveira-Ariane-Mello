import { Request, Response } from "express"
import competitionBusiness from "../business/CompetitionBusiness"
import { createCompetitionDTO } from "../model/types"

export class CompetitionController {
    async createCompetition(req: Request, res: Response): Promise<void> {
        try {
            const { competition_name, start_date, end_date } = req.body
            const input: createCompetitionDTO = {
                competition_name,
                start_date,
                end_date
            }
            competitionBusiness.createCompetition(input)
            res.status(200).send('Competition created successfully')
        } catch (error: any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }
}

export default new CompetitionController(
)
