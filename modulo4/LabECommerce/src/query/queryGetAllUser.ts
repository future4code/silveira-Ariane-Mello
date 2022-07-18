import { connection } from "../connection";

export default async function queryGetAllUser(): Promise<any> {
    return await connection('labecommerce_users')
        .select('*')
};