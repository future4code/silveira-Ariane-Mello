import { Request, Response } from "express";
import queryRegisterPurchases from "../query/queryRegisterPurchases";

export default async function registerPurchases(req: Request, res: Response) {
    const { id, user_id, product_id, quantity, total_price } = req.body
    try {
        await queryRegisterPurchases(id, user_id, product_id, quantity, total_price)
        res.status(200).send('Successful purchase')
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
};
