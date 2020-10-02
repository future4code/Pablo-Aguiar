//exercicios de interpretação de cod.

//1-

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i  
// }
// console.log(valor)

//o codigo em questao soma o valor de "i" à variavel "valor" por 5 rodadas consecutivas
// resultado impresso: 10

//2-

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//a- resultados impressos: 19, 21, 23, 25, 27, 30
//b- o "for..of..." não é suficiente p acessar cada numero do array

//exercicios de escrita de cod.

//3-

//a-
// const arrayOriginal = [12, 22, 43, 45, 65, 70]
// for(let i=0; i < arrayOriginal.length; i++) {
//     console.log(arrayOriginal[i])
// }

//b-
// const arrayOriginal = [12, 22, 43, 45, 65, 70]
// for(let i=0; i < arrayOriginal.length; i++) {
//     console.log(arrayOriginal[i]/10)
// }

//c-
// const arrayOriginal = [12, 22, 43, 45, 65, 70]
// let arrayPar = []
// for(let i=0; i < arrayOriginal.length; i++) {
// if(arrayOriginal[i]%2 === 0) arrayPar.push(arrayOriginal[i])
// }
// console.log(arrayPar)

//d-
// const arrayOriginal = [12, 22, 43, 45, 65, 70]
// for(let i=0; i < arrayOriginal.length; i++) {
//     console.log("O elemento do index " + i + " é: " + arrayOriginal[i])
//}

//e-
// const arrayOriginal = [12, 22, 43, 45, 65, 70]
// let maiorValor = 0
// let menorValor = Infinity
// for(let i=0; i < arrayOriginal.length; i++) {
//     if(arrayOriginal[i] > maiorValor) {maiorValor = arrayOriginal[i]}
//     if(arrayOriginal[i] < menorValor) {menorValor = arrayOriginal[i]}
// }
// console.log("O maior numero é " + maiorValor + " e o menor é " + menorValor)

