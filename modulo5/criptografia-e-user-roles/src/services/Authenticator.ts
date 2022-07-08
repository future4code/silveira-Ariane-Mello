import { sign, verify } from "jsonwebtoken"
import { authenticationData } from "../types"
import dotenv from "dotenv"

dotenv.config()
export class Authenticator {

    generateToken = (payload: authenticationData) => {
        const token = sign(
            {
                id: payload.id,
                role: payload.role
            },
            process.env.JWT_KEY as string,
            { expiresIn: process.env.JWT_EXPIRES_IN as string }
        )

        return token
    }

    getTokenData = (token: string): authenticationData => {
        const payload = verify(token, process.env.JWT_KEY as string) as any

        const result = {
            id: payload.id,
            role: payload.role
        }

        return result
    }
}