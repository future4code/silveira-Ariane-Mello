import { PaymentData } from "../data/PaymentData"
import { CustomError } from "../error/CustomError"
import { slip } from "../model/slip"
import { paymentCreditCardDB, paymentCreditCardInputDTO, paymentSlipDB, paymentSlipInputDTO } from "../model/types"
import { IdGenerator } from "../services/idGenerator"

export class PaymentBusiness {

    constructor(
        private idGenerator: IdGenerator,
        private PaymentData: PaymentData
    ) { }

    async paymentCard(input: paymentCreditCardInputDTO) {
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
                throw new CustomError(422, 'Invalid Client ID')
            }
            if (!buyer_name || !buyer_email || !buyer_cpf) {
                throw new CustomError(422, 'Invalid Buyer')
            }
            if (!payment_amount || !payment_type) {
                throw new CustomError(422, 'Invalid Payment Data')
            }
            if (!card_holder_name || !card_number || !card_expiration_date || !card_cvv) {
                throw new CustomError(422, 'Invalid Credit Card')
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
            throw new CustomError(error.statusCode, error.message)
        }
    }
    private numberRandom = (length: number) => {
        return Math.floor(Math.random() * length)
    }

    private slipNumber = () => {
        const number = '0123456789'
        let random = ''
        for(let i = 0; i <= 47; i++) {
            const index = Math.floor(this.numberRandom(number.length -1))
            random += number[index]
        }
        return random
    }
    async paymentSlip(input: paymentSlipInputDTO) {
        try {
            const { client_id, buyer_name, buyer_email, buyer_cpf, payment_amount, payment_type } = input
            if (!client_id) {
                throw new CustomError(422, 'Invalid Payment Data')
            }
            if (!buyer_name || !buyer_email || !buyer_cpf) {
                throw new CustomError(422, 'Invalid Payment Data')
            }
            if (!payment_amount || !payment_type) {
                throw new CustomError(422, 'Invalid Payment Data')
            }
            const id = this.idGenerator.generateId()
            const payment: paymentSlipDB = {
                id,
                client_id,
                buyer_name,
                buyer_email,
                buyer_cpf,
                payment_amount,
                payment_type,
                slipNumber: this.slipNumber()
            }
            await this.PaymentData.insertPaymentSlip(payment)

            const response = {slipNumber: payment.slipNumber}
            return response

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
    async getPaymentCreditCard(id: string) {
        try {
            if (!id) {
                throw new CustomError(422, 'Missing Id')
            }
            const result = await this.PaymentData.getPaymentCreditCard(id)
            return result
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
    async getPaymentSlip(id: string) {
        try {
            if (!id) {
                throw new CustomError(422, 'Missing Id')
            }
           const result = await this.PaymentData.getPaymentSlip(id)
           return result
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}
export default new PaymentBusiness(
    new IdGenerator(),
    new PaymentData()
)

