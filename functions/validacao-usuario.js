// Zod é uma biblioteca que valida todos os dados que colocamos

import { z } from "zod";
import { recebendoDados } from "./cadastro-user.js";

console.log("Aguarde, vamos validar seus dados...");

export async function check() {
  const dados = await recebendoDados();

  const moldeVerif = z.object({
    nome: z
      .string()
      .min(10, "Erro: Insira seu nome completo!")
      .max(60, "Erro: nome muito grande!"),
    idade: z
      .number()
      .min(18, "Erro: Você deve ser maior de idade!")
      .max(120, "Idade incompativel"),
    nacionalidade: z
      .string()
      .min(4, "nacionalidade não dev er abreviada")
      .max(30, "entrada muito longa, reduza."),
    cep: z
      .string()
      .min(8, "o CEP deve haver 8 numeros!")
      .max(8, "O CEP deve haver 8 numeros!")
      .regex(/^\d+$/, "Erro, digite apenas numeros."),
    banco: z
      .string()
      .min(1, "Banco invalido, nome curto.")
      .max(30, "Nome extenso, simplifique."),
    saldo: z.number().min(0, "Erro: Você não atende os criterios de saldo"),
    credito: z.number().min(0, "Erro: Você não atende os criterios de credito"),
  });

  const verif = moldeVerif.safeParse(dados);

  if (!verif.success) {
    console.log(verif.error.format());
    return null;
  } else {
    return await dadosLimpos(verif.data);
  }
}

async function validarCep(inputCep) {
  try {
    const cepSearch = await fetch(`https://brasilapi.com.br/api/cep/v1/${inputCep}`);
    if (!cepSearch.ok) return false;
    const cepAPI = await cepSearch.json();
    console.log(`CEP ${cepAPI.cep} encontrado`);
    return true
  } catch (error) {
    console.log(error.message);
    return false
  }
}

export async function dadosLimpos(objetoUsuario) {
  const user = objetoUsuario;
  console.log(`usuario ${user.nome} recebido, analisando cep...`);
  const status = await validarCep(user.cep);

  if (status) {
    console.log(`${user.cep} é um CEP valido!`);
  } else {
    console.log(`CEP inválido!`);
  }

  return user;
}
