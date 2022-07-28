import { CustomError } from "../error/CustomError";
import { registerResultDB, registerResultsDB } from "../model/types";
import { BaseDatabase } from "./BaseDatabase";

export class ResultDatabase extends BaseDatabase {
    async registerResultDardo(input: registerResultsDB) {
        try {
            await BaseDatabase.connection('estante_virtual_result_dardo')
                .insert(input)
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
    async registerResult100MRasos(input: registerResultDB) {
        try {
            await BaseDatabase.connection('estante_virtual_result_100m_rasos')
                .insert(input)
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
    async getRanking100MRasos(competition_name: string) {
        try {
            const result = await BaseDatabase.connection('estante_virtual_result_100m_rasos')
                .select('athlete_name', 'highest_value')
                .orderBy('highest_value', 'asc')

                return result
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
    async getRankingDardo(competition_name: string) {
        try {
            const result = await BaseDatabase.connection('estante_virtual_result_dardo')
            .select('athlete_name', 'highest_value') 
            .orderBy('highest_value', 'desc')

            return result 
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
}
