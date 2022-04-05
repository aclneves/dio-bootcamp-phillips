let array = [];

array.push(7);
array.push(2);

console.log(array);

array.pop();

console.log(array);

array.push(3);
array.push(5);

array.shift();
array.unshift(1);

console.log(array);

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log(array.includes(4));

console.log(array.every(item => item === 5));
console.log(array.some(item => item === 5));

let arrayInverso = array.reverse();
console.log(arrayInverso);