import { CustomError } from "../error/CustomError";
import { paymentCreditCardDB, paymentSlipDB } from "../model/types";
import { BaseDatabase } from "./baseDatabase";

export class PaymentData extends BaseDatabase {
    async insertPaymentCard(input: paymentCreditCardDB) {
        try {
            await BaseDatabase.connection('wirecard_payment_creditcard')
                .insert(input)
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
    async insertPaymentSlip(input: paymentSlipDB) {
        try {
            await BaseDatabase.connection('wirecard_payment_slip')
                .insert(input)
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
    async getPaymentCreditCard(id: string) {
        try {
            const result = await BaseDatabase.connection('wirecard_payment_creditcard')
                .select('*')
                .where({ id })
            return result
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
    async getPaymentSlip(id: string) {
        try {
            const result = await BaseDatabase.connection('wirecard_payment_slip')
                .select('*')
                .where({ id })
            return result
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
}


