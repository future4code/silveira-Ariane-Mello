import { compare } from "bcryptjs";
import { Hash } from "crypto";
import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { GenerateID } from "../services/GenerateID";
import { HashManager } from "../services/HashManager";
import { authenticationData } from "../types";

export class UserController {

    public createUser = async (req: Request, res: Response) => {
        try {
            const { email, password, role } = req.body

            if (!email || !password) {
                res.statusCode = 400
                throw new Error("Invalid parameter")
            }

            if (email.indexOf("@") === -1) {
                res.statusCode = 400
                throw new Error("Please, check your e-mail address")
            }

            if (password.length < 6) {
                res.statusCode = 400
                throw new Error("Invalid password. At least six characters are required")
            }

            const userDB = new UserDatabase()

            const user = await userDB.getUserByEmail(email)

            if (user) {
                res.statusCode = 400
                throw new Error("Error, already existing user")
            }

            const id = new GenerateID().generateID()

            const hashManager = new HashManager()

            const passwordCriptografada = hashManager.createHash(password)

            const newUser = new User(
                id,
                email,
                passwordCriptografada,
                role,
            )

            await userDB.insertUser(newUser)

            const token = new Authenticator().generateToken({
                id,
                role,
            })

            res.status(200).send({
                message: "User created successfully",
                token
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                res.statusCode = 400
                throw new Error("Invalid parameter")
            }

            const userDB = new UserDatabase()

            const user = await userDB.getUserByEmail(email)

            // const passwordCriptografada = new HashManager().compareHash(password, user.password)

            if (!user) {
                res.statusCode = 400
                throw new Error("User does not exist")
            }


            const token = new Authenticator().generateToken({
                id: user!.getId(),
                role: user!.getRole(),
            })

            res.status(200).send({
                message: "Iser logged in successfully",
                token
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    public getUserProfile = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            const authenticator = new Authenticator()
            const tokenData = authenticator.getTokenData(token) as authenticationData

            if (!tokenData) {
                res.statusCode = 401
                throw new Error("Unauthorized, invalid token")
            }

            if (tokenData.role !== "normal") {
                throw new Error("Only a normal user can access this funcionality");
            }

            console.log(tokenData.id)

            const userDB = new UserDatabase()

            const user = await userDB.getUserById(tokenData.id)

            if (!user) {
                res.statusCode = 400
                throw new Error("User does not exist")
            }

            res.status(200).send({
                id: user.getId(),
                email: user.getEmail(),
                role: user.getRole()
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }
}