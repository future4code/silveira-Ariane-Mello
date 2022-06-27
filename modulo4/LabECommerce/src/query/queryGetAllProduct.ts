import { connection } from "../connection";

export default async function queryGetAllProduct(): Promise<any> {
    return await connection('labecommerce_products')
        .select('*')
};