import { paymentCreditCardDB, paymentSlipDB } from "../model/types";
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
    async insertPaymentSlip(input: paymentSlipDB) {
        try {
            await BaseDatabase.connection('wirecard_payment_slip')
                .insert(input)
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}


