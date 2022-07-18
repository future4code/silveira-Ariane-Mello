/* Exercícios de interpretação de código:

1. 
a. bool1 && bool2 
Resultado = False.

b. bool1 && bool2 && bool3 
Resultado = False.

c. !resultado && (bool1 || bool2) 
Resultado = True.

d. console.log("d. ", typeof resultado)
Resultado = Boolean.

2. O resultado será impresso como uma variável do tipo String, concatenando o resultado e não realizando a somatória. Exemplo: Ao invés de 1+1 = 2, imprime 1+1 = 11.

3. Basta definir o tipo da variável (string, number, etc).

let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Numbero(prompt("Digite outro numero!"));

*/

// Exercícios de escrita de código:

//1.
let suaIdade = Number(prompt("Digite sua idade:"));
let idadeAmigo = Number(prompt("Digite a idade do(a) seu(sua) melhor amigo(a):"));

console.log("Sua idade é maior do que a do seu amigo?", suaIdade > idadeAmigo);

//2.
let numeroPar = Number(prompt("Insira um número par:"));

console.log("O resto da divisão é:", numeroPar % 2);

/* c. O padrão se dá porque qualquer número par divido pelo número 2, terá sempre o resto da divisão igual a 0.

d. Se o usuário inserir um número ímpar, o console imprime que o resto da divisão é igual a 1, pois números ímpares não são divisíveis por 2. 

*/ 

//3.
let suaIdadeAnos = Number(prompt("Digite sua idade:"));
let meses = 12;
let dias = 365;
let horas = 24;

let idadeMeses = meses * suaIdadeAnos;
let idadeDias = dias * suaIdadeAnos;
let idadeHoras = horas * dias * suaIdadeAnos;

console.log("Sua idade é de", suaIdadeAnos, "anos.");
console.log("Sua idade em meses é de", idadeMeses, "meses.");
console.log("Sua idade em dias é de aproximadamente", idadeDias , "dias.");
console.log("Sua idade em horas é de aproximadamente", idadeHoras , "horas.");

//4. 
let numero1 = Number(prompt("Digite um número:"));
let numero2 = Number(prompt("Digite outro número:"));

let comparacao1 = numero1 > numero2;
let comparacao2 = numero1 === numero2;
let comparacao3 = numero1 % numero2;
let comparacao4 = numero2 % numero1;

console.log("O primeiro numero é maior que segundo?", comparacao1);
console.log("O primeiro numero é igual ao segundo?", comparacao2);
console.log("O primeiro numero é divisível pelo segundo?", comparacao3);
console.log("O segundo numero é divisível pelo primeiro?", comparacao4);