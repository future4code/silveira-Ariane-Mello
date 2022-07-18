import express from "express";
import cors from "cors";

const app = express();

//Dados backend -> frontend no formato JSON.
app.use(express.json());

//API sem erro de CORS.
app.use(cors());

app.get('/', (request, response) => {
    response.send('Hello from Express!')
});

app.get('/users', (request, response) => {
    response.status(200).send(users)
});

type Users = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

const users: Users[] = [
    {
        "id": 1,
        "name": "Fernando Escarlate",
        "phone": 12940079900,
        "email": "fernando@outlook.com",
        "website": "https://twitter.com/nandoh"
    },
    {
        "id": 2,
        "name": "Ariane Tier",
        "phone": 12947507400,
        "email": "ariane@outlook.com",
        "website": "https://github.com/future4code/silveira-Ariane-Mello"
    },
    {
        "id": 3,
        "name": "Brisa Tier Escarlate",
        "phone": 12963861000,
        "email": "brisa@outlook.com",
        "website": "https://www.instagram.com/brisa_frenchie/"
    },
];

app.get('/posts', (request, response) => {
    response.status(200).send(posts)
});

type Posts = {
    id: number,
    title: string,
    body: string,
    userId: number
}

let posts: Posts[] = [
    {
        "id": 1,
        "title": "Twitter",
        "body": "Quem com memes fere com memes será ferido.",
        "userId": 1,
    },
    {
        "id": 2,
        "title": "Bio",
        "body": "Estudante Full Stack.",
        "userId": 2,
    },
    {
        "id": 3,
        "title": "Aumigo",
        "body": "AuAUAUauauAuAUAUauauAuAUAUauau.",
        "userId": 3,
    }
];

// Criei fora do array de usuários, pois fica mais organizado. É um boa prática by Ariane Tier. 

app.get('/posts/:id', (request, response) => {

    const id: number = Number(request.params.id)

    const postsId = posts.filter((item) => {
        return item.id == id
    })
    response.status(200).send(postsId)
});

app.delete('/delete/posts/:idUser/:postId', (request, response) => {

    const newPosts = posts.filter((item) => {
        return item.userId !== +request.params.idUser && item.id !== +request.params.postId
    })
    const sucesso = {
        message: 'Post deletado',
        newPosts: newPosts
    }
    response.status(200).send(sucesso)
});

app.delete('/delete/users/:id', (request, response) => {

    const newUsers = users.filter((item) => {
        return item.id !== +request.params.id
    })
    const sucesso = {
        message: 'Usuário deletado',
        newUsers: newUsers
    }
    response.status(200).send(sucesso)
});

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

