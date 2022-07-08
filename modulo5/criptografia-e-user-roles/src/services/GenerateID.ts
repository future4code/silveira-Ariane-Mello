import { v4 } from "uuid"

export class GenerateID {
    generateID = (): string => {
        return v4()
    }
}