import { check } from '../functions/validacao-usuario.js'
import {criarCliente} from '../functions/registrar-user.js'

async function main() {
	const dados = await check();
	if (!dados) return;
	const novoCliente = await criarCliente(dados);
	console.log("Cliente criado com sucesso:", novoCliente.getInfo());
}

main().catch((error) => {
	console.error("Não foi possível criar o cliente:", error.message);
});