export class slip {
    constructor(
        private id: string,
        private client_id: string,
        private buyer_name: string,
        private buyer_email: string,
        private buyer_cpf: string,
        private payment_amount: number,
        private payment_type: string
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
}

export enum PAYMENTTYPE {
    SLIP = 'SLIP',
    CREDITCARD = 'CREDITCARD'
}

