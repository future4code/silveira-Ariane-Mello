import { Request, Response } from 'express'
import paymentBusiness from '../business/PaymentBusiness'
import { paymentCreditCardInputDTO, paymentSlipInputDTO } from '../model/types'

export class PaymentController {
    async registerPaymentCard(req: Request, res: Response): Promise<void> {
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
            } = req.body
            const input: paymentCreditCardInputDTO = {
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
            paymentBusiness.paymentCard(input)
            res.status(200).send('Payment successfully registered')
        } catch (error: any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }
    async registerPaymentSlip(req: Request, res: Response): Promise<void> {
        try {
            const {
                client_id,
                buyer_name,
                buyer_email,
                buyer_cpf,
                payment_amount,
                payment_type
            } = req.body
            const input: paymentSlipInputDTO = {
                client_id,
                buyer_name,
                buyer_email,
                buyer_cpf,
                payment_amount,
                payment_type
            }
            paymentBusiness.paymentSlip(input)
            res.status(200).send('Payment successfully registered')
        } catch (error: any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }
    async getPaymentCreditCard(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id as string
            const result = await paymentBusiness.getPaymentCreditCard(id)
            res.status(200).send(result)
        } catch (error: any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }
    async getPaymentSlip(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id as string
            const result = await paymentBusiness.getPaymentSlip(id)
            res.status(200).send(result)
        } catch (error: any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }
}
export default new PaymentController(
)