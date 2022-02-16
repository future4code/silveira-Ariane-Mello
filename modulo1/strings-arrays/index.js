/*Exercícios de interpretação de código

1. 
a. Imprime variável array sem tipo definido. 

b. Imprime variável array com valor nulo.

c. Imprime tamanho da string = 11. 

d. 3.

e. Imprime o tamanho da string = (11) e substitui [i+1] = 4, por 19. 

(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

f. 9. 

2. Imprime "SUBI NUM ÔNIBUS EM MIRROCOS" 29, deixando em maiúscula, substituindo letra A por I e o tamanho da string = 27. 
*/

//Exercícios de escrita de código

//1.
let nomeUsuario = prompt("Insira o seu nome:");
let emailUsuario = prompt("Insira o seu e-mail:");

console.log("O e-mail " + emailUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeUsuario +".");

//2. 
const comidasPreferidas = ["Strogonoff de Grão de Bico", "Guacamole", "Japonesa", "Risotto de Funghi", "Chocolate"];

//a.
console.log(comidasPreferidas);

//b. 
console.log(`Essas são as minhas comidas preferidas: 
    ${comidasPreferidas[0]},
    ${comidasPreferidas[1]},
    ${comidasPreferidas[2]},
    ${comidasPreferidas[3]},
    ${comidasPreferidas[4]}.`);
    
//c.
comidasPreferidas[1] = prompt("Qual é a sua comida preferida?");

console.log(comidasPreferidas);

//3. 
//a.
let listaDeTarefas = [];

//b. 
let tarefa1 = prompt("Qual sua 1ª tarefa do dia?");
let tarefa2 = prompt("Qual sua 2ª tarefa do dia?");
let tarefa3 = prompt("Qual sua 3ª tarefa do dia?");

listaDeTarefas.push(tarefa1, tarefa2, tarefa3);

//c.
console.log(listaDeTarefas);

//d.
let escolhaIndice = Number(prompt(`Por favor, insira o índice de uma tarefa que você já realizou:
    0 - ${listaDeTarefas[0]}
    1 - ${listaDeTarefas[1]}
    2 - ${listaDeTarefas[2]}`));

//e.
listaDeTarefas.splice(escolhaIndice, 1);

//f.
console.log(listaDeTarefas);