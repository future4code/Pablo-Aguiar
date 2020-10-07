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
console.log("Bem vindo ao jogo de Blackjack!")
if(confirm ("Quer iniciar uma nova rodada?")) {
   let cartasUsuario = []
   let cartasComputador = []
   let carta = {}
   let valorUsuario = 0
   let valorComputador = 0
   while(cartasUsuario.length < 2){
      carta = comprarCarta()
      cartasUsuario.push(carta.texto)   
      valorUsuario += carta.valor
   }
   carta = {}
   while(cartasComputador.length < 2){
      carta = comprarCarta()
      cartasComputador.push(carta.texto)   
      valorComputador += carta.valor
   }
   console.log("Usuario - cartas: " + cartasUsuario + " pontuação: " + valorUsuario)
   console.log("Computador - cartas: " + cartasComputador + " pontuação: " + valorComputador)
   if(valorComputador > valorUsuario){
      console.log("O computador ganhou!")
   }
   if(valorComputador < valorUsuario){
      console.log("O usuario ganhou!")
   }
   if(valorComputador === valorUsuario){
      console.log("Empate")
   }
   
 } else {
    console.log("O jogo acabou")
 }

