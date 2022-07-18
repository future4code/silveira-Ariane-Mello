export class buyer {
    constructor(
        private name: string,
        private email: string,
        private cpf: number
    ) { }
    public getName() {
        return this.name
    }
    public getEmail() {
        return this.email
    }
    public getCpf() {
        return this.cpf
    }
}