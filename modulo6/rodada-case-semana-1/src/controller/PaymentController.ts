import { Request, Response } from 'express'
import paymentBusiness from '../business/PaymentBusiness'
import { registerPaymentInputDTO } from '../model/types'

export class PaymentController {

    async registerPayment(req: Request, res: Response): Promise<void> {
        try {
            const {
                clientID,
                buyerName,
                buyerEmail,
                buyerCPF,
                paymentAmount,
                paymenType,
                cardHolderName,
                cardNumber,
                cardExpirationDate,
                cardCVV
            } = req.body

            const input: registerPaymentInputDTO = {
                clientID,
                buyerName,
                buyerEmail,
                buyerCPF,
                paymentAmount,
                paymenType,
                cardHolderName,
                cardNumber,
                cardExpirationDate,
                cardCVV
            }

            paymentBusiness.paymentCard(input)

            res.status(200).send('Payment successfully registered')
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}

export default new PaymentController(
)