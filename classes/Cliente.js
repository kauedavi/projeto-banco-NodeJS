import { Person } from './Person.js'

export class Cliente extends Person {

    constructor(nome, idade, nacionalidade, cep, banco, saldo, credito){
        super(nome, idade, nacionalidade, cep)
        this.banco = banco
        this.saldo = saldo
        this.credito = credito
    }
}