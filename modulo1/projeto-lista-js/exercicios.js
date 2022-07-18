// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura = Number(prompt("Insira a altura do retângulo:"));
let largura = Number(prompt("Insira a largura do retângulo:"));
let area = altura * largura;

console.log(area);

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Em que ano estamos?"));
  let anoNascimento = Number(prompt("Qual o ano do seu nascimento?"));
  let idade = anoAtual - anoNascimento;

  console.log(idade);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
    let imc = peso / (altura * altura);

    return imc; 

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = String(prompt("Qual é o seu nome?"));
  let idade = Number(prompt("Quantos anos você tem?"));
  let email = String(prompt("Qual é o seu e-mail?"));

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let corFavorita1 = String(prompt("Qual é a sua primeira cor favorita?"));
  let corFavorita2 = String(prompt("Qual é a sua segunda cor favorita?"));
  let corFavorita3 = String(prompt("Qual é a sua terceira cor favorita?"));
  let arrayCores = [corFavorita1, corFavorita2, corFavorita3];

  console.log(arrayCores);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let ingressosVendidos = custo / valorIngresso;

    return ingressosVendidos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let tamanho = string1.length === string2.length;

  return tamanho;

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
    return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length -1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let recebe = array[0];
  array[0] = array[array.length -1];
  array[array.length -1] = recebe;

  return array;

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let strings = string1.toLowerCase() === string2.toLowerCase();

  return strings;

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Informe o ano atual:");
  let anoNascimento = prompt("Informe o ano do seu nascimento:");
  let anoEmissao = prompt("Informe o ano de emissão do seu RG:");
  let idade = anoAtual - anoNascimento;
  let validade = anoAtual - anoEmissao;

  let criterio1 = (idade <= 20 && validade >= 5) ;
  let criterio2 = ((idade > 20 && idade <=50) && validade >= 10);
  let criterio3 = (idade > 50 && validade >= 15); 

  console.log(criterio1 || criterio2 || criterio3);

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return (ano % 400 == 0 || ano % 4 == 0 && ano % 100 != 0);
  
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt("Você tem mais que 18 anos?");
  let formacao = prompt("Você possui ensino médio completo?");
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");

  console.log(idade == "sim" && formacao == "sim" && disponibilidade == "sim");

}