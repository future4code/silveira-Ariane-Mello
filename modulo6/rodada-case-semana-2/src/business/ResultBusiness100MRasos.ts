import { CustomError } from "../error/CustomError";
import { registerResultDB, registerResultMRasosDTO } from "../model/types";
import { IdGenerator } from "../services/idGenerator";
import { ResultDatabase } from "../data/ResultDatabase";
import { CompetitionDatabase } from "../data/CompetitionDatabase";

export class ResultBusinessMRasos {
    constructor(
        private idGenerator: IdGenerator,
        private competitionDataBase: CompetitionDatabase,
        private resultDatabase: ResultDatabase
    ) { }
    async registerResult100MRasos(input: registerResultMRasosDTO) {
        try {
            const { competition_name, athlete_name, highest_value, unity } = input
            if (!competition_name || !athlete_name || !highest_value || !unity) {
                throw new CustomError(422, 'Invalid Parameter')
            }

            const competition = await this.competitionDataBase.searchCompetition(competition_name)
            if (competition.length === 0) {
                throw new CustomError(422, 'Competition not found')
            }

            this.dateCompare(competition[0].end_date)

            const id_athlete = this.idGenerator.generateId()

            const register: registerResultDB = {
                id_athlete,
                competition_name,
                athlete_name,
                highest_value,
                unity
            }
            await this.resultDatabase.registerResult100MRasos(register)
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
    async getRanking100MRasos(competition_name: string) {
        try {
            const competition = await this.competitionDataBase.searchCompetition(competition_name)
            if (competition.length === 0) {
                throw new CustomError(422, 'Competition not found')
            }

            const ranking = await this.resultDatabase.getRanking100MRasos(competition_name)

            return ranking
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}

export default new ResultBusinessMRasos(
    new IdGenerator(),
    new CompetitionDatabase(),
    new ResultDatabase()
)