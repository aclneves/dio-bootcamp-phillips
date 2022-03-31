//tipos primitivos

// Boolean
var vOuF = false;
console.log(vOuF + ' - tipo: ' + typeof(vOuF));

// Number
var numeroQualquer = 1;
console.log(numeroQualquer + ' - tipo: ' + typeof(numeroQualquer));

// String
var nome = 'Eu';
console.log(nome + ' - tipo: ' + typeof(nome));

// var
var variavel; //variável de escopo global e local
variavel = "Antonio";
console.log(variavel + ' - tipo: ' + typeof(variavel)); //

// let
let variavel2; //variavel de escopo local
variavel2 = "Neves";
console.log(variavel2 + ' - tipo ' + typeof(variavel2)); 

// const
const constante = "Constante"; //variavel de escopo local que não pode ter seu valor alterado
console.log(constante + ' - tipo: ' + typeof(constante));

// Escopos
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoGlobal() {
    let escpoLocalInternet = 'local'; 
}

// se eu tentar fazer um console.log(escopoLocalInterno) dará erro, pois só funciona dentro da função

//atribuição
var atribuicao = 'Antonio';

//comparação
var comparacao = '0' == 0;
console.log(comparacao);

//comparação idêntica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//adição
var adicao = 1 + 1;
console.log(adicao);

//subtracao
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//divisao real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//divisao inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//exponenciacao
var exponenciacao = 2 ** 10;
console.log(exponenciacao);

//maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que
var menorQue = 5 < 2;
console.log(menorQue);

// maior ou iguak
var maiorOuIgual = 5 >= 5;
console.log(maiorOuIgual);

//menor ou igual
var menorOuIgual = 3 <= 7;
console.log(menorOuIgual);

// e , ou , não

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);