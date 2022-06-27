import * as jwt from 'jsonwebtoken';
import { AuthenticationData } from '../types';
import dotenv from 'dotenv';

dotenv.config();

export default class Authenticator {
    generateToken = (payload: AuthenticationData) => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: '1min'
            }
        )
    };

    getTokenData = (token: string) => {
        const tokenData = jwt.verify(
            token, process.env.JWT_KEY as string,
        )
        return tokenData
    }
};

    export const getData = (token: string) => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
    const result = {
        id: payload.id,
    };
    return result;
};