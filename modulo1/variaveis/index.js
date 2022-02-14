/* 

1. imprime o valor de b = 10. 
altera o valor de b = 5 e imprime a, b = 10 5. 

2. mostra o valor de a = 10, b = 20, porém diz que c = a, b = c, a =b, sendo assim imprime = 10 10 10.

3. trabalhaQuantasHorasPorDia
recebeQuantoPorDia

Exercícios de escrita de código: 

1.

*/

let nome;
let idade;

console.log("O tipo dessa variável 'nome' é", typeof nome);
console.log("O tipo dessa variável 'idade' é", typeof nome);

//Imprime variável indefinida, pois não foi atribuído nenhum valor. 

nome = String (prompt("Qual seu nome?"));
idade = Number (prompt("Qual sua idade?"));

console.log("O tipo dessa variável 'nome' é", typeof nome);
console.log("O tipo dessa variável 'idade' é", typeof idade);

//Imprime variável nome tipo string e idade tipo number. 

console.log ("Olá,", nome, "você tem", idade, "anos.");

/*

2.

*/

let exercitouHoje = prompt("Você já se exercitou hoje?");
let bebeuHoje = prompt("Vocẽ já bebeu água hoje?");
let dormiuBem = prompt("Você dormiu bem essa noite?");

console.log("Você já se exercitou hoje?", exercitouHoje);
console.log("Você já bebeu água hoje?", bebeuHoje);
console.log("Você dormiu bem essa noite?", dormiuBem);

/*

3.

*/

let a = 10;
let b = 25;
let c;

c = a;
a = b;
b = c;

console.log("O novo valor de 'a' é", a);
console.log("O novo valor de 'b' é", b);