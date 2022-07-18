import express from "express";
import cors from "cors";
import axios from "axios";
import { AddressInfo } from "net";
import { baseURL } from "./baseURL";

const app = express();

app.use(express.json());
app.use(cors());

type user = {
  id: string,
  name: string,
  email: string
};

// async function getSubscribers(): Promise<any[]> {
//   const response = await axios.get(`${baseURL}/subscribers`)
//   return response.data
// };

// const main = async(): Promise<void> => {
//   try {
//     const subscribers = await getSubscribers()
//     console.log(subscribers)
//   } catch (error: any) {
//     console.log(error.response?.data || error.message)
//   }
// };

// main();

const getSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${baseURL}/subscribers`)
  return response.data.map((res: any) => {
    return res.id
  })
};

// const main = async(): Promise<void> => {
//   try {
//     const subscribers = await getSubscribers()
//     console.log(subscribers)
//   } catch (error: any) {
//     console.log(error.response?.data || error.message)
//   }
// };

// main();

const news = {
  title: "Título",
  content: "Descrição",
  date: Date.now()
};

const createNews = async (news: any) => {
  return axios.put(`${baseURL}/news`, news)
};

// const main = async () => {
//   try {
//     await createNews(news)
//     console.log(news)
//   } catch (error: any) {
//     const result = error.response?.data || error.message
//     console.log(result)
//   }
// };

// main()

// async function createNews(
//   title: string,
//   content: string,
//   date: number
// ): Promise<void> {
//   await axios.put(`${baseURL}/news`, {
//     title: "título",
//     content: "descrição", 
//     date: "13/06/2022"
//   })
// };

// const main = async(): Promise<void> => {
//   try {
//     const news = await createNews(title, content, date)
//     console.log(news)
//   } catch (error: any) {
//     console.log(error.response?.data || error.message)
//   }
// };

// main();

const sendNotifications = async (ids: user[]): Promise<void> => {
  console.log(ids)
  for (const id of ids) {
    await axios.post(`${baseURL}/notifications`, {
      subscriberId: id,
      message: "Olá, seja muito bem vindo(a)!"
    })
      .then(() => console.log(`Mensagem enviada para o usuário ${id}`))
      .catch(() => console.log(`Erro ao enviar mensagem para o usuário ${id}`))
  }
};

const main = async (): Promise<void> => {
  try {
    const users = await getSubscribers()
    await sendNotifications(users)
  } catch (error: any) {
    console.log(error.response?.data || error.message)
  }
};

main();

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
