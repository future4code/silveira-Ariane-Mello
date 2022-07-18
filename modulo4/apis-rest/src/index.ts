import express from "express";
import cors from "cors";
import { Users, users } from "./data";

const app = express();

//Dados backend -> frontend no formato JSON.
app.use(express.json());

//API sem erro de CORS.
app.use(cors());

app.get('/users', (req, res) => {
    const { id, name, email, type, age } = req.body
    let errorCode: number = 400

    try {
        if (!id || !name || !email || !type || !age) {
            errorCode = 404
            throw new Error('User not found')
        }
        res.status(200).send(users)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
});

app.get('/users/userType/:userType', (req, res) => {
    let errorCode: number = 400

    try {
        const userType: string = req.params.userType.toUpperCase()
        if (!userType) {
            errorCode = 404
            throw new Error('Type not found')
        }
        const admin = users.filter((user) => user.type === 'ADMIN')
        res.status(200).send(admin)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
});

app.get('/user', (req, res) => {
    let errorCode: number = 400

    try {
        const name: string = req.query.name as string
        const user: Users | undefined = users.find((user) => user.name === name)
        if (!user) {
            errorCode = 404
            throw new Error('User not found')
        }
        res.status(200).send(user)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
});

app.post('/users', (req, res) => {
    const { id, name, email, type, age } = req.body
    let errorCode: number = 400

    try {
        if (!id || !name || !email || !type || !age) {
            errorCode = 422
            throw new Error('Invalid parameter')
        }
        const newUser: Users = {
            id,
            name,
            email,
            type,
            age
        }
        users.push(newUser)
        res.status(200).send(users)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
});

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

