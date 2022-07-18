//Exercícios de interpretação de código

//1.
//a) Pede ao usuário para digitar um número, onde o mesmo é armazenado em uma nova variável do tipo Number. Se faz um teste condicional onde, se o resto da divisão por 2 é igual a 0, imprime "Passou no teste.". Se o resto da divisão por 2 for diferente de 0, imprime "Não passou no teste.". 

//b) Números pares. 

//c) Números ímpares. 

//2.
//a) É utilizado o switch case para atribuir o preço para algumas frutas. Imprime a fruta inserida pelo usuário com seu respectivo preço. 

//b) "O preço da fruta Maçã é R$2,25.".

//c) "O preço da fruta Pêra é R$5,00.".

//3. 
//a) Pede ao usuário para inserir um número do tipo Number. 

//b) Se o usuário inserir o número 10 imprime "Esse número passou no teste" e um erro informando que a variável "mensagem" não foi definida, mas se o usuário inserir o número -10 imprime apenas o erro da variável "mensagem" não definida. 

//c) Sim, a declaração da variável "mensagem" foi descrita dentro do If e o console.log() fora. 

//Exercícios de escrita de código

//1.
//a) 
let idade = (prompt("Qual a sua idade?"));

//b) 
let idadeEmNumero = Number(idade);

//c)
if(idadeEmNumero >= 18){
   
    console.log("Você pode dirigir.");

} else{
   
    console.log("Você não pode dirigir.");

}

//2.
let turno = prompt("Qual turno do dia você estuda? Insira: M - Matutino, V - Vespertino ou N - Noturno.") .toUpperCase();

if (turno === "M"){

    console.log("Bom dia!");

} else if (turno === "V"){

    console.log("Boa tarde!");

} else if (turno === "N"){

    console.log("Boa noite!");

}

//3. 
let turnoSwitch = prompt("Qual turno do dia você estuda? Insira: M - Matutino, V - Vespertino ou N - Noturno.") .toUpperCase();

switch (turnoSwitch){
    case "M":
        console.log("Bom dia!");
        break;

    case "V":
        console.log("Boa tarde!");
        break;
    
    case "N":
        console.log("Boa noite!");

}

//4. 
let generoFilme = prompt("Qual o gênero do filme?");
let precoIngresso = Number(prompt("Qual o preço do ingresso?"));

if (generoFilme === "Fantasia" && precoIngresso < 15){

    console.log("Bom filme!");

} else{

    console.log("Escolha outro filme :(");

} 

//Desafios
//1.
let tipoFilme = prompt("Qual o gênero do filme?");
let valorIngresso = Number(prompt("Qual o preço do ingresso?"));

if (tipoFilme === "Fantasia" && valorIngresso < 15){

    let lanchinho = prompt("Qual lanchinho você vai comprar?");

    console.log("Bom filme!");

    console.log(`Aproveite o seu ${lanchinho}`);

} else {
    console.log('Escolha outro filme :(')
}

//2. 
let nomeCompleto = prompt("Informe seu nome completo:");
let tipoDeJogo = prompt("Insira: IN - Internacional ou DO - Doméstico:");
let etapaDoJogo = prompt("Insira: SF - Semi-final, DT - Decisão de Terceiro Lugar ou FI - Final:");
let categoria = Number(prompt("Escolha: 1, 2, 3 ou 4"));
let quantidadeIngresso = Number(prompt("Insira a quantidade de ingressos desejado:"));

