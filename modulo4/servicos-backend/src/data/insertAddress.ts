import { Address } from "../type";
import { connection } from "./connection";

export default async function insertAddress(address: Address) {
    const { logradouro, bairro, cidade, estado, cep } = address

    await connection('address').insert({
        logradouro,
        bairro,
        cidade,
        estado,
        cep
    })
};