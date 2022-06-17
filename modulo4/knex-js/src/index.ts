import express, { Request, Response, Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./endpoints/connection";

const app: Express = express();
app.use(express.json());
app.use(cors());

const updateName = (name: string) => {
   let searchActor = connection.raw(`SELECT * FROM Actor WHERE name LIKE "%${name}%"`)
   return searchActor
};

app.get('/actor/:name', async (req: Request, res: Response) => {
   try {
      // let searchActor = await connection.raw(`SELECT * FROM Actor WHERE name LIKE "%${req.params.name}%"`)
      const result = await updateName(req.params.name)
      res.status(200).send(result[0])
   } catch (error: any) {
      res.status(400).send("Ocorreu um erro, por favor tente novamente")
   }
});

const updateSearchGender = (gender: string) => {
   let searchGender = connection.raw(`SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"`)
   return searchGender
};

app.get('/actor/count/:gender/', async (req: Request, res: Response) => {
   try {
      // let searchGender = await connection.raw(`SELECT COUNT(*) FROM Actor WHERE gender = "${req.params.gender}"`)
      const result = await updateSearchGender(req.params.gender)
      res.status(200).send(result[0])
   } catch (error: any) {
      res.status(400).send("Ocorreu um erro, por favor tente novamente")
   }
});

const updateSalary = (salary: number, id: string) => {
   return connection(`Actor`)
      .update({ salary })
      .where({ id })
};

app.put('/actor/salary/:id', async (req: Request, res: Response) => {
   try {
      await updateSalary(req.body.salary, req.params.id)
      res.status(200).send("Success")
   } catch (error: any) {
      res.status(400).send("Ocorreu um erro, por favor tente novamente")
   }
});

const deleteId = (id: string) => {
   return connection(`Actor`)
      .delete()
      .where({ id })
};

app.delete('/actor/delete/:id', async (req: Request, res: Response) => {
   try {
      await deleteId(req.params.id)
      const sucess = {
         message: "Success, actor delete"
      }
      res.status(200).send(sucess)
   } catch (error: any) {
      res.status(400).send("Ocorreu um erro, por favor tente novamente")

   }
});

const avgGenderActor = (gender: string) => {
   return connection(`Actor`)
      .avg("salary as média salarial")
      .where({ gender })
};

app.get('/actor/avg/:gender/', async (req: Request, res: Response) => {
   try {
      const result = await avgGenderActor(req.params.gender)
      res.status(200).send(result)
   } catch (error: any) {
      res.status(400).send("Ocorreu um erro, por favor tente novamente")
   }
});

const actorId = (id: string) => {
   return connection(`Actor`)
      .where({ id })
};

app.get('/actor/id/:id', async (req: Request, res: Response) => {
   try {
      const result = await actorId(req.params.id)
         .where({ id: req.params.id })
      res.status(200).send(result[0])
   } catch (error: any) {
      res.status(400).send("Ocorreu um erro, por favor tente novamente")
   }
});

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});