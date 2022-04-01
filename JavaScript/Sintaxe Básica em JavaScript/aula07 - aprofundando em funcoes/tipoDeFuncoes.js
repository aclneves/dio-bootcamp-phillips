// tipos de função

// declarativa

function ola() {
    console.log('Olá!')
}

ola();

// expressão de função
// com nomeação

var funcao = function funcao() {
    console.log('Sou uma mensagem de função de expressão!')
}

funcao();

// sem nomeação 

var funcao2 = function() {
    console.log('Sou uma mensagem de função de expressão!')
}

funcao2();

// arrow

var funcao3 = () => {
    console.log('Sou uma arrow function!')
}

funcao3();   