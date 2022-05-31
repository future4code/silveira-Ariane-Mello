import express from "express";
import cors from "cors";

const app = express();

//Dados backend -> frontend no formato JSON.
app.use(express.json());

//API sem erro de CORS.
app.use(cors());

app.get('/ping', (request, response) => {
    response.send('Pong! 🏓')
});

type Tasks = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const tasks: Tasks[] = [
    {
        "userId": 1,
        "id": 1,
        "title": 'Acordar',
        "completed": true
    },
    {
        "userId": 2,
        "id": 2,
        "title": 'Tomar café da manhã',
        "completed": true
    },
    {
        "userId": 3,
        "id": 3,
        "title": 'Fazer atividade física',
        "completed": false
    }
];

app.get('/tasks', (request, response) => {
    const done = tasks.filter((item) => {
        return item.completed == true
    })
    const sucesso = {
        message: 'Tarefa concluída ✔',
        done: done
    }
    response.send(sucesso)
});

app.post('/newtasks', (request, response) => {
    const users: number = Number(request.headers.authorization)
    const titleTask = request.body.title
    const id = tasks.length + 1

    const newTasks: Tasks = {
        userId: users,
        id: id,
        title: titleTask,
        completed: request.body.completed
    }
    tasks.push(newTasks)
    response.send(tasks)
});

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});