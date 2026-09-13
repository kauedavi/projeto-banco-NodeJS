// imports necessários para inputs no node.js (decora ai)
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export async function recebendoDados (){

    const rl = readline.createInterface({ input, output });

    const nome = await rl.question("Qual é seu nome?")

    const idade = Number(await rl.question("Digite sua idade:"))

    const banco = await rl.question("Informe o banco que deseja cadastrar")

    const saldo = parseFloat(await rl.question("Informe o banco seu saldo atual:"))

    const credito = await rl.question("Informe seu credito atual:") 

    rl.close()

    return {nome, idade, banco, saldo, credito}
}