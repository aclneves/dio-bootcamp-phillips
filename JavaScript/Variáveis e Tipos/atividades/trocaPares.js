function trocaPares(array) {
    if(!array) return -1;
    if(array.length == 0) return -1;
    for (var i = 0; i < array.length; i++) {
        if(array[i] === 0) {
            console.log("Elemento já é igual a 0")
        } else if(array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }

    return array;
}

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [];

console.log(trocaPares(array));
console.log(trocaPares(array2));