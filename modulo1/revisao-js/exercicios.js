// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b) => a - b);
}

//EXERCÍCIO 04
let array = [1, 2, 3, 4, 5, 6];
let arrayPares = [];

function retornaNumerosPares(array) {
    let arrayPares = [];

    for (let item of array){
        if(item % 2 == 0){
            arrayPares.push(item);
        }
    }
  return arrayPares;
}

// EXERCÍCIO 05
let arrayElevado = [];

function retornaNumerosParesElevadosADois(array) {
    let arrayElevado = [];

    for (let item of array){
        if(item % 2 == 0){
            item = item * item;
            arrayElevado.push(item);
        }
    }
  return arrayElevado;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) { 
    let maiorNumero = array[0];

    for (let i = 1; i < array.length; i++){
        if (array[i] > maiorNumero){
            maiorNumero = array[i];
        }
    }
  return maiorNumero;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero;
    let menorNumero;

    if (num1 < num2){
        menorNumero = num1
        maiorNumero = num2
    }else{
        maiorNumero = num1
        menorNumero = num2
    }
    let objeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorNumero % menorNumero == 0,
        diferenca: maiorNumero - menorNumero
    }
    return objeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];

    for (let i = 0; i < n; i++) {
        numerosPares.push(i * 2);
    }
    return numerosPares;
}
 
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC && ladoC === ladoA){
        return "Equilátero";
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
        return "Escaleno";
    } else{
        return "Isósceles";
    }
}
        
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let novoArray = array.sort((a, b) => a -b);
  return [novoArray[novoArray.length-2], novoArray[1]];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let novaPessoa = {
       ...pessoa, nome: "ANÔNIMO"
   }
   return novaPessoa;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter(item => item.altura >= 1.5 && item.idade > 14 && item.idade < 60);
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter(item => !(item.altura >= 1.5 && item.idade > 14 && item.idade < 60));
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let nome of contas){
        nome.saldoTotal -= nome.compras.reduce((soma, valor) => soma += valor, 0)
        nome.compras = [];
    }
    return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let classificador = new Intl.Collator();
    return consultas.sort((a, b) => classificador.compare(a.nome, b.nome));
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   let valorDaData = data => {
       let partes = data.split('/');
       let novaData = new Date(partes[2], partes[1], partes[0]);
       return novaData.getTime();
   }

   return consultas.sort((a, b) => valorDaData(a.dataDaconsulta) - valorDaData(b.dataDaconsulta));
}