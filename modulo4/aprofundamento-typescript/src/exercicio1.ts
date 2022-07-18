// a) O tipo 'number' não pode ser atribuído ao tipo 'string'.

// const minhaString: string = 7;

// b) Utilizar o union type '|'. 

// const meuNumero: number | string = 7;

// c) e d)

type person = {
    name: string,
    age: number,
    favouriteColour: string
};

enum RainbowColors {
    VERMELHA = 'VERMELHA',
    LARANJA = 'LARANJA',
    AMARELA = 'AMARELA',
    VERDE = 'VERDE',
    AZUL = 'AZUL',
    ANIL = 'ANIL',
    VIOLETA = 'VIOLETA'
};

const person1: person = {
    name: 'Ariane',
    age: 28,
    favouriteColour: RainbowColors.AMARELA
};

const person2: person = {
    name: 'Fernando',
    age: 30,
    favouriteColour: RainbowColors.AZUL
};

const person3: person = {
    name: 'Brisa',
    age: 2,
    favouriteColour: RainbowColors.VIOLETA
};

console.log(person1, person2, person3);
