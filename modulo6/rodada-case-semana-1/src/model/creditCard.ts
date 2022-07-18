export class creditCard {
    constructor(
        private cardHolderName: string,
        private cardNumber: number,
        private cardExpirationDate: string,
        private CVV: number
    ) { }
    public getCardHolderName() {
        return this.cardHolderName
    }
    public getCardNumber() {
        return this.cardNumber
    }
    public getCardExpirationDate() {
        return this.cardExpirationDate
    }
    public getCVV() {
        return this.CVV
    }
}