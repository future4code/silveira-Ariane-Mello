import { connection } from "../connection";

export default async function queryRegisterProduct(name: string, price: number, image_url: string): Promise<any> {
    return await connection
        .into('labecommerce_products')
        .insert({name, price, image_url})
};