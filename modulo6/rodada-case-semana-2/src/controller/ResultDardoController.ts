import { Request, Response } from "express"
import ResultBusinessDardo from "../business/ResultBusinessDardo"
import resultBusinessDardo from "../business/ResultBusinessDardo"
import { registerResultDardoDTO } from "../model/types"

export class ResultDardoController {
    async registerResultDardo(req: Request, res: Response): Promise<void> {
        try {
            const { competition_name, athlete_name, highest_value, average_value, lowest_value, unity } = req.body
            const input: registerResultDardoDTO = {
                competition_name,
                athlete_name,
                highest_value,
                average_value,
                lowest_value,
                unity
            }
            await resultBusinessDardo.registerResultDardo(input)
            res.status(200).send('Result registered successfully')
        } catch (error: any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }
    async getRankingDardo(req: Request, res: Response): Promise<void> {
        try {
            const competition_name = 'Dardo'

            const result = await ResultBusinessDardo.getRankingDardo(competition_name)

            res.status(200).send(result)
        } catch (error: any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
    }
}
}

export default new ResultDardoController(
)

