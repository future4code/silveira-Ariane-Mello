//Exercícios de interpretação de código

//1. 
//a) Imprime 2*5 = 10 e 10*5 = 50.

//b) Apenas é executada a função, mas não é impressa. 

//2. 
//a) Pede ao usuário para inserir um texto, transforma-o para letras minúsculas e verifica se contém a palavra "cenoura" no texto inserido. Se sim imprime true, se não imprime false. 

//b) 
//i. True.
//ii. True.
//iii. True.

//Exercícios de escrita de código

//1.
//a)
function nenhumParametro() {
   
    console.log("Eu sou Ariane, tenho 28 anos, moro em São José dos Campos e sou estudante.");

}

nenhumParametro();

//b)
function quatroParametros(nome, idade, cidade, profissao) {
    let info = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
    console.log(info);
    return info;
}

quatroParametros("Ariane", "28", " São José dos Campos", " estudante");

//2.
//a)
function soma(numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(14, 2));

//b)
function doisNum(num1, num2) {
    return num1 >= num2;
}

console.log(doisNum(14,2));

//c)
function parOuNao(numero) {
    return numero % 2 === 0;
}

console.log(parOuNao(7));

//d)
function mensagem(string) {
    console.log(`${string.length}, ${string.toUpperCase()}`);
}

mensagem("Hoje é quinta-feira, que já é quase sextou!!!");

//3.
function soma(num1, num2) {
    console.log(`Soma: ${num1 + num2}`);
}

function subtracao(num1, num2) {
    console.log(`Subtração: ${num1 - num2}`);
}

function divisao(num1, num2) {
    console.log(`Divisão: ${num1 / num2}`);
}

function multiplicacao(num1, num2) {
    console.log(`Multiplicação: ${num1 * num2}`);
}

let num1 = Number(prompt("Insira um número:"));
let num2 = Number(prompt("Insira outro número:"));

console.log(`Números inseridos: ${num1} e ${num2}`);
soma(num1, num2);
subtracao(num1, num2);
multiplicacao(num1, num2); 
divisao(num1, num2);