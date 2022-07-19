import { registerPaymentInputDTO } from "../model/types"

export class PaymentBusiness {
    async paymentCard(input: registerPaymentInputDTO) {
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
            } = input

            if (!clientID) {
                throw new Error('Invalid Client ID')
            }
            if (!buyerName || !buyerEmail || !buyerCPF) {
                throw new Error('Invalid Buyer')
            }
            if (!paymentAmount || !paymenType) {
                throw new Error('Invalid Payment Data')
            }
            if (!cardHolderName || !cardNumber || !cardExpirationDate || !cardCVV) {
                throw new Error('Invalid Credit Card')
            }
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    async paymentSlip(input: registerPaymentInputDTO) {
        try {
            const { clientID, buyerName, buyerEmail, buyerCPF, paymentAmount, paymenType } = input
            if (!clientID) {
                throw new Error('Invalid Client ID')
            }
            if (!buyerName || !buyerEmail || !buyerCPF) {
                throw new Error('Invalid Buyer')
            }
            if (!paymentAmount || !paymenType) {
                throw new Error('Invalid Payment Data')
            }
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}

export default new PaymentBusiness(
)

