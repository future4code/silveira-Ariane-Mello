import { Request, Response } from "express";
import queryGetAllUser from "../query/queryGetAllUser";

export default async function allUser(req: Request, res: Response){
    try {
        const result = await queryGetAllUser()
        res.status(200).send(result)
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
};

