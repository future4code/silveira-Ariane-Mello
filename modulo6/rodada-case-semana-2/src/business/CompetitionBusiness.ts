import { CustomError } from "../error/CustomError";
import { createCompetitionDB, createCompetitionDTO } from "../model/types";
import { IdGenerator } from "../services/idGenerator";
import { CompetitionDatabase } from "../data/CompetitionDatabase";

export class CompetitionBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private competitionDataBase: CompetitionDatabase
    ) { }
    async createCompetition(input: createCompetitionDTO) {
        try {
            const { competition_name, start_date, end_date } = input
            if (!competition_name || !start_date || !end_date) {
                throw new CustomError(422, 'Invalid Parameter')
            }
            const id_competition = this.idGenerator.generateId()
            const create: createCompetitionDB = {
                id_competition,
                competition_name,
                start_date,
                end_date
            }
            await this.competitionDataBase.createCompetition(create)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}

export default new CompetitionBusiness(
    new IdGenerator(),
    new CompetitionDatabase()
)