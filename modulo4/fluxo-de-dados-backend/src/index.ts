import express from "express";
import cors from "cors";
import { Products, products } from "./data";

const app = express();

//Dados backend -> frontend no formato JSON.
app.use(express.json());

//API sem erro de CORS.
app.use(cors());

app.get('/test', (request, response) => {
    response.send('A API está funcional 🚀')
});

app.post('/products', (request, response) => {
    const id = request.body.id
    const name = request.body.name
    const price: number = +request.body.price
    let newError: number = 400
    const productToEdit = products.find(product => product.id == id)

    try {
        if (!request.body.name || !request.body.price) {
            newError = 401
            throw new Error('Um dos dados não foi recebido')
        }
        if (typeof (request.body.name) !== 'string') {
            newError = 422
            throw new Error('Name não é uma string')
        }
        if (typeof (request.body.price) !== 'number') {
            newError = 422
            throw new Error('Price não é um number')
        }
        if (request.body.price <= 0) {
            newError = 422
            throw new Error('Price menor ou igual a zero')
        }
        const newProducts: Products = {
            id: id,
            name: name,
            price: price
        }

        products.push(newProducts)

        response.send(products)
    } catch (error: any) {
        if (newError == 200)
            response.status(500).send('Erro inesperado, tente novamente')
        else
            response.status(newError).send(error.message)
    }
}
);

app.get('/products', (request, response) => {
    response.send(products)
});

app.put('/products/:id', (request, response) => {
    const id = request.params.id
    let newError: number = 400
    const productToEdit = products.find(product => product.id == id)

    try {
        if (!request.body.price) {
            newError = 401
            throw new Error('Price não foi recebido')
        }
        if (typeof (request.body.price) !== 'number') {
            newError = 422
            throw new Error('Price não é um number')
        }
        if (request.body.price <= 0) {
            newError = 422
            throw new Error('Price menor ou igual a zero')
        }
        if (!id) {
            newError = 404
            throw new Error('Id não foi recebido')
        }
        if (!productToEdit) {
            newError = 404
            throw new Error('Product não encontrado')

        }
        const editProducts = products.map(products => products.id == id ?
            {
                ...products,
                price: request.body.price
            }
            : products)
        response.send(editProducts)
    } catch (error: any) {
        if (newError == 200)
            response.status(500).send('Erro inesperado, tente novamente')
        else
            response.status(newError).send(error.message)
    }
}
);

app.delete('/delete/products/:id', (request, response) => {
    const id = request.params.id
    let newError: number = 400
    const deleteProducts = products.findIndex((products) => products.id == id)

    try {
        if (!id) {
            newError = 404
            throw new Error('Id não foi recebido')
        }
        if (!deleteProducts) {
            newError = 404
            throw new Error('Product não encontrado')

        }
        const editProducts = products.map(products => products.id == id ?
            {
                ...products,
                price: request.body.price
            }
            : products)
        response.send(editProducts)
    } catch (error: any) {
        if (newError == 200)
            response.status(500).send('Erro inesperado, tente novamente')

        products.splice(deleteProducts, 1)

        response.send(products)
    }
});

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});