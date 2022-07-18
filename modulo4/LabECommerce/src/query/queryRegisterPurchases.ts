import { connection } from "../connection";

export default async function queryRegisterPurchases(id: string, user_id: string, product_id: string, quantity: number, total_price: number): Promise<any> {
    return await connection
        .into('labecommerce_purchases')
        .insert({ id, user_id, product_id, quantity, total_price })
};
