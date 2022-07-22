export class creditCard {
    constructor(
        private id: string,
        private client_id: string,
        private buyer_name: string,
        private buyer_email: string,
        private buyer_cpf: string,
        private payment_amount: number,
        private payment_type: string,
        private payment_status: string,
        private card_holder_name: string,
        private card_number: string,
        private card_expiration_date: string,
        private card_cvv: string
    ) { }
    public getId() {
        return this.id
    }
    public getClientId() {
        return this.client_id
    }
    public getBuyerName() {
        return this.buyer_name
    }
    public getBuyerEmail() {
        return this.buyer_email
    }
    public getBuyerCpf() {
        return this.buyer_cpf
    }
    public getPaymentAmount() {
        return this.payment_amount
    }
    public getPaymentType() {
        return this.payment_type
    }
    public getPaymentStatus() {
        return this.payment_status
    }
    public getCardHolderName() {
        return this.card_holder_name
    }
    public getCardNumber() {
        return this.card_number
    }
    public getCardExpirationDate() {
        return this.card_expiration_date
    }
    public getCardCvv() {
        return this.card_cvv
    }
}

export enum PAYMENTTYPE {
    SLIP = 'SLIP',
    CREDITCARD = 'CREDITCARD'
}

