let array = [1, 2, 3, 4, 5];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

//for

for (let indice = 0; indice < array.length; indice++) {
    console.log(array[indice]);
}

//for in array
for (let i in array) {
    console.log(i); // irá imprimir os índices do vetor
}

//for in object
for (i in object) {
    console.log(i); // irá imprimir os índices do objeto
}

for (i in object) {
    console.log(object[i]); // irá imprimir os valores das propriedades do objeto
}

// for of
for (i of array) {
    console.log(i);
}

//while

var a = 0;
var b = 0;

while (a < 10) {
    a++;
    console.log(a);
}

do {
    b++;
    console.log(b);
} while (b < 10)
