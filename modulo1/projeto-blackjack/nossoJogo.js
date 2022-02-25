/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!");

if(confirm("Quer iniciar uma nova rodada?")) {
   let primeiraCartaUsuario = comprarCarta();
   let segundaCartaUsuario = comprarCarta();
   let pontosUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor;

   let primeiraCartaComputador = comprarCarta();
   let segundaCartaComputador = comprarCarta();
   let pontosComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor;

   console.log(`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - Pontuação: ${pontosUsuario}.`);
   console.log(`Computador - cartas: ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - Pontuação: ${pontosComputador}.`);

   if (pontosUsuario > pontosComputador) {
   console.log("O usuário ganhou!");

   } else if (pontosComputador > pontosUsuario) {
   console.log("O computador ganhou!");

   } else {
   console.log("Empate!");
}

} else {
    console.log("O jogo acabou!");
};