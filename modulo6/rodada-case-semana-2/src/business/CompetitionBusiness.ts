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
            const { name, date, status_competition } = input
            if (!name || !date) {
                throw new CustomError(422, 'Invalid Parameter')
            }
            const id = this.idGenerator.generateId()
            const create: createCompetitionDB = {
                id,
                name,
                date,
                status_competition
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