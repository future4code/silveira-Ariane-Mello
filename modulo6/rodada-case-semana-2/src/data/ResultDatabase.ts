import { CustomError } from "../error/CustomError";
import { registerResultsDB } from "../model/types";
import { BaseDatabase } from "./BaseDatabase";

export class ResultDatabase extends BaseDatabase {
    async registerResult(input: registerResultsDB) {
        try {
            await BaseDatabase.connection('estante_virtual_result')
                .insert(input)
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
}
