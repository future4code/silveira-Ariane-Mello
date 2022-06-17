import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import createUser from './endpoint/createUser';
import getAllUser from './endpoint/getAllUser';
import registerProduct from './endpoint/registerProduct';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post('/user', createUser);

app.get('/user', getAllUser);

app.post('/products', registerProduct);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

