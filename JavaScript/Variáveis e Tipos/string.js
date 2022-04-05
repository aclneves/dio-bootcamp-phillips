let nome = 'Antonio';
let sobrenome = 'Neves';

let concatenado = nome.concat(sobrenome);
console.log(concatenado);
console.log(concatenado.length);

let exemplo = new String('Antonio Neves'); // objeto
console.log(typeof(exemplo));  

let vazio = '';

console.log(nome[2]);

concatenado = nome + " " + sobrenome;
console.log(concatenado);

concatenado = `${sobrenome} ${nome}`;
console.log(concatenado);

let frase = "Olá, tudo bem?"
console.log(frase.split(" "));

let fraseModificada = frase.replace(",", "!");
fraseModificada = fraseModificada.replace("t", "T");

console.log(fraseModificada);