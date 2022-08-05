import { CustomError } from "../error/CustomError";
import { dogWalkDB } from "../model/types";
import { BaseDatabase } from "./BaseDatabase";

export class DogWalkDatabase extends BaseDatabase {
    async createDogWalk(input: dogWalkDB) {
        try {
            await BaseDatabase.connection('dog_hero_walk')
                .insert(input)
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
    async getDogWalk(id: string) {
        try {
            const result = await BaseDatabase.connection('dog_hero_walk')
                .select('duration')
                .where({ id })

                return result
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
}