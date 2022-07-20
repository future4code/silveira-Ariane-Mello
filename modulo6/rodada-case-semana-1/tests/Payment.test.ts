import PaymentBusiness from "../src/business/PaymentBusiness";

const inputMock = {
    clientID: 'client' as any,
    buyerName: 'Ariane' as any,
    buyerEmail: 'ariane@email.com' as any,
    buyerCPF: '42123506800' as any,
    paymentAmount: 100 as any,
    paymentType: 'CREDITCARD' as any,
    cardHolderName: 'Ariane Tier de Mello' as any,
    cardNumber: '7531598524560001' as any,
    cardExpirationDate: '07/23' as any,
    cardCVV: '070' as any
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
        test('test invalid buyer name', async () => {
            const input = inputMock
            input.buyerName = ''
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.buyerName = 'Ariane'
                expect(error.message).toEqual('Invalid Buyer')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid buyer email', async () => {
            const input = inputMock
            input.buyerEmail = ''
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.buyerEmail = 'ariane@email.com'
                expect(error.message).toEqual('Invalid Buyer')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid buyer CPF', async () => {
            const input = inputMock
            input.buyerCPF = ''
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.buyerCPF = '42123506800'
                expect(error.message).toEqual('Invalid Buyer')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid payment amount', async () => {
            const input = inputMock
            input.paymentAmount = undefined
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.paymentAmount = 100
                expect(error.message).toEqual('Invalid Payment Data')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid payment type', async () => {
            const input = inputMock
            input.paymentType = ''
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.paymentType = 'CREDITCARD'
                expect(error.message).toEqual('Invalid Payment Data')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid credit card', async () => {
            const input = inputMock
            input.cardHolderName = ''
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.cardHolderName = 'Ariane Tier de Mello'
                expect(error.message).toEqual('Invalid Credit Card')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid credit card', async () => {
            const input = inputMock
            input.cardNumber = ''
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.cardNumber = '7531598524560001'
                expect(error.message).toEqual('Invalid Credit Card')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid credit card', async () => {
            const input = inputMock
            input.cardExpirationDate = ''
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.cardExpirationDate = '07/23'
                expect(error.message).toEqual('Invalid Credit Card')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid credit card', async () => {
            const input = inputMock
            input.cardCVV = ''
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.cardCVV = '070'
                expect(error.message).toEqual('Invalid Credit Card')
            } finally {
                expect.assertions(1)
            }
        })
        test('test valid inputs', async () => {
            const input = inputMock
            try {
                const insert = jest.fn(
                    (input) => PaymentBusiness.paymentCard(input)
                )
                await insert(input)
                expect(insert(input)).resolves.not.toThrow()
                expect(insert(input)).resolves.toBeUndefined()
            } catch (error: any) {
            } finally {
                expect.assertions(2)
            }
        })
    })
})

describe('test class Payment Slip', () => {
    describe('test payment slip method', () => {
        test('test invalid client ID', async () => {
            const input = inputMock
            input.clientID = ''
            try {
                await PaymentBusiness.paymentSlip(input)
            } catch (error: any) {
                input.clientID = 'client'
                expect(error.message).toEqual('Invalid Client ID')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid buyer name', async () => {
            const input = inputMock
            input.buyerName = ''
            try {
                await PaymentBusiness.paymentSlip(input)
            } catch (error: any) {
                input.buyerName = 'Ariane'
                expect(error.message).toEqual('Invalid Buyer')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid buyer email', async () => {
            const input = inputMock
            input.buyerEmail = ''
            try {
                await PaymentBusiness.paymentSlip(input)
            } catch (error: any) {
                input.buyerEmail = 'ariane@email.com'
                expect(error.message).toEqual('Invalid Buyer')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid buyer CPF', async () => {
            const input = inputMock
            input.buyerCPF = ''
            try {
                await PaymentBusiness.paymentSlip(input)
            } catch (error: any) {
                input.buyerCPF = '42123506800'
                expect(error.message).toEqual('Invalid Buyer')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid payment amount', async () => {
            const input = inputMock
            input.paymentAmount = ''
            try {
                await PaymentBusiness.paymentSlip(input)
            } catch (error: any) {
                input.paymentAmount = 100
                expect(error.message).toEqual('Invalid Payment Data')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid payment type', async () => {
            const input = inputMock
            input.paymentType = ''
            try {
                await PaymentBusiness.paymentSlip(input)
            } catch (error: any) {
                input.paymentType = 'SLIP'
                expect(error.message).toEqual('Invalid Payment Data')
            } finally {
                expect.assertions(1)
            }
        })
        test('test valid inputs', async () => {
            const input = inputMock
            try {
                const insert = jest.fn(
                    (input) => PaymentBusiness.paymentSlip(input)
                )
                await insert(input)
                expect(insert(input)).resolves.not.toThrow()
                expect(insert(input)).resolves.toBeUndefined()
            } catch (error: any) {
            } finally {
                expect.assertions(2)
            }
        })
    })
})