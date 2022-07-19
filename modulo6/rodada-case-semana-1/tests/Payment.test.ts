import PaymentBusiness from "../src/business/PaymentBusiness";
import { registerPaymentInputDTO } from "../src/model/types";

const inputMock: registerPaymentInputDTO = {
    clientID: 'client',
    buyerName: 'Ariane',
    buyerEmail: 'ariane@email.com',
    buyerCPF: '42123506800',
    paymentAmount: 100,
    paymenType: 'CREDITCARD',
    cardHolderName: 'Ariane Tier de Mello',
    cardNumber: '7531598524560001',
    cardExpirationDate: '07/23',
    cardCVV: '070'
}

describe('test class Payment Business', () => {
    describe('test payment card method', () => {
        test('test invalid client ID', async () => {
            const input = inputMock
            input.clientID = ''
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.clientID = 'client'
                expect(error.message).toEqual('Invalid Client ID')
            } finally {
                expect.assertions(1)
            }
        })
    })
})