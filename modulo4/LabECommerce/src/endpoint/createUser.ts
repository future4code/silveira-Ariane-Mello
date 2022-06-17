import { Request, Response } from "express";
import queryCreateUser from "../query/queryCreateUser";


export default async function createUser(req: Request, res: Response): Promise<void> {
    const { id, name, email, password } = req.body
    try {
        await queryCreateUser(id, name, email, password)
        res.status(200).send('User created successfully')
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
};

