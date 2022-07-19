export interface registerPaymentInputDTO {
    clientID: string,
    buyerName: string,
    buyerEmail: string,
    buyerCPF: string,
    paymentAmount: number,
    paymenType: string,
    cardHolderName?: string,
    cardNumber?: string,
    cardExpirationDate?: string,
    cardCVV?: string
}