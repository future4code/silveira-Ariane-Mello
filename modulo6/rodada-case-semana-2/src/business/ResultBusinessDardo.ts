import { CustomError } from "../error/CustomError";
import { registerResultDardoDTO, registerResultsDB } from "../model/types";
import { IdGenerator } from "../services/idGenerator";
import { ResultDatabase } from "../data/ResultDatabase";
import { CompetitionDatabase } from "../data/CompetitionDatabase";

export class ResultBusinessDardo {
    constructor(
        private idGenerator: IdGenerator,
        private competitionDataBase: CompetitionDatabase,
        private resultDatabase: ResultDatabase
    ) { }
    async registerResultDardo(input: registerResultDardoDTO) {
        try {
            const { competition_name, athlete_name, value_1, value_2, value_3, unity } = input
            if (!competition_name || !athlete_name || !value_1 || !value_2 || !value_3 || !unity) {
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
                value_1,
                value_2,
                value_3,
                unity
            }
            await this.resultDatabase.registerResultDardo(register)
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
    async getRankingDardo(competition_name: string) {
        try {
            const competition = await this.competitionDataBase.searchCompetition(competition_name)
            if (competition.length === 0) {
                throw new CustomError(422, 'Competition not found')
            }

            const ranking = await this.resultDatabase.getRankingDardo(competition_name)

            return ranking

            
            
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}

export default new ResultBusinessDardo(
    new IdGenerator(),
    new CompetitionDatabase(),
    new ResultDatabase()
)