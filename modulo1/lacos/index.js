/*Exercícios de interpretação de código

1. Declara a variável valor = 0, enquanto i for menor que 5 incrementa +1 na sua somatória, se não o laço não é finalizado/interrompido.  Imprime "10". 

2. 
a. Será impresso os valores maiores que 18 do array, sendo: 19, 21, 23, 25, 27 e 30. 

b.  Sim, mas somente com uma adaptação de um contador é possível ter acesso ao índice de cada elemento do array. Segue abaixo:

let lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
 
let i = 0;
for (let numero of lista) {
	if (numero > 18) {
		console.log(numero)
}
i++;
};

3. Se o usuário digitasse 4, a saída seria uma sequência de asteriscos, sendo: 
*
**
***
****
*/

// Exercícios de escrita de código

//1.
let numeroDePets = Number(prompt("Quantos bichinhos de estimação você tem?"));
let nomeDosPets = [];

if (numeroDePets == 0){
    
    console.log("Que pena! Você pode adotar um pet!");

} else {
  for (let i = 0; i < numeroDePets; i++){
    nomeDosPets[i] = prompt(`Qual o nome do seu ${i + 1}° pet?`);
};

  for (let i = 0; i < numeroDePets; i++){
	
    console.log(nomeDosPets[i]);
};
};

//2.
//a)
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]; 

for (let i = 0; i < arrayOriginal.length; i++){

    console.log(arrayOriginal[i]);
};

//b) 
for (let i of arrayOriginal){

	console.log(i/10);
}; 

//c)
let arrayNovo = [];
for (let i of arrayOriginal){
	if ((i % 2) == 0){
	arrayNovo.push(i);
};

//d)
let arrayFrase = [];
for (let i = 0; i < arrayOriginal.length; i++){
	arrayFrase[i] = (`O elemento do índice ${i} é igual a ${arrayOriginal[i]}`);
};

for (let frase of arrayFrase){
	
console.log(frase);

};

//e)
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

let minimo = arrayOriginal[0];
let maximo = arrayOriginal[0]; 

for (let numero of arrayOriginal){ 
	if (numero < minimo){
		minimo = numero;
	};

	if (numero > maximo){
		maximo = numero;
	};
}; 

console.log(`O maior número é ${maximo} e o menor é ${minimo}.`);