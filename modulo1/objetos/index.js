//Exercícios de interpretação de código

//1. 
//a.
//console.log(filme.elenco[0]) 
//Imprimiu posição [0] do elenco = "Matheus Nachtergaele".

//console.log(filme.elenco[filme.elenco.length - 1])
//Imprimiu "Virginia Cavendish".

//console.log(filme.transmissoesHoje[2])
//Imprimiu posição[2] = "canal: Globo, horario: 14h".

//2.
//a.console.log(cachorro)
//Imprimiu "nome: 'Juca, idade: 3, raca: 'SRD".

//const gato = {...cachorro, nome: "Juba"}
//Imprimiu uma cópia do objeto cachorro, porém substitui o nome: 'Juba'.

//const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
//Imprimiu uma cópia do objeto gato, porém substitui a letra "a" por "o" = nome: 'Jubo'.

//b. Spread realiza a cópia de um objeto. 

//3.
//a. 
//console.log(minhaFuncao(pessoa, "backender"))
//Imprimiu "false".

//console.log(minhaFuncao(pessoa, "altura"))
//Imprimiu "undefined".

//b. O valor do objeto não foi definido. 

//Exercícios de escrita de código
//1.
//a.
let pessoa = {
    nome: "Ariane", 
    apelidos: ["Ari", "Nani", "Ane"]

 }

 console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`);

//b. 
let copiaPessoa = {
    nome: "Ariane", 
    apelidos: ["Ari", "Nani", "Ane"]

 }

let novosApelidos = {...copiaPessoa, apelidos:"Ariri, Tereré, Té"};

console.log(novosApelidos);

//2. 
//a.
let dados1 = {
    nome: "Ariane", 
    idade: 28,
    profissao: "Estudante"

}

let dados2 = {
    nome: "Fernando", 
    idade: 31,
    profissao: "Gerente de MKT"

 }

//b. 
function array(objeto) {
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length];

}

console.log(array(dados1));
console.log(array(dados2));

//3.
//a 
let carrinho = [];

//b. 
let fruta1 = {
    nome: "Laranja",
    disponibilidade: true

}

let fruta2 = {
    nome: "Uva",
    disponibilidade: true
    
}

let fruta3 = {
    nome: "Mamão",
    disponibilidade: true

}

//c.
function dentroCarrinho(objeto) {
    return carrinho.push(objeto)
}

dentroCarrinho(fruta1);
dentroCarrinho(fruta2);
dentroCarrinho(fruta3);

//d. 
console.log(carrinho);