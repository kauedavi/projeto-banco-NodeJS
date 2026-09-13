console.log("Aguarde, vamos validar seus dados...");

import { recebendoDados } from "./cadastro-user.js";

export async function init() {
  const dados = await recebendoDados();

  const checkNome = validarNome(dados);
  const checkIdade = validarIdade(dados);
  const checkBanco = validarBanco(dados);
  const checkSaldo = validarSaldo(dados);
  const checkCredito = validarCredito(dados);

  const check = errorCkeout(
    dados,
    checkNome,
    checkIdade,
    checkBanco,
    checkSaldo,
    checkCredito,
  );

  if (check === true) {
    console.log("cadastre novamente");
  } else {
    gerarUser(dados);
  }
}

function validarNome(dados) {
  if (!dados.nome || dados.nome == "") {
    console.log("Erro: nome não informado!");
    return false;
  } else if (dados.nome.length < 10) {
    console.log("Erro: nome completo não informado!");
    return false;
  } else {
    console.log("Sucesso: nome validado!");
    return true;
  }
}

function validarIdade(dados) {
  if (isNaN(dados.idade) || dados.idade <= 0 || dados.idade > 120) {
    console.log("Erro: idade não informada corretamente");
    return false;
  } else {
    console.log("Sucesso: idade validado!");
    return true;
  }
}

function validarBanco(dados) {
  if (!dados.banco || dados.banco == "") {
    console.log("Erro: nome do banco não consta!");
    return false;
  } else {
    console.log("Sucesso: banco validado!");
    return true;
  }
}

function validarSaldo(dados) {
  if (isNaN(dados.saldo)) {
    console.log("Erro: saldo atual não confirmado!");
    return false;
  } else {
    console.log("Sucesso: saldo validado!");
    return true;
  }
}

function validarCredito(dados) {
  if (isNaN(dados.credito)) {
    console.log("Erro: credito não informado!");
    return false;
  } else {
    console.log("Sucesso: credito validado!");
    return true;
  }
}

function errorCkeout(
  dados,
  checkNome,
  checkIdade,
  checkBanco,
  checkSaldo,
  checkCredito,
) {
  let error = [
    checkNome,
    checkIdade,
    checkBanco,
    checkSaldo,
    checkCredito,
  ].filter((item) => item === false);

  if (error.length > 0) {
    console.log("Não foi possivel validar os dados. Faça novamente.");
    return true;
  } else {
    console.log(
      `usuario ${dados.nome} aprovado! Registrando no banco de dados...`,
    );
  }
}

export function gerarUser(dados) {
  const user = {
    nome: dados.nome,
    idade: dados.idade,
    banco: dados.banco,
    saldo: dados.saldo,
    credito: dados.credito,
  };
  return user;
}

init();
