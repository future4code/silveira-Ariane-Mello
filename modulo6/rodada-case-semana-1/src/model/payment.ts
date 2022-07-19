export class payment {
    constructor(
        private amount: number,
        private type: string,
        private card: string
    ) { }
    public getAmount() {
        return this.amount
    }
    public getType() {
        return this.type
    }
    public getCard() {
        return this.card
    }
}

export enum PAYMENTTYPE {
    SLIP = 'SLIP',
    CREDITCARD = 'CREDITCARD'
}

