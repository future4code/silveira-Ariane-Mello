import { CustomError } from "../error/CustomError";
import { IdGenerator } from "../services/idGenerator";
import { DogWalkDatabase } from "../data/DogWalkDatabase";
import { dogWalkDB, dogWalkDTO } from "../model/types";
import { Price } from "../model/Price";

export class DogWalkBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private dogWalkDatabase: DogWalkDatabase,
        private price: Price
    ) { }
    async createDogWalk(input: dogWalkDTO) {
        try {
            const { date, duration, latitude, longitude, pets, start_time, end_time } = input
            if (!date || !duration || !latitude || !longitude || !pets || !start_time || !end_time) {
                throw new CustomError(422, 'Invalid Parameter')
            }
          
            const id = this.idGenerator.generateId()
            const status = 'SCHEDULED'
            const price = this.price.priceDogWalk(duration, pets)
            const create: dogWalkDB = {
                id,
                status,
                price,
                date,
                duration,
                latitude,
                longitude,
                pets,
                start_time,
                end_time
            }
            await this.dogWalkDatabase.createDogWalk(create)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
    async getDogWalk(id: string) {
        try {
            if (!id) {
                throw new CustomError(422, 'Invalid Parameter')
            }

            const walk = await this.dogWalkDatabase.getDogWalk(id)

            return walk
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}

export default new DogWalkBusiness(
    new IdGenerator(),
    new DogWalkDatabase(),
    new Price()
)