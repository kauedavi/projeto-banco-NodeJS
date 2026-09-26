import { Cliente } from "../classes/Cliente.js";

export async function criarCliente(dados) {
  const novoCliente = new Cliente(
    dados.nome,
    dados.idade,
    dados.nacionalidade,
    dados.cep,
    dados.banco,
    dados.saldo, dados.credito
  );

  return novoCliente
}


