function arrayToSet(arr) {
    let unicos = new Set(arr);
    return [...unicos];
}

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(arrayToSet(meuArray));