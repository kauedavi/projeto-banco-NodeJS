// Zod é uma biblioteca que valida todos os dados que colocamos
import { z } from "zod";
import { recebendoDados } from "./cadastro-user.js";

console.log("Aguarde, vamos validar seus dados...");

export async function check() {

  const dados = await recebendoDados();

  // esse é o molde de como os dados devem chegar ao zod. Podemos unir max e min, e decidimos qual tipo de dado entra (string, number...)
  // exemplo:  "objeto": "o tipo" e "limitações" 
  const moldeVerif = z.object({
    nome: z
      .string()
      .min(10, "Erro: Insira seu nome completo!")
      .max(60, "Erro: nome muito grande!"),
    idade: z
      .number()
      .min(18, "Erro: Você deve ser maior de idade!")
      .max(120, "Idade incompativel"),
    banco: z
      .string()
      .min(1, "Banco invalido, nome curto.")
      .max(30, "Nome extenso, simplifique."),
    saldo: z.number().min(0, "Erro: Você não atende os criterios de saldo"),
    credito: z.number().min(0, "Erro: Você não atende os criterios de credito"),
  });

  // aqui juntamos o molde com os dados, para ele conseguir trata-los
  const verif = moldeVerif.safeParse(dados);

  if (!verif.success) {
    console.log(verif.error.format());
  } else {
    gerarUser(verif.data);
  }
}

export function gerarUser(data) {
  const user = data;
  console.log(`usuario ${user.nome} cadastrado!`);
  return user;
}

check();
