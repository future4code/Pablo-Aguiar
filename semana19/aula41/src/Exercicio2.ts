//a
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//a entrada p essa função é um array de numeros

//b
type estatistica = {
    maior: number,
    menor: number,
    media: number,
}

//c
type AmostraDeDados = {

    numeros: number[],   

    obterEstatisticas: (numeros: number[]) => estatistica
}

//apanhei bastante nesse exercicio