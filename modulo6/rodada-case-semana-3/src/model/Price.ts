import { CustomError } from "../error/CustomError"

export class Price {
    priceDogWalk(duration: string, pets: number) {
        switch (duration) {
            case '30':
                return 25 + (pets > 1 ? (pets - 1) * 15 : 0)
            case '60':
                return 35 + (pets > 1 ? (pets - 1) * 15 : 0)
            default:
                throw new CustomError(422, 'Invalid Parameter')
        }
    }
}