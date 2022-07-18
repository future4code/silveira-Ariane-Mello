import { Request, Response } from "express";
import queryGetAllProduct from "../query/queryGetAllProduct";

export default async function allProduct(req: Request, res: Response) {
    try {
        const result = await queryGetAllProduct()
        res.status(200).send(result)
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
};

