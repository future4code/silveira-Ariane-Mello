import { CustomError } from "../error/CustomError";
import { registerResultsDB, registerResultsDTO } from "../model/types";
import { IdGenerator } from "../services/idGenerator";
import { ResultDatabase } from "../data/ResultDatabase";

export class ResultBusiness {
    constructor(
        private idGenerator: IdGenerator,
        // private competitionDataBase: CompetitionDatabase, //associar as verificações
        private resultDatabase: ResultDatabase
    ) { }
    async registerResult(input: registerResultsDTO) {
        try {
            const { competition_name, athlete_name, value, unity } = input
            if (!competition_name || !athlete_name || !value || !unity) {
                throw new CustomError(422, 'Invalid Parameter')
            }

            //preciso verificar os dados da competição no BD (data, etc).

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
}

export default new ResultBusiness(
    new IdGenerator(),
    new ResultDatabase()
)