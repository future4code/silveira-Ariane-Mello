import { registerPaymentInputDTO } from "../model/types";
import { BaseDatabase } from "./baseDatabase";

export class PaymentData extends BaseDatabase {
    async insertCard(input: registerPaymentInputDTO) {
        try {
            await BaseDatabase.connection()
                .insert(input)
                .into('creditcard_wirecard')
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}