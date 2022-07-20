import { PaymentData } from "../data/PaymentData"
import { paymentCreditCardDB, registerPaymentInputDTO } from "../model/types"
import { IdGenerator } from "../services/idGenerator"

export class PaymentBusiness {

    constructor(
        private idGenerator: IdGenerator,
        private PaymentData: PaymentData
    ) {}

    async paymentCard(input: registerPaymentInputDTO) {
        try {
            const {
                client_id,
                buyer_name,
                buyer_email,
                buyer_cpf,
                payment_amount,
                payment_type,
                card_holder_name,
                card_number,
                card_expiration_date,
                card_cvv
            } = input

            if (!client_id) {
                throw new Error('Invalid Client ID')
            }
            if (!buyer_name || !buyer_email || !buyer_cpf) {
                throw new Error('Invalid Buyer')
            }
            if (!payment_amount || !payment_type) {
                throw new Error('Invalid Payment Data')
            }
            if (!card_holder_name || !card_number || !card_expiration_date || !card_cvv) {
                throw new Error('Invalid Credit Card')
            }
            const id = this.idGenerator.generateId()
            const payment: paymentCreditCardDB = {
                id,
                client_id,
                buyer_name,
                buyer_email,
                buyer_cpf,
                payment_amount,
                payment_type,
                card_holder_name,
                card_number,
                card_expiration_date,
                card_cvv
            }

            await this.PaymentData.insertPaymentCard(payment)
            
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    async paymentSlip(input: registerPaymentInputDTO) {
        try {
            const { client_id, buyer_name, buyer_email, buyer_cpf, payment_amount, payment_type } = input
            if (!client_id) {
                throw new Error('Invalid Client ID')
            }
            if (!buyer_name || !buyer_email || !buyer_cpf) {
                throw new Error('Invalid Buyer')
            }
            if (!payment_amount || !payment_type) {
                throw new Error('Invalid Payment Data')
            }
            const payment = {
                client_id,
                buyer_name,
                buyer_email,
                buyer_cpf,
                payment_amount,
                payment_type
            }
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}

export default new PaymentBusiness(
    new IdGenerator(),
    new PaymentData()
)

