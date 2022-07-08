import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    private static tableName = "User";

    public insertUser = async (user: User): Promise<void> => {
        try {

            await BaseDatabase.connection()
                .insert({
                    id: user.getId(),
                    email: user.getEmail(),
                    password: user.getPassword(),
                    role: user.getRole(),
                })
                .into(UserDatabase.tableName)


        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public getUserByEmail = async (email: string): Promise<User | undefined> => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(UserDatabase.tableName)
                .where({ email })

            return result[0] ? new User(result[0].id, result[0].email, result[0].password, result[0].role) : undefined
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public getUserById = async (id: string): Promise<User | undefined> => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(UserDatabase.tableName)
                .where({ id })

            return result[0] ? new User(result[0].id, result[0].email, result[0].password, result[0].role) : undefined
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}