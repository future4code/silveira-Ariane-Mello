import { paymentCreditCardDB, registerPaymentInputDTO } from "../model/types";
import { BaseDatabase } from "./baseDatabase";

export class PaymentData extends BaseDatabase {
    async insertPaymentCard(input: paymentCreditCardDB) {
        try {
            await BaseDatabase.connection('wirecard_payment_creditcard')
                .insert(input)
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
    // async insertPaymentSlip(input: registerPaymentInputDTO) {
    //     try {
    //         await BaseDatabase.connection()
    //             .insert(input)
    //             .into('wirecard_payment_slip')
    //     } catch (error: any) {
    //         throw new Error(error.message || error.sqlMessage)
    //     }
    // }
}

//inserir cartao
//inserir comprador
//inserir boleto

