//Exercícios de escrita de código

//1. Imprime passando por todos os itens, com seus respectivos índices e o array completo. 

//2. Imprime o novoArrayB contendo os valores da propriedade "nome" de cada um dos itens do array.

//3. Imprime novoArrayC contendo os valores da propriedade "apelido" exceto os == "Chijo."

//1. 
let pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ];
 
//a)
let nomesDosPets = pets.map(item => item.nome);
 
console.log(nomesDosPets);

//b)
let racaSalsicha = pets.filter(item => item.raca == 'Salsicha');

console.log(racaSalsicha);

//c) 
let mensagemPromocao = pets.filter(item => item.raca == 'Poodle').map(item => `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`);

console.log(mensagemPromocao);

//2.
const produtos = [
    {nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5},
    {nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8},
    {nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6},
    {nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7},
    {nome: "Leite", categoria: "Bebidas", preco: 2.99},
    {nome: "Cândida", categoria: "Limpeza", preco: 3.30},
    {nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2},
    {nome: "Vinho Tinto", categoria: "Bebidas", preco: 55},
    {nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99},
    {nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80}
 ]

//a)
let nomesDosProdutos = produtos.map(item => item.nome);

console.log(nomesDosProdutos);

//b)
let precosComDesconto = produtos.map(item => {
    return {nome: item.nome, preco: (item.preco * (1 - 0.05)).toFixed(2)};
});

console.log(precosComDesconto);

//c)
let categoriaBebidas = produtos.filter(item => item.categoria =='Bebidas').map(item => item.nome);

console.log(categoriaBebidas);

//d)
let produtosYpe = produtos.filter(item => item.nome.includes('Ypê'));

console.log(produtosYpe);

//e)
let fraseNomeYpe = produtosYpe.map(item => `Compre ${item.nome} por R$ ${item.preco.toFixed(2)}.`);

console.log(fraseNomeYpe);