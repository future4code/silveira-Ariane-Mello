import { Request, Response } from "express";
import axios from "axios";
import { Address } from "../type";

export let getAddress = async (req: Request, res: Response) => {
    try {
        const cep = req.params.cep
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        const address: Address = {
            cep: result.data.cep,
            logradouro: result.data.logradouro,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf
        }
        res.send(address)
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
};


