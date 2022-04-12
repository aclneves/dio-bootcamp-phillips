
function soma(a: number, b: number) {
    return a + b;
}

console.log(soma(3, 5));

//types
//interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático'
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    domestico: false
}


const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    domestico: false
}

type IDomestico = IFelino | ICanino;

const pastor: IDomestico = {
    domestico: true,
    nome: 'Pastor Alemão',
    porte: 'grande',
    tipo: 'terrestre',
}

console.log(pastor.nome);