export type registerPaymentInputDTO = {
    client_id: string,
    buyer_name: string,
    buyer_email: string,
    buyer_cpf: string,
    payment_amount: number,
    payment_type: string,
    card_holder_name?: string,
    card_number?: string,
    card_expiration_date?: string,
    card_cvv?: string
}

export type paymentCreditCardDB = registerPaymentInputDTO & {id: string}