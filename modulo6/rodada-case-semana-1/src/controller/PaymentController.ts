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
            res.statusMessage = 'Payment successfully registered'
            res.status(201).send()
        } catch (error: any) {
            res.status(400).send(error.message)
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
            res.statusMessage = 'Payment successfully registered'
            res.status(201).send()
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
    async paymentStatus(req: Request, res: Response): Promise<void> {
        try {
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}//pago e aguardando pagamento?
export default new PaymentController(
)