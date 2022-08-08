import { Request, Response } from "express"
import ResultBusinessMRasos from "../business/ResultBusiness100MRasos"
import resultBusinessMRasos from "../business/ResultBusiness100MRasos"
import { registerResultMRasosDTO } from "../model/types"

export class Result100MRasosController {
    async registerResult100MRasos(req: Request, res: Response): Promise<void> {
        try {
            const { competition_name, athlete_name, highest_value, unity } = req.body
            const input: registerResultMRasosDTO = {
                competition_name,
                athlete_name,
                highest_value,
                unity
            }
            await resultBusinessMRasos.registerResult100MRasos(input)
            res.status(200).send('Result registered successfully')
        } catch (error: any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }
        async getRanking100MRasos(req: Request, res: Response): Promise<void> {
            try {
                const competition_name = '100m Rasos'
    
                const result = await ResultBusinessMRasos.getRanking100MRasos(competition_name)
    
                res.status(200).send(result)
            } catch (error: any) {
                const { statusCode, message } = error
                res.status(statusCode || 400).send({ message })
        }
    }
}

export default new Result100MRasosController(
)

