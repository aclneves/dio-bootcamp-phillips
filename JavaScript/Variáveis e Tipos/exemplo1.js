//Hoisting

numberOne = 1;
console.log(numberOne + 2);


//Emxplo de let e escopo global e de bloco
var firstName = 'João';
var lastName = 'Souza';

if(firstName === 'João') {
    var firstName = 'Pedro';
    let lastName = 'Silva';

    console.log(firstName, lastName);
}

console.log(firstName, lastName);