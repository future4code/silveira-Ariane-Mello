import { CustomError } from "../error/CustomError";
import { registerResultsDB, registerResultsDTO } from "../model/types";
import { IdGenerator } from "../services/idGenerator";
import { ResultDatabase } from "../data/ResultDatabase";
import { CompetitionDatabase } from "../data/CompetitionDatabase";

export class ResultBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private competitionDataBase: CompetitionDatabase,
        private resultDatabase: ResultDatabase
    ) { }
    async registerResult(input: registerResultsDTO) {
        try {
            const { competition_name, athlete_name, value, unity } = input
            if (!competition_name || !athlete_name || !value || !unity) {
                throw new CustomError(422, 'Invalid Parameter')
            }

            const competition = await this.competitionDataBase.searchCompetition(competition_name)
            if (competition.length === 0) {
                throw new CustomError(422, 'Competition not found')
            }

            this.dateCompare(competition[0].end_date)

            const id_athlete = this.idGenerator.generateId()

            const register: registerResultsDB = {
                id_athlete,
                competition_name,
                athlete_name,
                value,
                unity
            }
            await this.resultDatabase.registerResult(register)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
    private dateCompare = (end_date: string) => {
        const revertedDate = end_date.split('/').reverse().join('/') //2022/07/26 = [2022,07,26] = '26/07/2022'
        const dateNow = Date.now()
        const competitionClosed = new Date(revertedDate).getTime()
        if ((competitionClosed - dateNow) < 0) {
            throw new CustomError(422, 'Competition closed')
        }
    }
}

export default new ResultBusiness(
    new IdGenerator(),
    new CompetitionDatabase(),
    new ResultDatabase()
)