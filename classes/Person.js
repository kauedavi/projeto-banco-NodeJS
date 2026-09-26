export class Person {
  #nome;
  #idade;
  #nacionalidade;
  #cep;
  constructor(nome, idade, nacionalidade, cep) {
    this.#nome = nome;
    this.#idade = idade;
    this.#nacionalidade = nacionalidade;
    this.#cep = cep;
  }
  getInfo() {
    return  {nome: this.#nome, idade: this.#idade, nacionalidade: this.#nacionalidade }
  }
  getLocalizacao(){
    return this.#cep
  }
  setCep(newCep){
    this.#cep = newCep
  }
}
