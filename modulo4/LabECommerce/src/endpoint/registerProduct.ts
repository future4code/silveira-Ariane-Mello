import { Request, Response } from "express";
import queryRegisterProduct from "../query/queryRegisterProduct";

export default async function registerProduct(req: Request, res: Response): Promise<any> {
    const { name, price, image_url } = req.body
    try {
        await queryRegisterProduct(name, price, image_url)
        res.status(200).send('Product registered successfully')
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
};

