import PaymentBusiness from "../src/business/PaymentBusiness";

const inputMock = {
    client_id: 'client' as any,
    buyer_name: 'Ariane' as any,
    buyer_email: 'ariane@email.com' as any,
    buyer_cpf: '42123506800' as any,
    payment_amount: 100 as any,
    payment_type: 'CREDITCARD' as any,
    card_holder_name: 'Ariane Tier de Mello' as any,
    card_number: '7531598524560001' as any,
    card_expiration_date: '07/23' as any,
    card_cvv: '070' as any
}

describe('test class Payment Business', () => {
    describe('test payment card method', () => {
        test('test invalid client ID', async () => {
            const input = inputMock
            input.client_id = ''
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.client_id = 'client'
                expect(error.message).toEqual('Invalid Client ID')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid buyer name', async () => {
            const input = inputMock
            input.buyer_name = ''
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.buyer_name = 'Ariane'
                expect(error.message).toEqual('Invalid Buyer')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid buyer email', async () => {
            const input = inputMock
            input.buyer_email = ''
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.buyer_email = 'ariane@email.com'
                expect(error.message).toEqual('Invalid Buyer')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid buyer CPF', async () => {
            const input = inputMock
            input.buyer_cpf = ''
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.buyer_cpf = '42123506800'
                expect(error.message).toEqual('Invalid Buyer')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid payment amount', async () => {
            const input = inputMock
            input.payment_amount = undefined
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.payment_amount = 100
                expect(error.message).toEqual('Invalid Payment Data')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid payment type', async () => {
            const input = inputMock
            input.payment_type = ''
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.payment_type = 'CREDITCARD'
                expect(error.message).toEqual('Invalid Payment Data')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid credit card', async () => {
            const input = inputMock
            input.card_holder_name = ''
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.card_holder_name = 'Ariane Tier de Mello'
                expect(error.message).toEqual('Invalid Credit Card')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid credit card', async () => {
            const input = inputMock
            input.card_number = ''
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.card_number = '7531598524560001'
                expect(error.message).toEqual('Invalid Credit Card')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid credit card', async () => {
            const input = inputMock
            input.card_expiration_date = ''
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.card_expiration_date = '07/23'
                expect(error.message).toEqual('Invalid Credit Card')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid credit card', async () => {
            const input = inputMock
            input.card_cvv = ''
            try {
                await PaymentBusiness.paymentCard(input)
            } catch (error: any) {
                input.card_cvv = '070'
                expect(error.message).toEqual('Invalid Credit Card')
            } finally {
                expect.assertions(1)
            }
        })
        // test('test valid inputs', async () => {
        //     const input = inputMock
        //     console.log(input)
        //     try {
        //         const insert = jest.fn(
        //             (input) => PaymentBusiness.paymentCard(input)
        //         )
        //         await insert(input)
        //         expect(insert(input)).resolves.not.toThrow()
        //         expect(insert(input)).resolves.toBeUndefined()
        //     } catch (error: any) {
        //     } finally {
        //         expect.assertions(1)
        //     }
        // })
    })
})

describe('test class Payment Slip', () => {
    describe('test payment slip method', () => {
        test('test invalid client ID', async () => {
            const input = inputMock
            input.client_id = ''
            try {
                await PaymentBusiness.paymentSlip(input)
            } catch (error: any) {
                input.client_id = 'client'
                expect(error.message).toEqual('Invalid Client ID')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid buyer name', async () => {
            const input = inputMock
            input.buyer_name = ''
            try {
                await PaymentBusiness.paymentSlip(input)
            } catch (error: any) {
                input.buyer_name = 'Ariane'
                expect(error.message).toEqual('Invalid Buyer')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid buyer email', async () => {
            const input = inputMock
            input.buyer_email = ''
            try {
                await PaymentBusiness.paymentSlip(input)
            } catch (error: any) {
                input.buyer_email = 'ariane@email.com'
                expect(error.message).toEqual('Invalid Buyer')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid buyer CPF', async () => {
            const input = inputMock
            input.buyer_cpf = ''
            try {
                await PaymentBusiness.paymentSlip(input)
            } catch (error: any) {
                input.buyer_cpf = '42123506800'
                expect(error.message).toEqual('Invalid Buyer')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid payment amount', async () => {
            const input = inputMock
            input.payment_amount = ''
            try {
                await PaymentBusiness.paymentSlip(input)
            } catch (error: any) {
                input.payment_amount = 100
                expect(error.message).toEqual('Invalid Payment Data')
            } finally {
                expect.assertions(1)
            }
        })
        test('test invalid payment type', async () => {
            const input = inputMock
            input.payment_type = ''
            try {
                await PaymentBusiness.paymentSlip(input)
            } catch (error: any) {
                input.payment_type = 'SLIP'
                expect(error.message).toEqual('Invalid Payment Data')
            } finally {
                expect.assertions(1)
            }
        })
        // test('test valid inputs', async () => {
        //     const input = inputMock
        //     console.log(input)
        //     try {
        //         const insert = jest.fn(
        //             (input) => PaymentBusiness.paymentSlip(input)
        //         )
        //         await insert(input)
        //         expect(insert(input)).resolves.not.toThrow()
        //         expect(insert(input)).resolves.toBeUndefined()
        //     } catch (error: any) {
        //     } finally {
        //         expect.assertions(2)
        //     }
        // })
    })
})