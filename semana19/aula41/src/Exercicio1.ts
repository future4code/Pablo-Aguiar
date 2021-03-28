//a
let minhaString: string = 4;
//da erro pq TS não permite adicionar numeros como strings

let meuNumero: number = 10;
//Para q essa variavel aceite tb strings devemos utilizar o UNION TYPE |
let meuNumeroB: number | string;
meuNumeroB = 10;
meuNumeroB = 'dez';

//c
let Objeto: {nome: string, idade: number, corFavorita: string};

//d
type Pessoa = {nome: string, idade: number, corFavorita: string};

const Pablo: Pessoa = {nome: "Pablo Aguiar", idade: 36, corFavorita: "azul"}
const Tyrion: Pessoa = {nome: "Tyrion Lannister", idade: 36, corFavorita: 'vermelho'}
const Eleanor: Pessoa = {nome: 'Eleanor of Aquitaine', idade: 81, corFavorita: 'violeta'}

//e
enum COR_ARCO_IRIS {
    AMARELO = "amarelo",
    ANIL = "anil",
    AZUL = "azul",
    LARANJA = "laranja",
    VERDE = "verde",
    VERMELHO = "vermelho",
    VIOLETA = "violeta"
}

type Pessoa2 = {nome: string, idade: number, corFavorita: COR_ARCO_IRIS};
const Pablo2: Pessoa = {nome: "Pablo Aguiar", idade: 36, corFavorita: COR_ARCO_IRIS.AZUL}
const Tyrion2: Pessoa = {nome: "Tyrion Lannister", idade: 36, corFavorita: COR_ARCO_IRIS.VERMELHO }
const Eleanor2: Pessoa = {nome: 'Eleanor of Aquitaine', idade: 81, corFavorita: COR_ARCO_IRIS.VIOLETA}