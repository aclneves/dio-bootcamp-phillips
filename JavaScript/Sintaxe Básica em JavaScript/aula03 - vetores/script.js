// como declarar um array 
let exemplo = [1, 2, 3, 'String', [4, 5, 6]];
console.log(exemplo);

let array = ['Pera', 'Uva', 'Maçã', 'Banana', 'Limão', 'Laranja'];
console.log(array);
console.log(array[2]);

//for each
array.forEach(function(item, index) {console.log(item, index)});

//push
array.push('Morango');
console.log(array);

//pop
array.pop();
console.log(array);

//shift
array.shift();
console.log(array);

//unshift
array.unshift('Morango');
console.log(array);

//indexOf
console.log(array.indexOf('Banana'));

//splice
array.splice(0, 2);
console.log(array);

//slice
let arrayNovo = array.slice(0, 2);

//Objetos

let pessoa = {nome: 'Antonio', sobrenome: 'Neves', idade: 34, casado: true, conjuge: {nome: 'Priscilla', idade: 28}};

console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa.conjuge);

var nome = pessoa.nome;
console.log(nome);

var {nome, sobrenome} = pessoa; 
console.log(nome, sobrenome);