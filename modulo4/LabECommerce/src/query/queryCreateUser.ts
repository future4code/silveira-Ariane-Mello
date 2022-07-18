import { connection } from "../connection";

export default async function queryCreateUser(id: string, name: string, email: string, password: string): Promise<void> {
    return await connection
        .into('labecommerce_users')
        .insert({ id, name, email, password })
};