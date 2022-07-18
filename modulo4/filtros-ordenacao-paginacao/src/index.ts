import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import axios from "axios";
import { getAllUsers, getOrderByType } from "./exercicio1";
import { getOrderBy } from "./exercicio2";
import { getPage } from "./exercicio3";
import { getAllDate } from "./exercicio4";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/user', getAllUsers);

app.get('/orderuser', getOrderByType);

app.get('/orderby', getOrderBy);

app.get('/page', getPage);

app.get('/all', getAllDate);

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});