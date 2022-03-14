ˋˋˋ
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
 let arrayNumeroEscolhido = arrayDeNumeros.filter((item)=>{return item===numeroEscolhido})
  let quantidadeDeNumeros = arrayNumeroEscolhido.length
  if (quantidadeDeNumeros === 0){
    return 'Número não encontrado'
  }
  return `O número ${numeroEscolhido} aparece ${quantidadeDeNumeros}x`
}
ˋˋˋ