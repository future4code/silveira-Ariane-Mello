export interface registerPaymentInputDTO {
    clientID: string,
    buyerName: string,
    buyerEmail: string,
    buyerCPF: string,
    paymentAmount: number,
    paymentType: string,
    cardHolderName?: string,
    cardNumber?: string,
    cardExpirationDate?: string,
    cardCVV?: string
}