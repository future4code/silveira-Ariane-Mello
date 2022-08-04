export class buyer {
    constructor(
        private name: string,
        private email: string,
        private cpf: string
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